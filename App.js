import React from 'react';
import FaceBookScreen from './Screens/FaceBook';
import InstagramScreen from './Screens/Instagram';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator ({
  FaceBook : {screen:FaceBookScreen},
  Instagram : {screen:InstagramScreen},
})

const AppContainer = createAppContainer(TabNavigator)