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
import EditTable from '../screens/EditTable';
import Transactions from '../screens/Transactions';
import Animate from '../screens/Animate';
import Explanation1 from '../screens/components/Initial/Explanation4';
import Splash from '../screens/Splash';
import PreLogin from '../screens/PreLogin';


const WebViews = StackNavigator({
  LinkAccounts: {
    screen: LinkAccounts,
  },
  PayPalWebView: {
    screen: PayPalWebView,
  },
})

Transactions.navigationOptions = { title: 'My chats' };

export default DrawerNavigator({
  TestLogin: {
    screen: PreLogin,
  },
  Splash: {
    screen: Splash,
  },
  Animate1: {
    screen: Explanation1,
  },
  Login: {
    screen: Login,
  },
  Transactions: {
    screen: Transactions,
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
  WebViews: {
    screen: WebViews,
  },
  PayPalMe: {
    screen: menuify(PayPalMe),
  },
  SendText: {
    screen: SendText,
  },
  EditTable: {
    screen: EditTable,
  },
});
