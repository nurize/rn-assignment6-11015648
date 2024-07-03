import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screens/HomeScreen';
import Cart from './screens/CartScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
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
  );
}

