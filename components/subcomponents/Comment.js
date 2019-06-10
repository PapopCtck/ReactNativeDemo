import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default class CommentBox extends Component {
    render() {
        const {comment} = this.props
        return (
            <View style={styles.commentBox}>
                <Text> {comment} </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    commentBox : {
        borderRadius : 10,
        borderWidth : 1,
        backgroundColor : "#efdfdf",
        padding : 10,
        margin : 15
    },

})