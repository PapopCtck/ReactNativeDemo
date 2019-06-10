import React, { Component } from 'react'
import { View,Text,StyleSheet } from 'react-native'

export default class Topbar extends Component {
    render() {
        return (
            <View style={styles.header}>
              <Text style={styles.title}> Text </Text>  
            </View>
        )
    }
}
const styles = StyleSheet.create({
    title:{
        textAlign : 'center',
        color : 'white'
    },
    header:{

        padding: 15
    }
})
