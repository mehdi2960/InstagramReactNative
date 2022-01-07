/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Ionic from 'react-native-vector-icons/Ionicons'

const BottomTabView = () => {

const Tab=createMaterialTopTabNavigator();

let squares=[];
let numberofcircels=7;

for (let index = 0; index < numberofcircels; index++) {
    squares.push(
        <View key={index}>
          <View style={{width:145,height:150,backgroundColor:"#000",marginVertical:5,opacity:0.1}}></View>
        </View>
    )
}

const Posts=()=>{
return(
   <ScrollView showsVerticalScrollIndicator={false} style={{width:"100%",height:"100%"}}>
       <View
        style={{
            justifyContent:"space-between",
            flexWrap:"wrap",
            flexDirection:"row"
        }}
       >
        {squares}
       </View>
   </ScrollView>
)
}

const Video=()=>{
   return(
    <ScrollView showsVerticalScrollIndicator={false} style={{width:"100%",height:"100%"}}>
       <View
        style={{
            justifyContent:"space-between",
            flexWrap:"wrap",
            flexDirection:"row"
        }}
       >
        {squares}
       </View>
   </ScrollView>
   );
  };

  const Tags=()=>{
    return(
        <ScrollView showsVerticalScrollIndicator={false} style={{width:"100%",height:"100%"}}>
       <View
        style={{
            justifyContent:"space-between",
            flexWrap:"wrap",
            flexDirection:"row"
        }}
       >
        {squares}
       </View>
   </ScrollView>
    );
  };

    return (
        <Tab.Navigator
          screenOptions={({route}) => ({
          tabBarShowLabel: false,
          tabBarIndicatorStyle: {
          backgroundColor: 'black',
          height: 1.5,
        },
        tabBarIcon: ({focused, colour}) => {
          let iconName;
          if (route.name === 'Posts') {
            iconName = focused ? 'ios-apps-sharp' : 'ios-apps-sharp';
            colour = focused ? 'black' : 'gray';
          } else if (route.name === 'Video') {
            iconName = focused ? 'ios-play-circle' : 'ios-play-circle-outline';
            colour = focused ? 'black' : 'gray';
          } else if (route.name === 'Tags') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
            colour = focused ? 'black' : 'gray';
          }

          return <Ionic name={iconName} color={colour} size={22} />;
        },
      })}>
            <Tab.Screen name='Posts' component={Posts}/>
            <Tab.Screen name='Video' component={Video}/>
            <Tab.Screen name='Tags' component={Tags}/>
        </Tab.Navigator>
    );
};

export default BottomTabView;
