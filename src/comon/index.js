import React, { Component } from 'react';
import { Platform ,StatusBar,Dimensions} from 'react-native';

const {width,height} = Dimensions.get('window')

const X_WIDTH = 375;
const X_HEIGHT = 812;
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;
const PAD_WIDTH = 768;
const PAD_HEIGHT = 1024;
const { height: D_HEIGHT, width: D_WIDTH } = Dimensions.get('window');

export const isIPhoneX = (() => {
  if (Platform.OS === 'web') return false;

  return (
    Platform.OS === 'ios' &&
    ((D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH) ||
      (D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT)) ||
    ((D_HEIGHT === XSMAX_HEIGHT && D_WIDTH === XSMAX_WIDTH) ||
        (D_HEIGHT === XSMAX_WIDTH && D_WIDTH === XSMAX_HEIGHT))
  );
})();


export const statusHelper ={
     height : Platform.OS == 'android' ? StatusBar.currentHeight :( width ==375 ? 40 :20 ) //判断是不是iphone x 是的话 就设置刘海高度
}
 