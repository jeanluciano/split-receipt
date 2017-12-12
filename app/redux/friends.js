/**
 * ACTION TYPES
 */
const CREATE_FRIENDS = 'CREATE_FRIENDS';
const READ_FRIENDS = 'READ_FRIENDS';
const UPDATE_FRIEND = 'UPDATE_FRIEND';
const DESTROY_FRIEND = 'DESTROY_FRIENDS';

/**
 * HELPER FUNCTIONS
 */
const priceToString = (priceNum) => {
  if (!priceNum) console.error('ITEM HAS NO PRICE');
  const price = priceNum.toString().split('.')
  const dollar = price[0].padStart(1, '0');
  let cent = '';
  if (!price[1]) cent = '00';
  else cent = price[1].padEnd(2, '0');
  return `${dollar}.${cent}`;
}

const friendPriceToString = (friend) => {
  friend.items.forEach((item) => { item.priceString = priceToString(item.price) })
  if (friend.total) friend.totalString = priceToString(friend.total)
  return friend
}

/**
 * ACTION CREATORS
 */
const createFriends = friend => ({ type: CREATE_FRIENDS, friend });
const readFriends = () => ({ type: READ_FRIENDS });
const updateFriends = friend => ({ type: UPDATE_FRIEND, friend });
const destroyFriend = friend => ({ type: DESTROY_FRIEND, friend });


/**
 * REDUCER
 */
export default function friendsReducer(friends = [], action) {
  switch (action.type) {
    case CREATE_FRIENDS:
      return [...friends, action.friend];
    case READ_FRIENDS:
      return [...friends];
    case UPDATE_FRIEND:
      return friends.map(friend => (friend.recordID === action.friend.recordID ? action.friend : friend));
    case DESTROY_FRIEND:
      return friends.filter(friend => friend.recordID !== action.friend.recordID);
    default:
      return friends;
  }
}

/**
 * THUNK CREATORS
 */
export const getFriends = function () {
  return function thunk(dispatch) {
    dispatch(readFriends())
  };
};

export const addFriend = function (friend) {
  return function thunk(dispatch) {
    dispatch(createFriends(friend))
  };
};

export const putFriend = function (friend) {
  return function thunk(dispatch) {
    friendPriceToString(friend)
    dispatch(updateFriends(friend))
  };
};

export const deleteFriend = function (friend) {
  return function thunk(dispatch) {
    dispatch(destroyFriend(friend))
  };
};
