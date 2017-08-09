
import { StackNavigator } from 'react-navigation';
import Main from '../screens/main';
import Camera from '../screens/camera';
import Login from '../screens/login';
import Dragndrop from '../screens/Dragndrop'
  
export const Root = StackNavigator({
  Camera: {
    screen: Camera,
  },
  Dragndrop: {
    screen: Dragndrop,
  },
  Login: {
    screen: Login,
  },
  Main: {
    screen: Main,
  },
});
