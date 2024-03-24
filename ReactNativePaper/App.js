import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import BottomNavigationBar from './components/BottomNavigationBar';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>

        <PaperProvider>
          {/* <Stack.Navigator initialRouteName='Home'>
           <Stack.Screen name ="Home" component ={HomeScreen}/>
           <Stack.Screen name = "Settings" component={SettingsScreen}/>
          </Stack.Navigator> */}


          <BottomNavigationBar/>
        </PaperProvider>


    </NavigationContainer>
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
