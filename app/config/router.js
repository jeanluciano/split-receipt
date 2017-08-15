
import { StackNavigator } from 'react-navigation';
import Main from '../screens/main';
import Camera from '../screens/camera';
import Login from '../screens/login';
import Dragndrop from '../screens/Dragndrop';
import Contacts from '../screens/contacts';
import Dragndrop from '../screens/dragndrop';
import LinkAccounts from '../screens/linkAccounts';
import PayPalMe from '../screens/linkAccounts/payPalMe';
import SendText from '../screens/sendText';
import PayPalWebView from '../screens/linkAccounts/payPalWebView';

export const Root = StackNavigator({
  contacts: {
    screen: Contacts
  },
   Dragndrop: {
    screen: Dragndrop,
  },
  Main: {
    screen: Main,
  },
  Camera: {
    screen: Camera,
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
