/* eslint-disable prettier/prettier */
import React,{useState} from 'react'
import { View, Text } from 'react-native'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import {videoData} from '../screenComponents/Database'
import SingleRell from './SingleRell';


const ReelsComponent = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleChangeIndexValue = ({index}) => {
      setCurrentIndex(index);
    };
    return (
        <SwiperFlatList
        vertical={true}
        onChangeIndex={handleChangeIndexValue}
        data={videoData}
        renderItem={({item, index}) => (
          <SingleRell item={item} index={index} currentIndex={currentIndex} />
        )}
        keyExtractor={(item, index) => index}
      />
    )
}

export default ReelsComponent
