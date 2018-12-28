import React, { Component } from 'react';
import { View,Text,Dimensions,Image,Button,StatusBar,SafeAreaView,BVLinearGradient,NativeModules,StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer,createTabNavigator } from "react-navigation";
import  LinearGradient  from 'react-native-linear-gradient';
import Ionicons from '../../node_modules/react-native-vector-icons/FontAwesome'

import Products from './app/Products'
import Products1 from './app/Products1'
import { ScrollView } from 'react-native-gesture-handler';
import { statusHelper} from '../comon/index'

const pageStyle = StyleSheet.create({

        box:{
            height:48,
            flexDirection:'row'
        },
        saoma:{
            justifyContent:'center',
            alignItems:'center',
            width:46,
           
          
        },
        smSize:{
            color:'white',
            fontSize:10,
            marginTop:3
        },
        search:{
            
            justifyContent:'center',
            alignItems:'center',
            
            flex:1,
            flexDirection:'row'
        },
        searchInput:{
            backgroundColor:'white',
            alignItems:'center',
            borderRadius:30,
            height:30,
             paddingLeft:15,
             paddingRight:15,
            flexDirection:'row',
            flex:1,
        },
        vip:{
            justifyContent:'center',
            alignItems:'center',
            width:46,
        },
        hot:{
            flexDirection:'row',
            height:30,
            
        },
        hot_word:{
            width:40,
            alignItems:'center',
            justifyContent:'center',
        },
        hot_box:{
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'row',
            padding:25,
            
        },
        hot_key:{
            borderRadius:30,
            backgroundColor:'red',
        }
})
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        let {width,height} =Dimensions.get('window')
        // this.comStyle = {
        //     header:{
        //         gip:
        //     }
        // }
    }
    
    render() {
        return (
            // translucent={true}
            <View>
                
                <LinearGradient style={{ paddingTop: statusHelper.height }} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} colors={['#FF8900', '#FF5200']}>
                    <View style={pageStyle.box}>
                        <View style={pageStyle.saoma}>
                            <Ionicons name={'camera-retro'}  color={'white'} size={18} />
                            <Text style={pageStyle.smSize}>扫一扫</Text>
                        </View>
                        <View style={pageStyle.search}>
                            <View style={pageStyle.searchInput}>
                                  <Ionicons name={'search'}  color={'gray'} size={18} > </Ionicons>
                                  <Text style={{color:'gray',fontSize:18,flex:1}}>搜索关键字</Text>
                                  <Ionicons   name={'camera-retro'}  color={'gray'} size={18} > </Ionicons>
                            </View>
                        </View>
                        <View style={pageStyle.vip}>
                            <Ionicons name={'barcode'}  color={'white'} size={18} />
                            <Text style={pageStyle.smSize}>会员码</Text>
                        </View>
                    </View>
                    <View style={pageStyle.hot}>
                          <View style={pageStyle.hot_word}>
                             <Text style={{ color:'white'}}> 热搜</Text>
                          </View>
                          {/* <ScrollView contentContainerStyle={pageStyle.hot_box}>
                              <View><Text>鼠标</Text></View>
                          </ScrollView> */}
                        <View style={pageStyle.hot_box}>
                           {
                               [1,2,3,4,5].map(item=>(
                                <View style={pageStyle.hot_key}><Text>sdafdsafds{item}</Text></View>
                               ))
                           }
                            
                        </View>
                    </View>
                </LinearGradient>
                <ScrollView >
        
                    {
                        (new Array(50)).fill(50).map((item,index)=>(
                            <Text key={index}>{'this is item index:'+index}</Text>
                        ))
                    }
                
                </ScrollView>
          </View>
        );
    }
}
const stackNav = createStackNavigator(
    {
        Index:{
            screen:App,
            navigationOptions: {
                 header:null,
                headerTintColor:'#000',
                
              
            }
         
        },
        Products : {
            screen:Products,
            navigationOptions:({navigation})=>({
               // header:null,
                //headerMode:'none',
                headerRight:<Text>aaa</Text>,
               // headerTransparent:true
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
