/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import {ProfileBody,ProfileButtens} from './ProfileBody';

const FriendProfile = ({route, navigation}) => {
  const {name, profileImage, follow, post, followers, following} = route.params;
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        padding: 10,
      }}>
      <View style={{flexDirection:"row"}}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
              <Ionic name='arrow-back' style={{fontSize:20,color:"#000"}}/>
          </TouchableOpacity>
          <Text style={{flex:1,color:"#000",fontSize:15,fontWeight:"bold"}}>{name}</Text>
          <Feather name='more-vertical' style={{fontSize:20,color:"#000"}}/>
      </View>
      <ProfileBody
       name={name}
       profileImage={profileImage}
       post={post}
       followers={followers}
       following={following}
      />
      <ProfileButtens id={1}/>
    </View>
  );
};

export default FriendProfile;
