
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import { Provider } from 'react-redux'

import store from './src/store';

import Main from './src/Main';

export default class App extends React.Component{

  render() {
    return (
      <Provider store={store}> 
        <PaperProvider>
          <Main />
        </PaperProvider>
      </Provider>  
    );
  }  
}

AppRegistry.registerComponent('App', () => App);