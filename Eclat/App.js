import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screens/HomeScreen';
import Cart from './screens/CartScreen';
import { createContext, useState } from 'react';
import getImage from './utils/ImageLoader';

const Drawer = createDrawerNavigator();
export const GalleryContext = createContext(null);

export default function App() {
  const Gallery = require('./data/galleryData.json');
  const ImageLoader = getImage();
  const [cart, setCart] = useState([]);

  return (
    <GalleryContext.Provider value={{Gallery, ImageLoader, cart, setCart}}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName={Home}
          screenOptions={{
            headerShown: false
          }}
        >
          <Drawer.Screen 
            name="Home" 
            component={Home} 
            options={{
              drawerActiveTintColor: "#686868",
              drawerActiveBackgroundColor: "#E6DBD0", 
              drawerContentStyle: {
                backgroundColor: "#FFFFFF",
              },
            }}
          />
          <Drawer.Screen 
          name="Cart" 
          component={Cart} 
          options={{
            drawerActiveTintColor: "#686868",
              drawerActiveBackgroundColor: "#E6DBD0", 
              drawerContentStyle: {
                backgroundColor: "#FFFFFF",
              }
          }}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </GalleryContext.Provider>
  );
}

