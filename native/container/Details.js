import React, { Component } from 'react';
import { View ,Text ,Button,StatusBar} from 'react-native';
import { SafeAreaView, } from 'react-navigation'

class Details extends Component {
    constructor(props) {
        super(props);

    }
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
       
      };
    render() {
        return (
            <SafeAreaView >
                <Text>dsafdsa</Text>
            </SafeAreaView>
        );
    }
}

export default Details;