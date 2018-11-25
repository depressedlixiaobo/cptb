import React from 'react'
import {
  Text,
  View,
  Image,
  Dimensions
} from 'react-native'
import img1 from '../images/1.jpg'
import Swiper from 'react-native-swiper'
 
var styles = {
  wrapper: {
    height:120
  },
  slide: {
    // flex: 1,
     
    //  justifyContent: 'center',
    //   alignItems: 'center',
   // backgroundColor: '#9DD6EB'
  },
  
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
}

export default () =>
 <Swiper style={styles.wrapper} autoplay={true} paginationStyle={{ bottom:1}}  >
  {
    [1,2,3].map((item,key)=>(
        <View   key={key}    >
           <Image  source={img1} resizeMode='stretch'   style={{ width:'100%' ,height:styles.wrapper.height}}/> 
        </View>
    ))
  }
  
</Swiper>