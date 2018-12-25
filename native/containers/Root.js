import React, { Component } from 'react';
import { View,Text } from 'react-native';
import  { createAppContainer,createStackNavigator,createBottomTabNavigator } from 'react-navigation'

import  App from './App'
import  Details from './Details'
import  WeiTao from './WeiTao'


const stackNav = createStackNavigator( 
    {
        App: {
            screen:App,
        },
        Details:{
            screen:Details
        }
    }, 
    {
        // /headerMode:'none',
        initialRouteName: 'App'
    }

)
const appNavigator = createBottomTabNavigator(
    {
        Index:{
            screen:stackNav
        },
        WeiTao:{
            screen:WeiTao
        }
    }  
     
)


const AppContainer = createAppContainer(appNavigator)



class Root extends Component {
    constructor(props) {
        super(props);
      
    }
    render() {
        return (
            <AppContainer />
        );
    }
}

export default Root;