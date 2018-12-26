import React, { Component } from 'react';
import { View,Text,Image,Button,StatusBar,SafeAreaView } from 'react-native';
import { createStackNavigator, createAppContainer,createTabNavigator } from "react-navigation";
import Products from './app/Products'
import Products1 from './app/Products1'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    render() {
        return (
         
              
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center"  }}>
                 
           
                <Text>app.js1</Text>
                <Button title='点击跳转微淘' onPress={()=>{ this.props.navigation.navigate('WeiTao')}} /> 

                <Button title='点击跳转消息'  onPress={()=>{ this.props.navigation.navigate('Msg')}} /> 

                <Button title='全屏产品页' onPress={()=>{ this.props.navigation.navigate('Products')}} /> 
                <Button title='带头部产品页' onPress={()=>{ this.props.navigation.navigate('Products1')}} /> 
                <Button title='打开全屏' onPress={()=>{ this.props.navigation.navigate('WeiTao')}} /> 
             </View>
         
        );
    }
}
const stackNav = createStackNavigator(
    {
        Index:{
            screen:App,
            navigationOptions: {
                // header:null,
                headerTintColor:'#000',
           
              
            }
         
        },
        Products : {
            screen:Products,
            navigationOptions:({navigation})=>({
               // header:null,
                //headerMode:'none',
               
                headerTransparent:true
                //headerTintColor:'red'
              // headerBackTitle: null
            })
        },
        Products1 : {
            screen:Products1,
            navigationOptions:({navigation})=>({
                 
                title:'aaa'
            })
        }
        
    },
    {
      
        //default
    }
)


const AppContainer = createAppContainer(stackNav)


export default AppContainer;
