import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    clrs:'red'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    clrs:'green'

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    clrs:'blue'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b9',
    title: 'First Item',
    clrs:'red'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f60',
    title: 'Second Item',
    clrs:'green'

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29772',
    title: 'Third Item',
    clrs:'blue'

  },
];

const Item = ({ title, clrs }) => (
  <View style={[styles.item,{backgroundColor: clrs,}]}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const CategoryScreen = () =>{

    const renderItem = ({ item }) => (
        <Item title={item.title} clrs={item.clrs} />
      );
    
      return (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 20,
      marginVertical: 5,
      marginHorizontal: 16,
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center'
    },
    title: {
      fontSize: 32,
    },
  });
export default CategoryScreen