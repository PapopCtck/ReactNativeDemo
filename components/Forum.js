import React, { Component } from 'react'
import { Text, View,TouchableOpacity,StyleSheet } from 'react-native'
import Topbar from './Topbar'
import LinearGradient from 'react-native-linear-gradient'

export default class Forum extends Component {
    state = {
        post : [{id : 1 , header : "Nice la", user : "Aaaaa", time : "22/5/62"} ,
        {id : 2 , header : "Eiei", user : "Bbbbbbbbb", time : "20/5/62"},
        {id : 3 , header : "This is new", user : "CCCCCCCCCCcc", time : "21/5/62"}
    ]
    }
    handlePress = (id) =>{
        console.log(id)
        this.props.navigation.navigate('ShowPost' , {
            postID : id
        })
    }
    render() {
        let {post} = this.state
        return (
            <View style={styles.Component}>
                <LinearGradient style={styles.Component} colors={["#000B3B","#390055"]}>
                <Topbar></Topbar>
                {
                    post.map((obj)=>{
                        return(
                            <TouchableOpacity style={styles.Post} onPress={() => {this.handlePress(obj.id)}}>
                                <Text style={styles.Header}>{obj.header}</Text>
                                <Text style={styles.User}>by : {obj.user}</Text>
                                <Text style={styles.Date}>{obj.time}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
                </LinearGradient>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    Component : {
        flex : 1,
        
    },
    Post : {
        backgroundColor : "#333",
        padding : 10,
        
    },
    Header : {
        fontSize : 20,
        color : 'white'
        
    },
    User :{
        fontSize : 10,
        color : 'white'
    },
    Date : {
        fontSize : 10,
        opacity : .50,
        color : 'white'
    }
})