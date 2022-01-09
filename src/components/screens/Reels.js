/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text,Dimensions} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ReelsComponent from '../screenComponents/ReelsComponent';


const Reels = () => {

  const windowWidth=Dimensions.get('window').width;
  const windowHeight=Dimensions.get('window').height;

  return (
    <View style={{width:windowWidth,height:windowHeight,backgroundColor:"#000",position:"relative"}}>
      <View style={{flexDirection:"row",justifyContent:"space-between",padding:10,zIndex:1,position:"absolute",top:0,left:0,right:0}}>
        <Text style={{fontSize:20,color:"#FFF",fontWeight:"bold"}}>Reels</Text>
        <Feather name='camera' style={{fontSize:25,color:"#FFF"}}/>
      </View>
      <ReelsComponent/>
    </View>
  );
};

export default Reels;
