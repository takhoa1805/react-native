import React from 'react'
import { View,Text, Button } from "react-native";
import BottomNavigationBar from '../Component/BottomNavigationBar';


export default function HomeScreen({navigation,route}){
    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>This is Home screen {route.params}</Text>
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

