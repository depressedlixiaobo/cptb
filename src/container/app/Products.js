import React, { Component } from 'react';
import { View,Text ,ScrollView} from 'react-native';
 

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    static navigationOptions = {
        //headerTransparent:true,
       // headerBackground:<View style={{height:88,backgroundColor:'rgba(0,0,0,0.5)'}}></View>,
          headerBackgroundTransitionPreset:'fade'
      };
      handleScroll = (e)=>{
       
      }
    render() {
        return (
        
                <ScrollView onScroll={this.handleScroll}>
                {
                   (new Array(100)).fill(100).map(item=>(
                       <Text>aaaaa</Text>
                   ))
                }
                </ScrollView>
               
            
        );
    }
}

export default Products;