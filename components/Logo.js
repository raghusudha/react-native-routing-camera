import React, { Component } from 'react';
import { View, Text,StyleSheet,Button} from 'react-native';
import { Icon } from 'react-native-elements';

export default class Logo extends Componet{

    constructor(){
        super();
    }
    render(){
        return(
            <View>
               <Icon raised name='home' type='font-awesome' color='red' onPress={()=> console.log('hello')}/>
            </View>
        )
    }
}