/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
export const ProfileBody = ({
  name,
  accountName,
  profileImage,
  post,
  followers,
  following,
}) => {
  return (
    <View>
      {accountName ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',

            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              {accountName}
            </Text>
            <Feather
              name="chevron-down"
              style={{
                fontSize: 20,
                color: 'black',
                paddingHorizontal: 5,
                opacity: 0.5,
              }}
            />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Feather
              name="plus-square"
              style={{
                fontSize: 25,
                color: 'black',
                paddingHorizontal: 15,
              }}
            />
            <Feather
              name="menu"
              style={{
                fontSize: 25,
              }}
            />
          </View>
        </View>
      ) : null}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingVertical: 20,
        }}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Image
            source={profileImage}
            style={{
              resizeMode: 'cover',
              width: 80,
              height: 80,
              borderRadius: 100,
            }}
          />
          <Text
            style={{
              paddingVertical: 5,
              fontWeight: 'bold',
            }}>
            {name}
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>{post}</Text>
          <Text>Posts</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>{followers}</Text>
          <Text>Followers</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>{following}</Text>
          <Text>Following</Text>
        </View>
      </View>
    </View>
  );
};

export const ProfileButtens = ({id,name,accountName,profileImage}) => {
  const navigation=useNavigation();
  const [follow, setFollow] = useState(follow);
  return (
    <>
      {id === 0 ? (
        <View style={{paddingVertical:5,width:"100%",flexDirection:"row"}}>
          <TouchableOpacity
           onPress={()=>navigation.push('EditProfile',{
            name:name,
            accountName:accountName,
            profileImage:profileImage,
           })
          }
            style={{
              width:"100%",
              padding:10,
              justifyContent:"center",
              alignItems:"center",
              borderWidth:0.5,
              borderColor:"#00000022"
              }}
            >
             <Text style={{color:"#000",fontWeight:"bold",fontSize:14,letterSpacing:1,opacity:0.8}}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      ) : (
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
