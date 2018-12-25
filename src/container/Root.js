import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator, createAppContainer,BottomTabBar,createBottomTabNavigator } from "react-navigation";
import Ionicons from '../../node_modules/react-native-vector-icons/Ionicons'
import App from './App'
import WeiTao from './WeiTao'



const tabNavigator = createBottomTabNavigator(
    {
        Home:{
            screen: App,
          title:'首页',
            tabBarLabel:'ccc'
        },
        WeiTao:{
            screen:WeiTao,
            //title:'微淘'
        }
    },
    {
        //initialRouteName:'Home',
        defaultNavigationOptions:({ navigation })=>{
           
            return {
                tabBarIcon:({ focused, horizontal, tintColor }) =>{
                   
                    const { routeName } = navigation.state;
                    let iconName;
                    if (routeName === 'Home') {
                        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                      } else if (routeName === 'WeiTao') {
                         
                        //  throw routeName;
                        iconName = `ios-options`//${focused ? '' : '-outline'}`;
                      }
                     
                         
                    // You can return any component that you like here! We usually use an
                    // icon component from react-native-vector-icons
                    return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
                }
            }
        },
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            //horizontal:true
          },
        // tabBarOptions:{
        //     activeTintColor: '#e91e63',
        //     labelStyle: {
        //         fontSize: 12,
        //       },
        //       style: {
        //       //  backgroundColor: 'blue',
        //       },
        // }
    }
)

const AppContainer = createAppContainer(tabNavigator)

class Root extends Component {
    
    render() {
        return (
            <AppContainer />
        );
    }
}


export default Root;