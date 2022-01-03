/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ProfileBody, ProfileButtens} from './ProfileBody';
import {FriendsProfileData} from './Database';

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
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionic name="arrow-back" style={{fontSize: 20, color: '#000'}} />
        </TouchableOpacity>
        <Text
          style={{flex: 1, color: '#000', fontSize: 15, fontWeight: 'bold'}}>
          {name}
        </Text>
        <Feather name="more-vertical" style={{fontSize: 20, color: '#000'}} />
      </View>
      <ProfileBody
        name={name}
        profileImage={profileImage}
        post={post}
        followers={followers}
        following={following}
      />
      <ProfileButtens id={1} />
      <Text
        style={{
          fontWeight: 'bold',
          color: '#000',
          paddingVertical: 10,
          fontSize: 15,
        }}>
        Suggested for you
      </Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{paddingTop: 10}}>
        {name === FriendProfile.name
          ? null
          : FriendsProfileData.map((data, index) => {
              const [isFollow, setIsFollow] = useState(false);
              const [close, setClose] = useState(false);
              return (
                <View key={index}>
                  {data.name === name || close ? null : (
                    <View
                      style={{
                        width: 160,
                        height: 200,
                        margin: 3,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 2,
                        borderWidth: 0.5,
                        borderColor: '#DEDEDE',
                        position: 'relative',
                      }}>
                      <TouchableOpacity onPress={()=>setClose(true)}
                        style={{
                          position: 'absolute',
                          top: 10,
                          right: 10,
                        }}>
                        <AntDesign
                          name="close"
                          style={{
                            fontSize: 20,
                            color: '#000',
                            opacity: 0.5,
                          }}
                        />
                      </TouchableOpacity>
                      <Image
                        source={data.profileImage}
                        style={{
                          width: 80,
                          height: 80,
                          borderRadius: 100,
                          margin: 10,
                        }}
                      />
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 16,
                          color: '#000',
                        }}>
                        {data.name}
                      </Text>
                      <Text style={{fontSize: 12, color: '#000'}}>
                        {data.accountName}
                      </Text>
                      <TouchableOpacity style={{width:"100%",marginTop:10,}} onPress={()=>setIsFollow(!isFollow)}>
                        <View
                          style={{
                            backgroundColor: isFollow ? null : "#3493D9",
                            height:30,
                            justifyContent:"center",
                            alignItems:"center",
                            borderColor:"#EDEDED",
                            borderWidth:isFollow?1:0,
                          }}>
                          <Text style={{color: isFollow ? '#000' : '#FFF'}}>
                            {isFollow ? 'Following' : 'Follow'}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              );
            })}
      </ScrollView>
    </View>
  );
};

export default FriendProfile;
