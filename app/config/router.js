
import { StackNavigator } from 'react-navigation';
import Main from '../screens/main';
import Camera from '../screens/camera';
import Login from '../screens/login';
<<<<<<< HEAD
import Dragndrop from '../screens/Dragndrop';
=======
import Dragndrop from '../screens/dragNDrop';
>>>>>>> master
import Contacts from '../screens/contacts';
import LinkAccounts from '../screens/linkAccounts';
import PayPalMe from '../screens/linkAccounts/payPalMe';
import SendText from '../screens/sendText';
import PayPalWebView from '../screens/linkAccounts/payPalWebView';
import DevMenu from '../screens/devMenu';

export const Root = StackNavigator({
  DevMenu: {
    screen: DevMenu,
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
