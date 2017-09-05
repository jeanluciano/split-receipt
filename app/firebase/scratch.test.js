import db from '../../server/models';
const User = db.model('user');
const Message = db.model('message');
import app from '../../server/app';

import chai from 'chai';
import chaiProperties from 'chai-properties';
import chaiThings from 'chai-things';
chai.use(chaiProperties);
chai.use(chaiThings);
const expect = chai.expect;
import supertest from 'supertest-as-promised';
import sinon from 'sinon';

describe('▒▒▒ Backend tests ▒▒▒', () => {

  beforeEach('Synchronize and clear database', () => db.sync({force: true}));

  after('Synchronize and clear database', () => db.sync({force: true}));

  describe('HTTP Server', () => {

    let agent;
    beforeEach('Set up agent for testing', () => {
      agent = supertest(app);
    });

    describe('api routes', () => {

      let obama;
      let biden;
      beforeEach('Seed users', () => {
        const users = [
          {email: 'obama@gmail.com'},
          {email: 'biden@gmail.com'}
        ];
        return User.bulkCreate(users, {returning: true})
          .then(createdUsers => {
            obama = createdUsers[0].id;
            biden = createdUsers[1].id;
          });
      });

      let obamaFirstMessage;
      let bidenFirstMessage;
      let obamaSecondMessage;
      beforeEach('Seed messages', () => {

        const messages = [
          {
            toId: biden,
            fromId: obama,
            body: 'HEYOOOOOOO',
          },
          {
            toId: obama,
            fromId: biden,
            body: 'WAAASSUUUUPP??',
          },
          {
            toId: biden,
            fromId: obama,
            body: 'nmu?',
          }
        ];

        return Message.bulkCreate(messages, {returning: true})
          .then(createdMessages => {
            obamaFirstMessage = createdMessages[0].id;
            bidenFirstMessage = createdMessages[1].id;
            obamaSecondMessage = createdMessages[2].id;
          });
      });

      describe('users', () => {

        it('serves up all users on request to GET /', () => {
          return agent
            .get('/users')
            .expect(200)
            .then(res => {
              expect(res.body).to.be.an('array');
              expect(res.body.length).to.be.equal(2);
              expect(res.body).to.contain.a.thing.with('id', obama);
              expect(res.body).to.contain.a.thing.with('id', biden);
            });
        });

        it('updates a user at PUT /{{usersId}}, sending a 201 response', () => {
          return agent
            .put(`/users/${obama}`)
            .send({
              email: 'potus@hotmail.com'
            })
            .expect(201)
            .then(res => {
              return User.findById(obama);
            })
            .then(user => {
              expect(user.email).to.be.equal('potus@hotmail.com');
            });
        });

      });

      describe('messages', () => {

        // find all messages whose `to` field matches the variable ID

        it('serves up all messages to a specific user on GET /to/{{recipientId}}', () => {
          return agent
            .get(`/messages/to/${obama}`)
            .expect(200)
            .then(res => {
              expect(res.body).to.be.an('array');
              expect(res.body.length).to.be.equal(1);
              expect(res.body[0].body).to.be.equal('WAAASSUUUUPP??');
            });
        });

        // find all messages whose `from` field matches the variable ID

        it('serves up all messages from a specific sender on GET /from/{{senderId}}', () => {
          return agent
            .get(`/messages/from/${obama}`)
            .expect(200)
            .then(res => {
              expect(res.body).to.be.an('array');
              expect(res.body.length).to.be.equal(2);
              expect(res.body).to.contain.a.thing.with.property('body', 'HEYOOOOOOO');
              expect(res.body).to.contain.a.thing.with.property('body', 'nmu?');
            });
        });

        // remember eager loading?

        it('serves up all messages—WITH FILLED IN REFERENCES—to a specific user on GET /to/{{recipientId}}', () => {
          return agent
            .get(`/messages/to/${obama}`)
            .expect(200)
            .then(res => {
              expect(res.body).to.be.an('array');
              expect(res.body.length).to.be.equal(1);
              expect(res.body[0].from.email).to.be.equal('biden@gmail.com');
              expect(res.body[0].to.email).to.be.equal('obama@gmail.com');
            });
        });

        it(`serves up all messages from a specific sender on GET /from/{{senderId}}
          and uses the Message model static getAllWhereSender in the process`, () => {

            // http://sinonjs.org/docs/#spies
            const getAllWhereSenderSpy = sinon.spy(Message, 'getAllWhereSender');

            return agent
              .get(`/messages/from/${obama}`)
              .expect(200)
              .then(res => {

                expect(res.body).to.be.an('array');
                expect(res.body.length).to.be.equal(2);

                expect(getAllWhereSenderSpy.called).to.be.equal(true);
                expect(getAllWhereSenderSpy.calledWith(obama.toString())).to.be.equal(true);

                getAllWhereSenderSpy.restore();

              });

          });

        it('adds a new message on POST /, responding with 201 and created message', () => {

          return agent
            .post('/messages')
            // post message
            .send({
              fromId: biden,
              toId: obama,
              body: 'You are my best friend. I hope you know that.'
            })
            .expect(201)
            // check db for message
            .then(res => {
              const createdMessage = res.body;
              return Message.findById(createdMessage.id)
            })
            .then(foundMessage => {
              expect(foundMessage.body).to.be.equal('You are my best friend. I hope you know that.');
            });

        });

      });

    });

});

});
