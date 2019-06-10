import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default class Post extends Component {
    componentWillMount(){
        let {postID} = this.props
        let post = this.state.post
        let currentpost = post.filter(function (post){
            return post.id == postID
        })
        console.log(currentpost)
        this.setState({
            currentpost : currentpost
        })
        
    }
    state = {
        post : [{id : 1 , header : "Nice la", user : "Aaaaa", time : "22/5/62", content : "what the f is going on?"} ,
        {id : 2 , header : "Eiei", user : "Bbbbbbbbb", time : "20/5/62", content : "lol this is fun"},
        {id : 3 , header : "This is new", user : "CCCCCCCCCCcc", time : "21/5/62", content : "hey you whatcha gonna do"}
    ],
    currentpost : {}
    }
    
    render() {
        
        return (
            <View style={styles.Post}>
                <Text style={styles.Title}> {this.state.currentpost[0].header} </Text>
                <Text>{this.state.currentpost[0].content}</Text>
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
