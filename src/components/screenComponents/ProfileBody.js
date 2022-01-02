/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image} from 'react-native';

export const ProfileBody = ({
  name,
  profileImage,
  post,
  followers,
  following,
  accountName,
}) => {
  return (
    <View>
      {accountName ? null : (
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingVertical: 20,
            
          }}>
          <View>
            <Image
              source={profileImage}
              style={{
                width: 80,
                height: 80,
                borderRadius: 100,
                resizeMode: 'cover',
              }}
            />
            <Text style={{paddingVertical: 5, fontWeight: 'bold'}}>{name}</Text>
          </View>
          <View style={{alignItems:"center"}}>
            <Text style={{fontSize:18,fontWeight:"bold",color:"#000"}}>{post}</Text>
            <Text>posts</Text>
          </View>
          <View style={{alignItems:"center"}}>
            <Text style={{fontSize:18,fontWeight:"bold",color:"#000"}}>{followers}</Text>
            <Text>Followers</Text>
          </View>
          <View style={{alignItems:"center"}}>
            <Text style={{fontSize:18,fontWeight:"bold",color:"#000"}}>{following}</Text>
            <Text>Following</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export const ProfileButtens=({id})=>{
    return(
        <View>
            <Text>ss</Text>
        </View>
    )
}