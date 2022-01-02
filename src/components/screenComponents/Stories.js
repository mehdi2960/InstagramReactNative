import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native'


const Stories = () => {
const navigation=useNavigation();

  const storyInfo = [
    {
      id: 1,
      name: 'Your Story',
      image: require('../../storage/images/userProfile.png'),
    },
    {
        id: 0,
        name: 'Your Story',
        image: require('../../storage/images/profile1.jpg'),
      },
      {
        id: 0,
        name: 'Your Story',
        image: require('../../storage/images/profile2.jpg'),
      },
      {
        id: 0,
        name: 'Your Story',
        image: require('../../storage/images/profile3.jpg'),
      },
      {
        id: 0,
        name: 'Your Story',
        image: require('../../storage/images/profile4.jpg'),
      },
      {
        id: 0,
        name: 'Your Story',
        image: require('../../storage/images/profile5.jpg'),
      },
      {
        id: 0,
        name: 'Your Story',
        image: require('../../storage/images/profile2.jpg'),
      },
    
  ];
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{paddingVertical: 20}}>
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity key={index} onPress={()=>navigation.push("Status",{
              name:data.name,
              image:data.image,
          })}>
            <View
              style={{
                position: 'relative',
                flexDirection: 'column',
                paddingHorizontal: 8,
              }}>
              {data.id == 1 ? (
                <View
                  style={{
                    position: 'absolute',
                    bottom: 15,
                    right: 10,
                    zIndex: 1,
                  }}>
                  <Entypo
                    name="circle-with-plus"
                    style={{
                      fontSize: 20,
                      backgroundColor: 'white',
                      borderRadius: 100,
                      color: '#405de6',
                    }}
                  />
                </View>
              ) : null}
              <View
                style={{
                  width: 68,
                  height: 68,
                  borderRadius: 100,
                  borderWidth: 1.8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor:"#c13584"
                }}>
                <Image
                  source={data.image}
                  style={{
                    resizeMode: 'cover',
                    width: '92%',
                    height: '92%',
                    borderRadius: 100,
                    backgroundColor: 'orange',
                  }}
                />
              </View>
              <Text style={{textAlign:"center",fontSize:10,opacity:data.id==0?1:0.5}}>
                 {data.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Stories;
