import React, { useEffect, useState } from "react"
import { Pressable, SafeAreaView, StatusBar, StyleSheet, Image, View, Dimensions , Text, TouchableHighlight } from "react-native"
import MapView,{Marker, Callout}from "react-native-maps"
import { check, request, PERMISSIONS, RESULTS } from "react-native-permissions"
import Geolocation from "react-native-geolocation-service" 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from "react-native-gesture-handler"

const { width } = Dimensions.get('screen');
const data = [
  
  {
    id: '1',
    title: 'Manarola, Italy',
    description: 'The Cliffs of Cinque Terre',
    image_url:
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80',
    iconName: 'location-pin',
    long: 60.625294978325336,
    lati:56.8631396484375
  },
  {
    id: '2',
    title: 'Venezia, Italy',
    description: 'Rialto Bridge, Venezia, Italy',
    image_url:
      'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=630&q=80',
    iconName: 'location-pin',
    long: 60.625294978315336,
    lati:56.8431396484375
  },
  {
    id: '3',
    title: 'Prague, Czechia',
    description: 'Tram in Prague',
    image_url:
      'https://images.unsplash.com/photo-1513805959324-96eb66ca8713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    iconName: 'location-pin',
    long: 60.62529397832836,
    lati:56.8531396584275
  }
];
const MapScreen = ({navigation}) => {
  const [location, setLocation] = useState(null) 

  const handleLocationPermission = async () => {
    let permissionCheck = ""
    if (Platform.OS === "ios") {
      permissionCheck = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)

      if (permissionCheck === RESULTS.DENIED) {
        const permissionRequest = await request(
          PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        )
        permissionRequest === RESULTS.GRANTED
          ? console.warn("Location permission granted.")
          : console.warn("Location perrmission denied.")
      }
    }

    if (Platform.OS === "android") {
      permissionCheck = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)

      if (permissionCheck === RESULTS.DENIED) {
        const permissionRequest = await request(
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        )
        permissionRequest === RESULTS.GRANTED
          ? console.warn("Location permission granted.")
          : console.warn("Location perrmission denied.")
      }
    }
  }

  useEffect(() => {
    handleLocationPermission()
  }, [])

  useEffect(() => { 
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords
        setLocation({ latitude, longitude })
      },
      error => {
        console.log(error.code, error.message)
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    )
  }, [])
const cord = () =>{
  console.log(location.latitude,location.longitude )


}

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {location && ( 
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 56.8531396584275,  
            longitude: 60.62529397832836,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
        >
{data.map(item => (
              <Marker
    coordinate={{
      latitude:item.lati,  
      longitude: item.long
    }}
    image={require('kura/assets/imgs/marks.png')}
    key={item.id}
    >
      <Callout  >
        <View style={{ width:width*0.6, height:width*0.75, borderRadius:10}}>
        <Image 
  style={{ width:width*0.6, height:width*0.6,borderRadius:10}}              
  source={{ uri: item.image_url }}
  />
        <View style={{flexDirection:'row', alignItems:'center', width:'70%'}}>
        {/* <MaterialCommunityIcons style={{}} color={'#191C21'} name='map-marker-circle' size={35}/> */}
        <Text numberOfLines={1} style={{fontWeight:'500', fontSize:20}}>{item.title}</Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'flex-start'}}>
        {/* <MaterialCommunityIcons style={{}} color={'#191C21'} name='map-marker-circle' size={35}/> */}
        <Text numberOfLines={1} style={{fontSize:20}}>11:00-12:00</Text>
        </View>
        <Callout onPress={() => navigation.navigate('CategoryScreen')} style={{position:'absolute', left:200, bottom:10, backgroundColor:'red', zIndex:70}}  >
        <MaterialCommunityIcons color={'green'} name='arrow-right-circle' size={35}/>
        </Callout>
        </View>
      </Callout>
      </Marker>

          ))}

        </MapView>

      )}
              <Pressable style={{width:250, height:250, backgroundColor:'red', position:'absolute'}} onPress={cord}></Pressable>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})

export default MapScreen