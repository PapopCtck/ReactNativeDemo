import React, { Component } from 'react'
import { Text, View,Button,StyleSheet } from 'react-native'

export default class Backbar extends Component {
    handlePress = () =>{
        const {back} = this.props
        back()
    }
    render() {
       
        return (
            <View style={styles.container}>
                <View style={styles.button}>
                    <Button  title="back" onPress={this.handlePress}></Button>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    button : {
        width : 100,
        height : 30,
    },
    container : {
        height : 50
    }
})
