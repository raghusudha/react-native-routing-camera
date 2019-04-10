import React, { Component } from 'react';
import { View, Text,StyleSheet,Button} from 'react-native';
import { Icon } from 'react-native-elements';
import TopNav from '../components/TopNav';
import TopNavCart from '../components/TopNavCart';


export default class Home extends Component{

    static navigationOptions=({navigation})=> {
        navigation.title="Products"
        return{
            header:<TopNav navigation={navigation}/>,
           
        }
    }
 render(){
     return(
     <View style={styles.container}>
         <Text style={styles.welcome}>Home</Text>
         <Button title="Go To Products" onPress={()=>this.props.navigation.navigate('Products')}/>
     </View>
     )
 }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
  