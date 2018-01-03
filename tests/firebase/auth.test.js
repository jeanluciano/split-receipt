const firebase = require('firebase');

const chai = require('chai');
const chaiProperties = require('chai-properties');
const chaiThings = require('chai-things');

chai.use(chaiProperties);
chai.use(chaiThings);
const expect = chai.expect;

// const supertest = require('supertest-as-promised');
// const sinon = require('sinon');

const {
  reformatUser,
  firebaseUpdateUser,
  firebaseUpdateUserFrom,
  firebaseLogIn,
  firebaseLogOut,
  firebaseSignUp,
} = require('../../app/firebase/auth');

describe('=== FIREBASE USER AND AUTH TEST ===', () => {

  describe('SIGN UP', () => {

    it('should return error for pre-existing user', () => {
      const user = firebaseSignUp('Jasonone@one.com', 'Jasonone', 'Jason', 'One')
      expect(user.error).to.be.a('string')
    })

    it('should update database with user', () => {
      const user = firebaseSignUp('Jasonone@eighteenseventyone.com', 'Jasoneighteenseventyone', 'Jason', 'Eighteenseventyone');
      expect(user.id).to.exist;
      expect(user.email).to.equal('Jasonone@eighteenseventyone.com')
      expect(user.giveName).to.equal('Jason')
      expect(user.familyName).to.equal('Eighteenseventyone')
    })
  })

});

