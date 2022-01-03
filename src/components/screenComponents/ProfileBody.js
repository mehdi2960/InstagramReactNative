/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'

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
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>
              {post}
            </Text>
            <Text style={{fontWeight: 'bold', color: '#000'}}>posts</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>
              {followers}
            </Text>
            <Text style={{fontWeight: 'bold', color: '#000'}}>Followers</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>
              {following}
            </Text>
            <Text style={{fontWeight: 'bold', color: '#000'}}>Following</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export const ProfileButtens = ({id}) => {
  const [follow, setFollow] = useState(follow);
  return (
    <>
      {id === 0 ? null : (
        <View style={{flexDirection:"row",justifyContent:"space-around"}}>
            <TouchableOpacity style={{width:"42%"}} onPress={()=>setFollow(!follow)}>
          <View
            style={{
              width: '100%',
              height: 35,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor:"#DEDEDE",
              backgroundColor:follow?null:"#3493D9",
              borderWidth:follow?1:0,
            }}>
            <Text style={{color: follow ? '#000' : '#FFF'}}>
              {follow ? 'Following' : 'Follow'}
            </Text>
          </View>
        </TouchableOpacity>
        <View  
        style={{
              width: '42%',
              height: 35,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor:"#DEDEDE",
              borderWidth:1,
            }}>
            <Text>Message</Text>
        </View>
        <View
           style={{
            width: '10%',
            height: 35,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor:"#DEDEDE",
            borderWidth:1,
          }}
        >
            <Feather name='chevron-down' style={{fontSize:20,color:"#000"}}/>
        </View>
        </View>
      )}
    </>
  );
};
