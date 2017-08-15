const CREATE_FRIENDS = 'CREATE_FRIENDS';
const READ_FRIEDNS = 'READ_FRIENDS';
const UPDATE_FRIEND = 'UPDATE_FRIEND';
const DESTROY_FRIEND = 'DESTROY_FRIENDS';

const createFriends = friend => ({ type: CREATE_FRIENDS, friend });
const readFriends = friends => ({ type: READ_FRIEDNS, friends });
const updateFriends = friend => ({ type: UPDATE_FRIEND, friend });
const destroyFriend = friend => ({ type: DESTROY_FRIEND, friend });

export default function friendsReducer(state = [], action) {
  switch (action.type) {
    case CREATE_FRIENDS:
      return [...state, ...action.friend];
    case READ_FRIEDNS:
      return [...state];
    case UPDATE_FRIEND:
      return state.map(friend => (friend.recordID === action.friend.recordID ? action.friend : friend));
    case DESTROY_FRIEND:
      return state.filter(friend => friend.recordID !== action.friend.recordID);
    default:
      return state;
  }
}

export const getFriends 
