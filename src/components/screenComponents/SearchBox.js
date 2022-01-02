/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';

const SearchBox = () => {
  return (
    <View
      style={{
        paddingVertical: 10,
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        paddingHorizontal: 15,
      }}>
      <Ionic
        name="search"
        style={{
          fontSize: 18,
          opacity: 0.7,
          position: 'absolute',
          left: 30,
          zIndex:1,
          color:"#00000088",
        }}
      />
      <TextInput
        placeholder="Search"
        placeholderTextColor="#909090"
        style={{
          width: '100%',
          paddingLeft: 40,
          backgroundColor: '#dfe6e9',
          fontSize: 15,
          justifyContent: 'center',
          alignItems: 'center',
          padding:10,
          borderRadius:5,
        }}
      />
    </View>
  );
};

export default SearchBox;
