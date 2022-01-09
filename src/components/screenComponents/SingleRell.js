/* eslint-disable prettier/prettier */
import React,{useRef,useState} from 'react'
import { View, Text,Dimensions, TouchableOpacity } from 'react-native'
import Video from 'react-native-video';
import Ionic from 'react-native-vector-icons/Ionicons'

const SingleRell = ({item,index,currentIndex}) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
  
    const videoRef = useRef(null);
  
    const onBuffer = buffer => {
      console.log('buffring', buffer);
    };
    const onError = error => {
      console.log('error', error);
    };

    const [mute, setMute] = useState(false)

    return (
        <View style={{width:windowWidth,height:windowHeight,position:"relative"}}>
            <TouchableOpacity
            onPress={()=>setMute(!mute)}
             style={{width:"100%",height:"100",position:"absolute"}}
            >
                   <Video
                    videoRef={videoRef}
                    onBuffer={onBuffer}
                    onError={onError}
                    repeat={true}
                    resizeMode="cover"
                    paused={currentIndex == index ? false : true}
                    source={item.video}
                    // muted={mute}
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
          }}
        />
            </TouchableOpacity>
            <Ionic
             name='volume-mute'
             style={{
                 padding:10,
                 fontSize:20,
                 position:"absolute",
                 color:"#FFF",
                 backgroundColor:'rgba(52,52,52,0.6)',
                 width:windowWidth/2,
                 height:windowHeight/2,
                }}
            />
        </View>
    )
}

export default SingleRell
