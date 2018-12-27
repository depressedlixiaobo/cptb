import React, { Component } from 'react';
import { View,Text ,ScrollView,Button,StatusBar} from 'react-native';
 
const NAVCP = ({op})=>{
  return <View style={{height:88,opacity:op,height:op <=0.024?0:88,backgroundColor:'rgba(0,0,0,1)'}}><Text style={{color:'#fff'}}>bbb</Text></View>
}
class Products extends Component {
    constructor(props) {
        super(props);
        this.state={op:1}
    }
    // static navigationOptions = ({navigation})=>{
    //     return {
    //        headerTransparent:true,
    //        headerBackground:<NAVCP op={navigation.getParam('op',1)}/>,
    //      // header:null,
    //        //  headerBackgroundTransitionPreset:'fade'
           
    //      }
    // }
     
     changeHeaderBackgroundColor = ()=>{
          
     }
      handleScroll = (e)=>{
           let {x,y} = e.nativeEvent.contentOffset
        //   if(y>50){
            
        //       console.log('执行到了')

        //   }
           console.log(y)
          if(y>=100){
            if(this.state.op != 0)
           {
            console.log('y>100:'+this.state.op)
           // this.setState({op:0}) 
           }
          }else if(y<=50){
            if(this.state.op != 1)
              this.setState({op:1}) 
          }else{
            console.log('这里这里')
            this.setState({op:1 - (y-50)*0.02}) 
            console.log(this.state.op)
          }
      }
      handleClick = ()=>{
        
        //Products.navigationOptions.headerStyle.backgroundColor =  '#f4511e'
      }
      //onScroll={this.handleScroll} scrollEventThrottle={5}
    render() {
         
        return (
                <React.Fragment>
                  <NAVCP op={this.state.op} />
                <ScrollView  bounces={false}   onScroll={this.handleScroll} scrollEventThrottle={10}>   
                  <StatusBar barStyle="dark-content" hidden={true}   /> 
                {
                   (new Array(100)).fill(100).map((item,index)=>(
                       <Text key={index}>aaaaa</Text>
                   ))
                }
                </ScrollView>
                </React.Fragment>
               
            
        );
    }
}

export default Products;