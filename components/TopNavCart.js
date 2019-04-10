import React, { Component } from 'react';
import { View, Text,StyleSheet,Button} from 'react-native';
import { Icon } from 'react-native-elements';

export default class TopNavCart extends Component{

 render(){
     return(
     <Icon raised name='home' type='font-awesome' color='red' 
     onPress={()=> this.props.navigation.navigate('Products')}/>
    )
 }
}
