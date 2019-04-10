import React, { Component } from 'react';
import { View, Text,StyleSheet,Button} from 'react-native';
import TopNav from '../components/TopNav';
import { Icon,Card } from 'react-native-elements';

export default class Products extends Component{
    static navigationOptions=({navigation})=> {
        navigation.title="Products"
        return{
            header:<TopNav navigation={navigation}/>,
           
        }
    }
 render(){
     return(
        
        <Card title="iphone"
          image={require("../images/a2.png")}>
        <Text style={{marginBottom:10}}>Products</Text>
        <Button title="Add to Cart" onPress={()=>this.props.navigation.navigate('Cart')}/>
    </Card>
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