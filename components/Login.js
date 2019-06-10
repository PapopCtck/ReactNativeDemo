import React, { Component } from 'react'
import { View,Button,StyleSheet,TextInput} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export default class Login extends Component {
    state = {
        username : '',
    }
    static navigationOptions = {
        header: null,
        headerVisible: false
        
    }
    handleLogin = () =>{
        if(!this.state.username){
           return alert('Please input username')
        }
        this.props.navigation.navigate('Forum' , {
            username : this.state.username
        })
    }
    
    render() {
        return (
            <View style={styles.Component}>
                <LinearGradient style={styles.Component} colors={["#000B3B","#390055"]}>
          
                <View style={styles.Login}>
                <TextInput
                style={styles.Input}
                    placeholder="Please input user name"
                    placeholderTextColor="#FFF"
                    onChangeText={
                        (username) => this.setState({username})
                    }
                ></TextInput>
                <Button
                title="login"
                onPress={this.handleLogin}
                >
                   
                </Button>
                </View>
                </LinearGradient>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Component : {
        flex : 1,
        justifyContent : "center",
     
    },
    Login: {

        alignItems: "center",
        color : 'white'
        
    },
    Input:{
        padding:15,
        height:50,

    }
})

