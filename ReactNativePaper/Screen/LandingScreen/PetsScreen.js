import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigationBar from '../Component/BottomNavigationBar';


export default function PetsScreen({navigation}) {
    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>This is Pets screen</Text>
            <Button
                title='Go to home screen'
                onPress = {()=>{
                    navigation.navigate('HomeScreen')
                }}/>
            <Button
                title='Go to pets screen'
                onPress = {()=>{
                    navigation.navigate('PetsScreen')
                }}/>
            <Button
                title='Go to feed station screen'
                onPress = {()=>{
                    navigation.navigate('FeedStationScreen')
                }}/>
            <Button
                title='Go to settings screen'
                onPress = {()=>{
                    navigation.navigate('SettingsScreen')
                }}/>
                

        </View>
    )
};