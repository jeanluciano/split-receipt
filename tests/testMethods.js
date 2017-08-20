import { addFriend } from '../app/redux/friends'

export const sendDummyText = function (friends, callBack) {
  return function thunk(dispatch) {
  	console.log('LOADING TEST FRIENDS')
  	friends.map(friend => dispatch(addFriend(friend)))
  	callBack();
  };
};
