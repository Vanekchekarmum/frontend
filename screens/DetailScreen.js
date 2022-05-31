import React, { useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SharedElement } from 'react-navigation-shared-element';
import * as Animatable from 'react-native-animatable';

const arr = ["business", "wine", "art&culture ", "sport"]

const { height } = Dimensions.get('window');
const ITEM_HEIGHT = height * 0.5;
const DetailScreen = ({ navigation, route }) => {
  const { item } = route.params;
  const buttonRef = React.useRef();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#8faf8a' }}>
                <Animatable.View
      ref={buttonRef}
      animation='fadeIn'
      duration={600}
      delay={300}
      style={[StyleSheet.absoluteFillObject, ]}
    >
            <MaterialCommunityIcons style={{position:'absolute', right:'85%',top:height*0.05, zIndex:60}} 
            name="keyboard-backspace" color={'#191C21'} size={38}
            onPress={() => {
              navigation.goBack();
            }}
    />
    </Animatable.View>
    <Animatable.View
      ref={buttonRef}
      animation='fadeIn'
      duration={600}
      delay={300}
      style={{textAlign:'center',}}
    >
        <Text style={{textAlign:'center',  top:height*0.06,fontSize:20, fontWeight:'500'}}>@nastya</Text>
        </Animatable.View>
        <Animatable.View
      ref={buttonRef}
      animation='fadeIn'
      duration={600}
      delay={300}
      style={[StyleSheet.absoluteFillObject]}
    >
        <MaterialCommunityIcons style={{position:'absolute', left:'85%', top:height*0.05}} name="dots-vertical" color={'#191C21'} size={38}/>
</Animatable.View>
      <View style={{backgroundColor:'#d0debb', margin:15, height:'100%', marginTop:70, borderRadius:10, alignItems:'center'}}>
        <View style={styles.topInto}>
          <View style={styles.time}>
      <FontAwesome style={styles.markerIcon} name="money" color={'black'} size={38}/>

      <Text style={{marginLeft:15, fontSize:20, fontWeight:'500'}}>бесплатно</Text>
      </View>
      <FontAwesome style={styles.starIcon} name="star-o" color={'black'} size={34}/>
      </View>
      <SharedElement id={`item.${item.id}.image_url`}>
      <Image
        source={{ uri: item.image_url }}
        style={{
          width: ITEM_HEIGHT*0.8,
          height: ITEM_HEIGHT*0.8,
          borderRadius: 10,
          marginTop:15
          
        }}
        resizeMode='cover'
      />
      </SharedElement>
      <View
        style={{ flexDirection: 'row', marginTop: 15, width:ITEM_HEIGHT*0.8}}
      >
        <View style={{ flexDirection: 'column',  }}>
        <SharedElement id={`item.${item.id}.title`}>

          <Text
            style={{
              fontSize:24,
               fontWeight:'500'
            }}
          >
            {item.title}
          </Text>
          </SharedElement>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              marginTop:5
            }}
          >
            {item.description}
          </Text>
          <View style={{marginTop:5, flexDirection:'row', alignItems:'center'}}>
          <MaterialCommunityIcons  color={'#191C21'} name='map-marker-circle' size={35}/>
          <Text style={{marginLeft:10, fontSize:20,fontWeight:'500'}}>Первомайская 56</Text>
          </View>
          <View style={{marginTop:5, flexDirection:'row', alignItems:'center'}}>
          <MaterialCommunityIcons  color={'#191C21'} name='clock-time-five-outline' size={35}/>
          <Text style={{marginLeft:10, fontSize:20,fontWeight:'500'}}>11:00 - 12:00</Text>
          </View>
        </View>
      </View>
      <View style={{height:200, width:'100%'}}></View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  topInto:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%', 
    marginTop:15
  },
  time:{
      flexDirection:'row',
      alignItems:'center',

  },
  img:{

  },
  starIcon:{
    marginRight:15

  },
  markerIcon:{
    marginLeft:15

  }


});
DetailScreen.sharedElements = route => {
  const { item } = route.params;
  return [
    {
      id: `item.${item.id}.image_url`,
      animation: 'move',
      resize: 'clip'
    },
    
    {
      id: `item.${item.id}.title`,
      animation: 'fade',
      resize: 'clip'
    },
  ];
};
export default DetailScreen;