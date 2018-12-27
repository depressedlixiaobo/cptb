import React, { Component } from 'react';
import { View,Text } from 'react-native';

class Products1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    static navigationOptions = {
        title: 'Home',
      };

      
    render() {
        return (
            <View>
                <Text>Products.js</Text>
            </View>
        );
    }
}

export default Products1;