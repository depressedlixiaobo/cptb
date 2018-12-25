import React, { Component } from 'react';
import { View,Text,Image } from 'react-native';
import { createStackNavigator, createAppContainer,createTabNavigator } from "react-navigation";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
     
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>app.js</Text>
             </View>
        );
    }
}

export default App;
