import React from 'react'
import {
  Text,
  View,
  Image
} from 'react-native'
import img1 from '../images/1.jpg'
import Swiper from 'react-native-swiper'

var styles = {
  wrapper: {
      
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
        <View   key={key} style={styles.slide}>
           <Image  resizeMode='contain' source={img1} style={{flex:1}}/> 
        </View>
    ))
  }
  
</Swiper>