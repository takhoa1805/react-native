import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Screen/LandingScreen/HomeScreen';
import SettingsScreen from './Screen/LandingScreen/SettingsScreen';
import FeedStationScreen from './Screen/LandingScreen/FeedStationsScreen';
import PetsScreen from './Screen/LandingScreen/PetsScreen';
import BottomNavigationBar from './Screen/Component/BottomNavigationBar';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen'>
          <Stack.Screen name ="HomeScreen" component ={HomeScreen} />
          <Stack.Screen name = "PetsScreen" component={PetsScreen}/>
          <Stack.Screen name = "FeedStationScreen" component={FeedStationScreen}/>
          <Stack.Screen name = "SettingsScreen" component={SettingsScreen}/>

        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
