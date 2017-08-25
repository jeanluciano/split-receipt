import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Camera from '../screens/Camera';
import Login from '../screens/Login';
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
import InnerLogin from '../screens/components/Entry/Login';
import Splash from '../screens/components/Entry/Splash';
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
  InnerLogin: {
    screen: InnerLogin,
  },
  PreLogin: {
    screen: PreLogin,
  },
  Splash: {
    screen: Splash,
  },
  DevMenu: {
    screen: menuify(DevMenu),
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
  Stack: {
    screen: Stack,
  },
  Camera: {
    screen: Camera,
  },
  Contacts: {
    screen: Contacts,
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
