/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const Post = () => {
  const postInfo = [
    {
      postTitle: 'mr shermon',
      postPersonImage: require('../../storage/images/userProfile.png'),
      postImage: require('../../storage/images/post1.jpg'),
      likes: 765,
      isLiked: false,
    },
    {
      postTitle: 'chillhouse',
      postPersonImage: require('../../storage/images/profile5.jpg'),
      postImage: require('../../storage/images/post2.jpg'),
      likes: 345,
      isLiked: false,
    },
    {
      postTitle: 'Tom',
      postPersonImage: require('../../storage/images/profile4.jpg'),
      postImage: require('../../storage/images/post3.jpg'),
      likes: 734,
      isLiked: false,
    },
    {
      postTitle: 'The_Groot',
      postPersonImage: require('../../storage/images/profile3.jpg'),
      postImage: require('../../storage/images/post4.jpg'),
      likes: 875,
      isLiked: false,
    },
  ];

  return (
    <View>
      {postInfo.map((data, index) => {
        const [like, setLike] = useState(data.isLiked);
        return (
          <>
            <View
              key={index}
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 5,
              }}>
              <View>
                <Image
                  source={data.postPersonImage}
                  style={{width: 40, height: 40, borderRadius: 100}}
                />
              </View>
              <View style={{paddingLeft: 5, flex: 1}}>
                <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000'}}>
                  {data.postTitle}
                </Text>
              </View>
              <TouchableOpacity>
                <Feather name="more-vertical" style={{fontSize: 20}} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                position: 'relative',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 10,
              }}>
              <Image
                source={data.postPersonImage}
                style={{width: '100%', height: 400}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                marginBottom: 7,
              }}>
              <TouchableOpacity onPress={() => setLike(!like)}>
                <AntDesign
                  name={like ? 'heart' : 'hearto'}
                  style={{
                    paddingRight: 10,
                    fontSize: 20,
                    color: like ? 'red' : 'black',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionic
                  name="ios-chatbubble-outline"
                  style={{paddingRight: 10, fontSize: 20}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{flex: 1}}>
                <Feather name="navigation" style={{fontSize: 20}} />
              </TouchableOpacity>
              <Feather name="bookmark" style={{fontSize: 20}} />
            </View>
            <View style={{marginBottom: 20, paddingHorizontal: 15}}>
              <Text>
                Liked by {like ? 'you and' : ''}{' '}
                {like ? data.likes + 1 : data.likes} others
              </Text>
              <Text
                style={{
                  paddingVertical: 2,
                  fontWeight: '700',
                  fontSize: 14,
                  color: '#000',
                }}>
                if enjoy the video ! please like and Subscribe :)
              </Text>
              <Text style={{paddingVertical: 2, opacity: 0.4}}>
                View all comments
              </Text>
              <View style={{flexDirection:"row",alignItems:"center"}}>
                <Image
                  source={data.postPersonImage}
                  style={{
                    width: 25,
                    height: 25,
                    borderRadius: 100,
                    borderColor: 'orange',
                    
                  }}
                  
                />
                <TextInput placeholder='add a comment' style={{opacity:0.5,flex:1}}/>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Entypo
                    name="emoji-happy"
                    style={{fontSize: 15, color: 'lightgreen', marginRight: 10}}
                  />
                  <Entypo
                    name="emoji-neutral"
                    style={{fontSize: 15, color: 'pink', marginRight: 10}}
                  />
                  <Entypo
                    name="emoji-sad"
                    style={{fontSize: 15, color: 'red'}}
                  />
                </View>
              </View>
            </View>
          </>
        );
      })}
    </View>
  )
    };

export default Post;
