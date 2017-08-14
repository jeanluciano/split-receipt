
import { StackNavigator } from 'react-navigation';
import Main from '../screens/main';
import Camera from '../screens/camera';
import Login from '../screens/login';
import Dragndrop from '../screens/Dragndrop'
import Contacts from '../screens/contacts'
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
  
});
