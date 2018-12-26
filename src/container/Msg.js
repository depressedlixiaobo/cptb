import React, { Component } from 'react';
import { View,Text,Image } from 'react-native';
import { createStackNavigator, createAppContainer,createTabNavigator } from "react-navigation";

class Msg extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    // static navigationOptions = {
    //     tabBarLabel: '首页',
    //   };
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Mine.js1</Text>
             </View>
        );
    }
}

export default Msg;
