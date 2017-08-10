
import { StackNavigator } from 'react-navigation';
import Main from '../screens/main';
import Camera from '../screens/camera';
import Login from '../screens/login';
import Dragndrop from '../screens/Dragndrop'
  
export const Root = StackNavigator({
  Main: {
    screen: Main,
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
});
