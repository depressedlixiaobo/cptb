import React, { Component } from 'react';
import { View,Text,Dimensions,Image,Button,StatusBar,SafeAreaView,BVLinearGradient,NativeModules,StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer,createTabNavigator } from "react-navigation";
import  LinearGradient  from 'react-native-linear-gradient';
import Ionicons from '../../node_modules/react-native-vector-icons/FontAwesome'
import Swiper from './swipe/Swiper'
import Products from './app/Products'
import Products1 from './app/Products1'
import { ScrollView } from 'react-native-gesture-handler';
import { statusHelper} from '../comon/index'

const pageStyle = StyleSheet.create({
        ctbox:{
            paddingLeft:10,
            paddingRight:10,
            marginTop:20
        },
        Radius:{
            borderRadius:25
        },
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
          //  backgroundColor:'red',
        },
        hot_box:{
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'row',
            paddingLeft:10,
        },
        hot_key:{
            borderRadius:30,
            backgroundColor:'rgba(255,140,0,1)',
            paddingLeft:5,
            paddingRight:5,
            marginRight:5
          //  backgroundColor:'rbga(255,123,036,0.3)',
        },
        content_box:{
           // borderRadius:20,
            height:40,
            backgroundColor:'white'
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
                {/* 头部导航 */}
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
                </LinearGradient>
                <ScrollView bounces={false}  showsVerticalScrollIndicator={false} style={{backgroundColor:'#F2F2F2'}}>
                    {/* 热搜 */}
                    <LinearGradient start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} colors={['#FF8900', '#FF5200']}>
                        <View style={pageStyle.hot}>
                            <View style={pageStyle.hot_word}>
                                <Text style={{ color:'white'}}> 热搜：</Text>
                            </View>
                            <View style={pageStyle.hot_box}>
                            {
                                [1,2,3,4].map((item,index)=>(
                                    <View key={index} style={pageStyle.hot_key}>
                                        <Text style={{color:'white'}}>关键字{item}</Text>
                                    </View>
                                ))
                            }
                                
                            </View>
                        </View>
                    </LinearGradient>
                    {/* swiper滚动 */}
                    <View style={{  backgroundColor:'red',width:'100%',height:120}}>
                            {              
                                Swiper()
                            }
                     </View>
                     {/* 淘宝头条 */}
                     <View style={ pageStyle.ctbox}>
                            <View style={{...pageStyle.Radius,...pageStyle.content_box} }>
                            <Text>aa</Text>
                            </View>
                     </View>
        
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
