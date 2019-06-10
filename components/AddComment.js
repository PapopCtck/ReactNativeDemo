import React, { Component } from 'react'
import { Text, View,TextInput,StyleSheet } from 'react-native'

export default class AddComment extends Component {
    state = {
        comment : ""
    }
    onChangeText = (text) =>{
        this.setState({
            comment : text
        })
    }
    onSubmitEditing = () =>{
        const {newComment} = this.props
        let text = this.state.comment
        newComment(text)
    }
    render() {
        
        return (
            <View>
                <TextInput style={styles.textInput}
                placeholder = "แสดงความคิดเห็น"
                onChangeText = {this.onChangeText}
                onSubmitEditing = {this.onSubmitEditing}
                ></TextInput>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    textInput : {
        padding : 15,
        backgroundColor : "white",
        borderRadius : 10,
        borderWidth : 1,

        height : 140,
        margin :20,
        marginTop : 0
    }
})