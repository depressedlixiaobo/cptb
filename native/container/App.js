import React, { Component } from 'react';
import { View ,Text ,TextInput,ScrollView ,Button,StatusBar,BVLinearGradient,NativeModules } from 'react-native';
 
import { SafeAreaView, } from 'react-navigation'
import  LinearGradient  from 'react-native-linear-gradient'


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
            <View  style={{flex:1}}>
                 <StatusBar
          barStyle="light-content"
          backgroundColor="#000000"
        />

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

                <ScrollView>
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