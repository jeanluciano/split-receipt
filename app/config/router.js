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
import OldTransactions from '../screens/OldTransactions';
import Transactions from '../screens/Transactions';
import InnerLogin from '../screens/components/Entry/Login';
import Splash from '../screens/components/Entry/Splash';
import PreLogin from '../screens/PreLogin';
import FinLogin from '../screens/FinLogin';


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
  DevMenu: {
    screen: menuify(DevMenu),
  },
  FinLogin: {
    screen: FinLogin,
},
  SendText: {
    screen: SendText,
  },
  Camera: {
    screen: Camera,
  },
  Transactions: {
    screen: Transactions,
  },
  Login: {
    screen: Login,
  },
  EditTable: {
    screen: EditTable,
  },
  Contacts: {
    screen: Contacts,
  },
  PreLogin: {
    screen: PreLogin,
  },
  InnerLogin: {
    screen: InnerLogin,
  },
  Splash: {
    screen: Splash,
  },
  Landing: {
    screen: menuify(Landing, ['#fff', '#cad3df', '#fff']),
  },
  Stack: {
    screen: Stack,
  },
  WebViews: {
    screen: WebViews,
  },
  PayPalMe: {
    screen: menuify(PayPalMe),
  },
});
