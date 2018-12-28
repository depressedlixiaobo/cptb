import React, { Component } from 'react';
import { Platform ,StatusBar,Dimensions} from 'react-native';

const {width,height} = Dimensions.get('window')

export const statusHelper ={
     height : Platform.OS == 'android' ? StatusBar.currentHeight :( width ==375 ? 40 :20 ) //判断是不是iphone x 是的话 就设置刘海高度
}