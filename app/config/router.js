import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Main from '../screens/main';
import Camera from '../screens/camera';
import Login from '../screens/login';
import Dragndrop from '../screens/dragNDrop';
import Contacts from '../screens/contacts';
import LinkAccounts from '../screens/linkAccounts';
import PayPalMe from '../screens/linkAccounts/payPalMe';
import SendText from '../screens/sendText';
import PayPalWebView from '../screens/linkAccounts/payPalWebView';
import DevMenu from '../screens/devMenu';
import Stack from '../screens/stack';

export const Root = DrawerNavigator({
  
  DevMenu: {
    screen: DevMenu,
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
    screen: Login,
  },
  LinkAccounts: {
    screen: LinkAccounts,
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
