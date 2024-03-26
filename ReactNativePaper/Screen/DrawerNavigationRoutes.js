import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './LandingScreen/HomeScreen';
import SettingsScreen from './LandingScreen/SettingsScreen';
import FeedStationScreen from './LandingScreen/FeedStationsScreen';
import PetsScreen from './LandingScreen/PetsScreen';

const Stack = createNativeStackNavigator();

export default function DrawerNavigationRoutes(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='HomeScreen'>
                <Stack.Screen name ="HomeScreen" component ={HomeScreen} />
                <Stack.Screen name = "PetsScreen" component={PetsScreen}/>
                <Stack.Screen name = "FeedStationScreen" component={FeedStationScreen}/>
                <Stack.Screen name = "SettingsScreen" component={SettingsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}