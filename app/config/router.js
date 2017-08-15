
import { StackNavigator } from 'react-navigation';
import Main from '../screens/main';
import Camera from '../screens/camera';
import Login from '../screens/login';
import Dragndrop from '../screens/Dragndrop';
import LinkAccounts from '../screens/linkAccounts';
import PayPalMe from '../screens/linkAccounts/payPalMe';
import SendText from '../screens/sendText';
import Landing from '../screens/Landing';

export const Root = StackNavigator({
  Landing: {
    screen: Landing,
  },
  Main: {
    screen: Main,
  },
  PayPalMe: {
    screen: PayPalMe,
  },
  Login: {
    screen: Login,
  },
  LinkAccounts: {
    screen: LinkAccounts,
  },
  Camera: {
    screen: Camera,
  },
  Login: {
    screen: Login,
  },
  Dragndrop: {
    screen: Dragndrop,
  },
  SendText: {
    screen: SendText,
  }
});
