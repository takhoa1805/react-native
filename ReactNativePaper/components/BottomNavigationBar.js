import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import PetsScreen from '../screens/PetsScreen';
import FeedStationsScreen from '../screens/FeedStationsScreen';

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