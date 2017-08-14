
import { StackNavigator } from 'react-navigation';
import Main from '../screens/main';
import Camera from '../screens/camera';
import Login from '../screens/login';
import Dragndrop from '../screens/Dragndrop';
import LinkAccounts from '../screens/linkAccounts';
import PayPalMe from '../screens/linkAccounts/payPalMe';
import SendText from '../screens/sendText';
import PayPalWebView from '../screens/linkAccounts/payPalWebView';

export const Root = StackNavigator({
  Main: {
    screen: Main,
  },
  Camera: {
    screen: Camera,
  },
  Dragndrop: {
    screen: Dragndrop,
  },
  LinkAccounts: {
    screen: LinkAccounts,
  },
  Login: {
    screen: Login,
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
