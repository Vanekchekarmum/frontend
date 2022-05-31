import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, Pressable, SectionList,   Dimensions,Button
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
const { width } = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.3;
const ITEM_HEIGHT = ITEM_WIDTH;
function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={{backgroundColor:'red'}}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();


const DATA = [
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"]
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"]
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"]
    }
  ];

imgs=["kura/assets/imgs/nastya.png", ]
const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );


const arr = ["business", "wine", "art&culture ", "sport"
]
const icons =['telegram','whatsapp','google','vk',]
destinations = [{
  "destinationId": "001",
  "img": require("kura/assets/imgs/nastya.png")
},
{
  "destinationId": "002",
  "img": require("kura/assets/imgs/nastya.png")
},
{
  "destinationId": "004",
  "img": require("kura/assets/imgs/nastya.png")
},
{
  "destinationId": "005",
  "img": require("kura/assets/imgs/nastya.png")
},
{
  "destinationId": "006",
  "img": require("kura/assets/imgs/nastya.png")
},
{
  "destinationId": "007",
  "img": require("kura/assets/imgs/nastya.png")
}]
function ProfileScreen(props) {

  return (
    <View style={{backgroundColor:'#097fb4'}}>
    <ScrollView contentContainerStyle={styles.container} >
        <View style={styles.oval}>
          <Pressable style={{ position:'absolute',bottom:"82%", left:"85%"}} onPress={() => props.navigation.toggleDrawer()}>
        <MaterialCommunityIcons style={{}} name="dots-vertical" color={'#191C21'} size={30}  />
</Pressable>
{/* <Text style={{textAlign:'center', position:'absolute'}}>jjhhjhh</Text> */}

            <Image style={styles.img}  source={require("kura/assets/imgs/nastya.png")}/>
            {/* <View  style={styles.oval1}>
              <Text style={styles.name}>@nastya</Text>
            </View> */}
            {/* <View style={{backgroundColor:'#f8de8d' , borderRadius:50,overflow:'hidden', padding:'2%', margin:5, borderColor:'#8faf8a', borderWidth:2,width:150, }}>
              <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold'}}>@nastya</Text>
            </View> */}
        </View>
        <View style={{alignContent:'center',width:300,alignItems:'center',marginTop:20, 
}}>
        <Text style={styles.description}>
        Не следует, однако, забывать, что высокое качество позиционных 
        исследований говорит о возможностях системы массового участия. 
        </Text>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-around', width:"70%", flexWrap:'wrap'}}>
     {arr.map(a=>{
       return  <View  style={{backgroundColor:'#bceaff' , borderRadius:50,overflow:'hidden', padding:'4%', margin:5, borderColor:'#097fb4', borderWidth:2, }} key={a}><Text style={{fontSize:15}}>{a}</Text></View>
     })}
    </View>
        <View style={styles.icons}>
     {icons.map(a=>{
       return  <FontAwesome key={a}  style={{ }} name={a} color={'#191C21'} size={40} />
     })}
    </View>
    <View style={styles.imgs}>
     {destinations.map(a=>{
       return  <Image key={a.destinationId}  style={styles.photos}   source={a.img}/>
     })}


    </View>
    <View style={{height:250}}>

    </View>
    </ScrollView>
    </View>
  );
}

export default function MyDrawer() {
  return (
    <Drawer.Navigator
    
    drawerStyle={{
      backgroundColor: '#D7D7CF',
      width: width/2,

    }}
    drawerPosition={"right"}
      useLegacyImplementation
      drawerType={"slide"}
    drawerContentOptions={{
        activeTintColor: '#191C21',
        activeBackgroundColor: '#8faf8a',
        inactiveTintColor: '#191C21',

      }}


    >
      <Drawer.Screen name="Feed" component={ProfileScreen}

      options={{
        drawerLabel:'Профиль',
        labelStyle: {
          fontFamily: 'SomeFont',
          color: 'red',
        },

        drawerIcon: ({focused, size}) => (
           <FontAwesome
              name="user-circle-o"
              size={size}
              color={'#191C21'}
              
           />
        ),
     }} />
           <Drawer.Screen name="Edit" component={ProfileScreen}

options={{
  drawerLabel:'Изменить',
  labelStyle: {
    fontFamily: 'SomeFont',
    color: 'red',
  },

  drawerIcon: ({focused, size}) => (
     <MaterialCommunityIcons
        name="lead-pencil"
        size={size}
        color={'#191C21'}
        
     />
  ),
}} />
  <Drawer.Screen name="Settings" component={ProfileScreen}

options={{
  drawerLabel:'Настройки',
  labelStyle: {
    fontFamily: 'SomeFont',
    color: 'red',
  },

  drawerIcon: ({focused, size}) => (
     <FontAwesome
        name="gear"
        size={size}
        color={'#191C21'}
        
     />
  ),
}} />

      </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    backgroundColor:'#bceaff',
},
img:{
    backgroundColor:'black',
    width:300,
    height:300,
    borderRadius:150,
    marginTop:60,
   
},
oval:{
    backgroundColor:'#097fb4',
    width:width,
    height:500,
    borderBottomRightRadius:200,
    borderBottomLeftRadius:200,
    alignItems:'center',
    justifyContent:'space-evenly',
    

},
description:{
    textAlign:'center',
    marginBottom:10
},
oval1: {
    width: 55,
    height: 52,
    borderRadius: 50,
    backgroundColor: "#d0debb",
    transform: [{ scaleX:3 }],
    textTransform:'none',
    textAlign:'center',
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
    // borderColor:'#f8de8d',
    // borderWidth:2



  },
  icons:{

    flexDirection:'row',
    justifyContent:'space-around',
    padding:0,
    width:'100%', 
    backgroundColor:'#bceaff',
    height:70,
    alignContent:'center',
    alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor:'#097fb4',
    borderTopWidth:1,
    borderTopColor:'#097fb4',
    marginTop:20,
  },
  imgs:{
    flexDirection:'row',
    justifyContent:'center',
    padding:0,
    width:'100%', 
    backgroundColor:'#D7D7CF',
    alignContent:'center',
    alignItems:'center',

    marginTop:20,
    flexWrap:'wrap'
  },
  photos:{
    width:ITEM_WIDTH,
    height:ITEM_HEIGHT,
    margin:3 ,
    borderRadius:10,

  },
  name:{
    textAlign:'center',  
    transform: [{ scaleY:3 }],
    fontSize:9,
  }


});
