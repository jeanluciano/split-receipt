import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Main from '../screens/Main';
import Camera from '../screens/Camera';
import Login from '../screens/Login';
import Dragndrop from '../screens/DragNDrop';
import Contacts from '../screens/Contacts';
import LinkAccounts from '../screens/linkAccounts';
import PayPalMe from '../screens/linkAccounts/PayPalMe';
import SendText from '../screens/SendText';
import PayPalWebView from '../screens/linkAccounts/PayPalWebView';
import Landing from '../screens/Landing';
import DevMenu from '../screens/DevMenu';
import menuify from './menuify';
import Stack from '../screens/Stack';
import Transactions from '../screens/Transactions';
import NTrans from '../screens/NTrans';
// import NTransactions from '../screens/NTransactions';

Transactions.navigationOptions = { title: 'My chats' };

export default DrawerNavigator({
  Transactions: {
    screen: NTrans,
  },
  Landing: {
    screen: menuify(Landing, ['#fff', '#cad3df', '#fff']),
  },
  DevMenu: {
    screen: menuify(DevMenu),
  },
  Stack: {
    screen: Stack,
  },
  Camera: {
    screen: Camera,
  },
  Main: {
    screen: Main,
  },
  Contacts: {
    screen: Contacts,
  },
  Dragndrop: {
    screen: Dragndrop,
  },
  Login: {
    screen: menuify(Login),
  },
  LinkAccounts: {
    screen: menuify(LinkAccounts),
  },
  PayPalMe: {
    screen: PayPalMe,
  },
  PayPalWebView: {
    screen: PayPalWebView,
  },
  SendText: {
    screen: SendText,
  },
});
