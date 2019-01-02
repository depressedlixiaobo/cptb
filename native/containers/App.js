import React, { Component } from 'react';
import { View ,Text ,TextInput,Dimensions,Image,ScrollView ,Button,StatusBar,BVLinearGradient,NativeModules,StyleSheet } from 'react-native';
 
import { SafeAreaView, } from 'react-navigation'
import  LinearGradient  from 'react-native-linear-gradient';
import  Swiper from '../component/Swiper'
import rdImg from '../images/1.png'
import boxImg from '../images/box.jpg'


const barsty = StyleSheet.create({
    img:{
        width:50,height:50
    },
    box:{
        height:120,
        flex:1,
        borderStyle:'solid',
        borderColor:'#eee',
        borderWidth:0.3,
        paddingLeft:10,
         
    },
    boximg:{
        height:120,
        flex:1,
    }
})


class App extends Component {
    constructor(props) {
        super(props);
        
    }
    static navigationOptions={
        header: null
    }

    // header: null
    componentWillMount(){
     
       // StatusBar.setTranslucent(true)
    }
    componentDidMount(){
      
    }
    render() {
        // style={{backgroundColor:'red'}}
        return (
            <View  style={{flex:1}} >
                <LinearGradient style={{ paddingTop: 34 }} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} colors={['#FF8900', '#FF5200']}>
                    <View style={{
                         alignItems:"center",
                         display:'flex',
                         padding:10,
                        justifyContent:"space-between",
                        flexDirection:"row"
                    }}>
                        <View>
                           <Text> 扫码</Text>
                        </View>
                        <View style={{backgroundColor:'#fff',borderRadius:5,width:220,padding:5 }}>
                            <Text>请输入关键字</Text>
                        </View>
                        <View>
                           <Text> 会员码</Text>
                        </View>
                    </View>
                </LinearGradient>

                <ScrollView   bounces={false}  style={{backgroundColor:'#eee'}}   showsVerticalScrollIndicator={false}>
                    <View style={{  backgroundColor:'red' }}>
                        {              
                            Swiper()
                        }
                    </View>
                     <View style={{paddingTop:15,paddingBottom:15}}>
                         <Text style={{paddingLeft:10,fontWeight:'600'}}>我的频道</Text>
                         <ScrollView horizontal={true}  style={{ }}>
                            <View>
                                <View style={{flexDirection:'row',padding:5}}>
                                {
                                    [1,2,3,4,5,6,7,8,9,10].map((t,index)=>(
                                        <Image key={index} resizeMode='contain' source={rdImg} style={barsty.img} /> 
                                    ))
                                }
                                </View>
                                <View style={{flexDirection:'row',padding:5}}>
                                {
                                    [1,2,3,4,5,6,7,8,9].map((t,index)=>(
                                        <Image key={index} resizeMode='contain' source={rdImg} style={barsty.img} /> 
                                    ))
                                }
                                </View>
                            </View>
                            
                         </ScrollView>
                     </View>
                    <View style={{padding:(0,10)}}>
                        <View style={{ borderRadius:8, backgroundColor: '#fff', }} >
                                <View style={{paddingTop:10,paddingLeft:10 ,paddingBottom:10}}>
                                    <Text >淘宝头条</Text>
                                </View>
                                {
                                    [1,2].map((t,index)=>(
                                        <View key={index} style={{flexDirection:'row'}}>
                                
                                            <View style={barsty.box}>
                                                <Text  >淘好货</Text>
                                                <View style={barsty.boximg}>
                                                    <View style={{  flex:1, flexDirection:'row',alignItems:'flex-end'}}>
                                                        <Image resizeMode='contain' style={{height:80,flex:1}} source={boxImg} />
                                                        <Image resizeMode='contain' style={{height:80,flex:1}} source={boxImg} />
                                                    </View> 
                                                    
                                                </View>
                                                
                                            </View>
                                            <View style={barsty.box}>
                                                <Text>
                                                    2222
                                                </Text>
                                            </View>
                                        </View>
                                    ))
                                }
                               
                        </View>   
                    </View>
                    <View style={{width:320}}>
                            <View style={{backgroundColor:'red',flex:1,height:30,width:'100%'}}>
                                
                                </View>
                    </View>
                  

                    <View>
                        <Text>  app.js </Text>
                        <Button title='这个点击按钮跳转details' onPress={() => {

                            var {height, width} = Dimensions.get('window');
                            alert(width)
                           // this.props.navigation.navigate('Details')
                        }} />
                    </View>
                </ScrollView>
                 
            </View>
        );
    }
}

export default App;