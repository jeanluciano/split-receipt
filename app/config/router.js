
import { StackNavigator } from 'react-navigation';
import Main from '../screens/main';
import Camera from '../screens/camera';
import Login from '../screens/login';
import Dragndrop from '../screens/Dragndrop';
import LinkAccounts from '../screens/linkAccounts';
import PayPalMe from '../screens/linkAccounts/payPalMe';

export const Root = StackNavigator({
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
  Dragndrop: {
    screen: Dragndrop,
  },
});
