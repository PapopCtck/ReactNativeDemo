import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default class Post extends Component {
    render() {
        return (
            <View style={styles.Post}>
                <Text style={styles.Title}> Title </Text>
                <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla diam est, non accumsan felis dictum non. Nam ut cursus eros, vitae volutpat justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis consectetur a felis a tincidunt. Pellentesque non commodo ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue leo a magna semper, nec aliquet ex facilisis. Maecenas at risus quis turpis blandit vehicula eget commodo velit. </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    Title :{
        textAlign: "left",
        fontSize : 20 
    },
    Post : {
        backgroundColor : "white",
        color: '#707070',
        padding : 20
    }
})
