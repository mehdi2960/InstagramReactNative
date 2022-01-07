/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import { ProfileBody, ProfileButtens } from '../screenComponents/ProfileBody';
import Entypo from 'react-native-vector-icons/Entypo'
import BottomTabView from '../screenComponents/BottomTabView'

const Profile = () => {

   let circuls=[];
   let numberofcircels=10;
   
   for (let index = 0; index < numberofcircels; index++) {
    circuls.push(
      <View key={index}>
        {
          index === 0 ? (
          <View style={{
            width:60,
            height:60,
            alignItems:"center",
            justifyContent:"center",
            borderRadius:100,
            borderWidth:1,
            opacity:0.7,
            marginHorizontal:5,
            }}>
            <Entypo name='plus' style={{fontSize:40,color:"#000"}}/>
          </View>
          ):(
          <View style={{
            width:60,
            height:60,
            borderRadius:100,
            opacity:0.7,
            marginHorizontal:5,
            backgroundColor:"#00000011"
          }}></View>
          )
        }
      </View>
    )
   }

  return (
    <View style={{width:"100%",height:"100%",backgroundColor:"#FFF"}}>
       <View style={{width:"100%",padding:10}}>
         <ProfileBody
          name="Mr Mehdi"
          accountName="mr_probody"
          profileImage={require('../../storage/images/userProfile.png')}
          followers="3.6M"
          following="35"
          post="458"
         />
         <ProfileButtens 
         id={0}
         name="Mr Mehdi"
         accountName="mr_probody"
         profileImage={require('../../storage/images/userProfile.png')}
         />
      </View>
      <View>
        <Text style={{padding:10,fontSize:15,color:"#000",letterSpacing:2}}>
          Story Highlights
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
          style={{paddingVertical:10,paddingHorizontal:10}}
        >
          {circuls}          
        </ScrollView>
      </View>
          <BottomTabView/>
    </View>
  );
};

export default Profile;
