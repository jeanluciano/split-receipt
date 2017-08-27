import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Root from './config/router';
import store from './redux';

console.disableYellowBox = true;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

export default App;
