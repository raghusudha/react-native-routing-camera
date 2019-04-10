import React, { Component } from 'react';
import { View, Text,StyleSheet,Button} from 'react-native';
import { Icon,Header } from 'react-native-elements';


export default class TopNav extends Component{
   
    render(){
     return(
         <Header 
         
         leftComponent={{ icon: 'menu' , color:'#fff'}}
          centerComponent={{ text: this.props.navigation.title, style:{color:'white'}}}
          rightComponent={{ icon: 'cart-plus',type:'font-awesome',color:'white'}}
       />
          )
 } 
}
