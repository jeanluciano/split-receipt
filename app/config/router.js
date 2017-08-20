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
import Landing from '../screens/landing';
import DevMenu from '../screens/devMenu';
import menuify from './menuify';
import Stack from '../screens/stack';

export const Root = DrawerNavigator({
  DevMenu: {
    screen: menuify(DevMenu),
  },
  Landing: {
    screen: menuify(Landing, ['#fff', '#cad3df', '#fff']),
  },
  Stack: {
    screen: Stack,
  },
  Camera: {
    screen: menuify(Camera),
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
