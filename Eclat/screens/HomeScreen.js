import { Text, View, Image, StatusBar, ImageBackground } from 'react-native';
import styles from '../styles';
import CustomDrawerButton from '../components/CustomDrawerButton';
import { FlatList } from 'react-native-gesture-handler';
import getImage from '../utils/ImageLoader';
import { useState } from 'react';

const Home = () => {
  const Logo = require('../assets/Logo.png');
  const SearchButton = require('../assets/search.png');
  const ShoppingBag = require('../assets/shopping-bag.png');
  const ListView = require('../assets/Listview.png');
  const Filter = require('../assets/Filter.png');
  const Gallery = require('../data/galleryData.json');
  const addButton = require('../assets/add_circle.png');

  const [numColumns, setNumColumns] = useState(2);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'}/>
      <View style={styles.homeHeader}>
        <CustomDrawerButton style={styles.customDrawerButton}/>
        <View style= {{height: 45, width: 85}}>
          <Image style= {{height: 45, width: 85}} source={Logo}/>
        </View>
        <View style={{flexDirection: 'row', gap: 20}}>
          <Image style={styles.headerIcon} source={SearchButton}/>
          <Image style={styles.headerIcon} source={ShoppingBag}/> 
        </View>
      </View>
      <View style={[styles.homeHeader, {columnGap: 45}]}>
        <Text style={{fontSize: 26, padding: 10, letterSpacing: 5}}>OUR STORY</Text>
        <View style={styles.subHeaderText}>
          <View style={styles.iconBackground}>
            <Image style={{margin: 10, width: 30, height: 30,}} source={ListView}/>
          </View>
          <View style={styles.iconBackground}>
            <Image style={[styles.headerIcon, {margin: 10}]} source={Filter}/>
          </View>
        </View>
      </View>
      <FlatList 
        data={Gallery}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
        renderItem={({item}) => {
          return (
            <View style={styles.galleryContainer}>
              <View>
               <ImageBackground style={styles.galleryItem} source={getImage(item.id)}>
                <Image style={styles.addButton}source={addButton}/>
              </ImageBackground> 
               <Text style={styles.itemName}>{item.name}</Text>
               <Text style={styles.itemDescription}>{item.description}</Text>
               <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
            </View>
          )
        }}
      />
    </View>
  );
}

export default Home;

