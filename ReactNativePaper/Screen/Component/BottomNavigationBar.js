import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import HomeScreen from '../LandingScreen/HomeScreen';
import SettingsScreen from '../LandingScreen/SettingsScreen';
import PetsScreen from '../LandingScreen/PetsScreen';
import FeedStationsScreen from '../LandingScreen/FeedStationsScreen';

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigationBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Pets" component={PetsScreen} />
      <Tab.Screen name="Feed station" component={FeedStationsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}