/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity ,ToastAndroid,Image, TextInput} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons'


const EditProfile = ({route,navigation}) => {
    const{name,accountName,profileImage}=route.params;

    const toastMessage=()=>{
         ToastAndroid.show("Edited Successfully !",ToastAndroid.SHORT);
    }

    return (
        <View style={{width:"100%",height:"100%",backgroundColor:"#FFF"}}>
            <View style={{width:"100%",flexDirection:"row",justifyContent:"space-between",padding:10,alignItems:"center"}}>
               <TouchableOpacity onPress={()=>navigation.goBack()}>
                 <Ionic name='close' style={{fontSize:35}}/>
               </TouchableOpacity>
               <Text style={{fontSize:16,color:"#000",fontWeight:"bold"}}>Edit Profile</Text>
               <TouchableOpacity onPress={()=>{
                   toastMessage();
                   navigation.goBack();
               }}>
                 <Ionic name='checkmark' style={{fontSize:35,color:"#3493D9"}}/>
               </TouchableOpacity>
            </View>
            <View style={{alignItems:"center",padding:10}}>
                <Image source={profileImage} style={{width:80,height:80,borderRadius:100}}/>
                <Text style={{color:"#3493D9"}}>Change profile photo</Text>
            </View>
            <View style={{padding:10}}>
                <View>
                    <Text style={{opacity:0.5}}>Name</Text>
                    <TextInput
                      defaultValue={name}
                      placeholder='name'
                      style={{
                          borderBottomWidth:1,
                          borderColor:"#CDCDCD",
                          color:"#000",
                          fontSize:16
                      }}
                    />
                </View>
                <View style={{paddingVertical:10}}>
                    <Text style={{opacity:0.5}}>UserName</Text>
                    <TextInput
                      defaultValue={accountName}
                      placeholder='UserName'
                      style={{
                          borderBottomWidth:1,
                          borderColor:"#CDCDCD",
                          color:"#000",
                          fontSize:16
                      }}
                    />
                </View>
                <View style={{paddingVertical:10}}>
                    <Text style={{opacity:0.5}}>Website</Text>
                    <TextInput
                      placeholder='Website'
                      style={{
                          borderBottomWidth:1,
                          borderColor:"#CDCDCD",
                          color:"#000",
                          fontSize:16
                      }}
                    />
                </View>
                <View style={{paddingVertical:10}}>
                    <Text style={{opacity:0.5}}>Bio</Text>
                    <TextInput
                      placeholder='Bio'
                      style={{
                          borderBottomWidth:1,
                          borderColor:"#CDCDCD",
                          color:"#000",
                          fontSize:16
                      }}
                    />
                </View>
                <View style={{paddingVertical:10,}}>
                    <Text 
                    style={{
                        padding:10,
                        paddingVertical:10,
                        color:"#3493D9",
                        borderTopWidth:1,
                        borderBottomWidth:1,
                        borderColor:"#EFEFEF",
                        }}>
                        Switch to Professional account
                    </Text>
                </View>
                
                <View>
                    <Text 
                    style={{
                        padding:10,
                        paddingVertical:10,
                        color:"#3493D9",
                        borderTopWidth:1,
                        borderBottomWidth:1,
                        borderColor:"#EFEFEF",
                        }}>
                        Personal information setting
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default EditProfile;
