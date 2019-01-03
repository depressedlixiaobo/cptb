import React, { Component } from 'react';
import { SafeAreaView,View } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { createAppContainer,createBottomTabNavigator } from "react-navigation";
import Ionicons from '../../node_modules/react-native-vector-icons/FontAwesome'
import App from './App'
import WeiTao from './WeiTao'
import Mine from './Mine'
import ShopCar from './ShopCar'
import Msg from './Msg'
 
let tabbarIcon = (oName,aName)=>({ focused, horizontal, tintColor })=>{
    return <Ionicons name={aName?(focused?aName:oName):oName } color={tintColor}   size={20} />
}


let routeConfig = {
    Home:{
        screen: App,
        navigationOptions:
        {
            tabBarLabel: '首页',
            tabBarIcon:tabbarIcon('home','')
        }
    },
    WeiTao:{
        screen:WeiTao,
        navigationOptions:{
            tabBarLabel: '微淘',
            tabBarIcon:tabbarIcon('feed')
        }
        //title:'微淘'
    },
    Msg:{
        screen:Msg,
        navigationOptions:{
            tabBarLabel: '消息',
            tabBarIcon:tabbarIcon('heartbeat')
        }
    },
    ShopCar:{
        screen:ShopCar,
        navigationOptions:{
            tabBarLabel: '购物车',
            tabBarIcon:tabbarIcon('shopping-cart')
        }
    },
    Mine:{
        screen:Mine,
        navigationOptions:{
            tabBarLabel: '我的淘宝',
            tabBarIcon:tabbarIcon('user-circle-o')
        }
    },
}

const tabNavigator = createBottomTabNavigator(
    routeConfig ,
    {
        mode: 'modal',
        headerMode: 'none',
        tabBarOptions:{
           
            activeTintColor: 'tomato',
             inactiveTintColor: 'gray',
             //showLabel:false
        }
       
    }
)

const AppContainer = createAppContainer(tabNavigator)

class Root extends Component {
    componentDidMount() {
        SplashScreen.hide()
    }
    render() {
        return (
            
                  
                        <AppContainer />    
              
            
            
        );
    }
}


export default Root;