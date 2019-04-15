import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import TopNav from '../components/TopNav';
import Camera from 'react-native-camera';
import TopNavCart from '../components/TopNavCart';


export default class Home extends Component {

    static navigationOptions = ({ navigation }) => {
        navigation.title = "Products"
        return {
            header: <TopNav navigation={navigation} />,

        }
    }
    takePicture() {
        this.camera
          .capture()
          .then((data) => console.log(data))
          .catch(err => console.error(err));
      }
    render() {
        return (
            <View style={styles.container}>
                <Camera
                    ref={cam => { this.camera = cam }}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}
                >
                    <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
                        [CAPTURE]
                    </Text>
                </Camera>
                <Text style={styles.welcome}>Home</Text>
                <Button title="Go To Products" onPress={() => this.props.navigation.navigate('Products')} />
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
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
        capture: {
          flex: 0,
          backgroundColor: '#fff',
          borderRadius: 5,
          color: '#000',
          padding: 10,
          margin: 40  
        },
});
