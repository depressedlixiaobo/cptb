import React, { Component } from 'react';
import { View ,Text ,TextInput,Image,ScrollView ,Button,StatusBar,BVLinearGradient,NativeModules,StyleSheet } from 'react-native';
 
import { SafeAreaView, } from 'react-navigation'
import  LinearGradient  from 'react-native-linear-gradient';
import  Swiper from '../component/Swiper'
import rdImg from '../images/1.png'


const barsty = StyleSheet.create({
    img:{
        width:50,height:50
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

                <ScrollView   bounces={false}  style={{backgroundColor:'#eee'}} showsVerticalScrollIndicator={false}>
                    <View style={{height:120}}>
                        {              
                            Swiper()
                        }
                    </View>
                     <View style={{paddingTop:15,paddingBottom:15}}>
                         <Text style={{paddingLeft:10,fontWeight:'600'}}>我的频道</Text>
                         <ScrollView horizontal={true}  style={{   }}>
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
                    <View style={{padding:15}}>
                        <View style={{ borderRadius: 10, backgroundColor: '#fff', }}>
                            <Text style={{height:100}}>
                                    11
                                </Text>
                                <Text style={{height:100}}>
                                    11
                                </Text>
                                <Text style={{height:100}}>
                                1111111111111111111111
                                </Text>
                                <Text style={{height:600}}>
                                    11
                                </Text>
                                <Text style={{height:100}}>
                                    22222
                                </Text>
                        </View>   
                    </View>
                    


                    <View>
                        <Text>  app.js </Text>
                        <Button title='这个点击按钮跳转details' onPress={() => {
                            this.props.navigation.navigate('Details')
                        }} />
                    </View>
                </ScrollView>
                 
            </View>
        );
    }
}

export default App;