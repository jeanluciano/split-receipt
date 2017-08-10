
import { StackNavigator } from 'react-navigation';
import Main from '../screens/main';
import Camera from '../screens/camera';
import Login from '../screens/login';
import Dragndrop from '../screens/Dragndrop';
import LinkPayPal from '../screens/linkPayPal';
  
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
  Login: {
    screen: Login,
  },
  LinkPayPal: {
    screen: LinkPayPal,
  },
});
