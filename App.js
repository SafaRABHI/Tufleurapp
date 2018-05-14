/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
/*import {
  Platform,
  StyleSheet,
  Text,
  Button,
    TextInput,
  TouchableOpacity,
  ImageBackground,
  View
} from 'react-native';*/
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from 'aut/reducers';
//import reducers from './reducers';
/*import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']); */



import Aut from 'aut/screenaut/Aut';
import AutProfile from 'aut/screenaut/AutProfile';
import AutFormulaire from 'aut/screenaut/AutFormulaire';
import PageNext from 'aut/screen/PageNext';
import Discover from 'aut/Discover/Discover';
const AppNavigator = StackNavigator({
//Discover :{screen:Discover},

 
AutScreen: { screen: Aut }, 
AutProfile: { screen: AutProfile },
NextScreen: { screen: PageNext },
AutFormulaire: { screen: AutFormulaire },
Discover :{
  screen:Discover,
  navigationOptions: {
    title: 'Discover',
    headerLeft: false
  }

}
  
});

/*console.ignoredYellowBox = [
  'Remote debugger is in a background tab which may cause apps to perform slowly. Fix this by foregrounding the tab (or opening it in a separate window).',
]; */
export default class App extends Component<Props> {
 
 // <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk) )}>
 
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk) )}>
    <AppNavigator />
    </Provider>
    );
  }
}

