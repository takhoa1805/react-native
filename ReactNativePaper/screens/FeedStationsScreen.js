import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function FeedStationsScreen({navigation}) {
    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>This is Feed stations screen</Text>
            <Button title="Back to home screen" onPress={() => navigation.navigate('Home')} />
        </View>
    )
};