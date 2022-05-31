import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const data = [
  {
    id: '1',
    title: 'Manarola, Italy',
    description: 'The Cliffs of Cinque Terre',
    image_url:
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80',
    iconName: 'location-pin'
  },
  {
    id: '2',
    title: 'Venezia, Italy',
    description: 'Rialto Bridge, Venezia, Italy',
    image_url:
      'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=630&q=80',
    iconName: 'location-pin'
  },
  {
    id: '3',
    title: 'Prague, Czechia',
    description: 'Tram in Prague',
    image_url:
      'https://images.unsplash.com/photo-1513805959324-96eb66ca8713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    iconName: 'location-pin'
  }
];
const { width } = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = ITEM_WIDTH * 0.9;
export default function NewsScreen({ navigation }) {
  // const [isLoading, setLoading] = useState(true);
  // const [data, setData] = useState([]);

  // const getMovies = async () => {
  //    try {
  //     const response = await fetch('http://127.0.0.1:8000/posts/?format=json');
  //     const json = await response.json();
  //     setData(json);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   getMovies();
  // }, []);

  return (
    <View style={styles.container}>
    <View style={styles.header}>
    <FontAwesome style={styles.searchIcons} name="search" color={'black'} size={30}/>
    <MaterialCommunityIcons style={styles.catIcons} name="format-list-checkbox" color={'black'} size={38}/>
    </View>
    
  <ScrollView
    indicatorStyle='white'
    contentContainerStyle={styles.lenta}>
    {data.map(item => (

      <View style={styles.box} key={item.id}>
        <View
          // activeOpacity={0.8}
          style={styles.box1}
          // onPress={() => navigation.navigate('DetailScreen', { item })}
        >
          <View style={styles.boxHeader}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-evenly',marginLeft:10}}>
            <Image style={{backgroundColor:'black', width:ITEM_HEIGHT * 0.15, 
            height:ITEM_HEIGHT * 0.15, borderRadius:50}}/>
            <Text style={{fontSize:18, color:'#000',fontFamily:'Farah', fontWeight:'bold', marginLeft:10}}>{item.title}</Text>
            </View>
            <MaterialCommunityIcons style={{position:'absolute', left:'85%'}} color={'#191C21'} name='dots-vertical' size={35}/>

  
          </View>
          <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('DetailScreen', { item })}>
          <SharedElement id={`item.${item.id}.image_url`}>
          <Image
            style={{
              width: ITEM_WIDTH * 0.92,
              height: ITEM_HEIGHT* 0.92,
              marginTop:ITEM_HEIGHT * 0.04,
              marginBottom:ITEM_HEIGHT * 0.04

            
            }}
            source={{ uri: item.image_url }}
            resizeMode='cover'
          />
          </SharedElement>
          
          </TouchableOpacity>
           <View style={{backgroundColor:'white',width:ITEM_WIDTH, height:ITEM_HEIGHT * 0.2,
            alignItems:'flex-start', alignContent:'center' ,
            justifyContent:'center',borderTopRadius:10,
            borderBottomLeftRadius:10,borderTopColor:'#8faf8a', borderTopWidth:3,borderBottomRightRadius:10, }}>
            <TouchableOpacity style={{flexDirection:'row', alignItems:'center', 
            justifyContent:'space-around',}}>
              <MaterialCommunityIcons style={{marginLeft:10}} color={'#191C21'} name='map-marker-circle' size={35}/>
              <SharedElement id={`item.${item.id}.title`}>

            <Text style={{marginLeft:10, fontWeight:'bold',fontSize:16}}>{item.title}</Text>
            </SharedElement>
            </TouchableOpacity>
            <MaterialCommunityIcons style={{position:'absolute', left:'85%', }} color={'#191C21'}  name='share-outline' size={35}/>

          </View>
        </View>
      </View>
    ))}
    <View style={{ height:width*0.5}}>

    </View>
  </ScrollView></View>

  );
}
//create our styling code:
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#bceaff'
  },
  header:{
    backgroundColor: '#097fb4',
    width:width,
    height:width*0.23,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  searchIcons:{
    marginTop:22,
    marginLeft:25
  },
  catIcons:{
    marginTop:22,
    marginRight:25
  },
  lenta:{
    alignItems: 'center',
    backgroundColor:'#bceaff',
    marginTop:100
  },

  box:{
    backgroundColor:'white',
    width: ITEM_WIDTH,
    height:ITEM_HEIGHT,
    marginBottom:150,
    alignItems:'center',
    borderRadius:20,
    justifyContent:'center',
    borderWidth:3,
    borderColor:'#207DCA' 

  },
  box1:{
    borderRadius:10,
    backgroundColor:'white',
    alignItems:'center',
    borderWidth:3,
    borderColor:'#8faf8a'
  },
  boxHeader:{
    backgroundColor:'white',
    width:ITEM_WIDTH,
    height:ITEM_HEIGHT * 0.2,
    borderBottomColor:'#8faf8a',
    borderBottomWidth:3 ,
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    flexDirection:'row' ,
  alignItems:'center'},
  img:{

  }

});
