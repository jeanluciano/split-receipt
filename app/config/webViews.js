import {StackNavigator} from 'react-navigation';

export default StackNavigator({
  LinkAccounts: {
    screen: menuify(LinkAccounts),
  },
  PayPalWebView: {
    screen: menuify(PayPalWebView),
  },
})