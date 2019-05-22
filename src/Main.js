import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from './screens/Auth/Login';
import Signup from './screens/Auth/Signup';
import ForgotPassword from './screens/Auth/ForgotPassword';
import AccountContainer from './screens/Account/AccountContainer';

const AppNavigator = createStackNavigator({
   Login: Login,
   Signup: Signup,
   ForgotPassword: ForgotPassword,

   AccountContainer: AccountContainer
},
{
   initialRouteName: "Login"
}
);

const AppContainer = createAppContainer(AppNavigator);

export default class Main extends React.Component {

  render() {
     return (
      <AppContainer />
     );
  }
}