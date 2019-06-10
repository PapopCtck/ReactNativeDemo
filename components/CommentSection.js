import React, { Component } from 'react'
import { Text, View,StyleSheet,ScrollView } from 'react-native'
import AddComment from './AddComment'
import CommentBox from './subcomponents/Comment'


export default class Comment extends Component {
    state = {
        comment : [
            {id : 1 ,name : "a" , comment : "wow"},
            {id : 2 ,name : "b" , comment : "nice"},
            {id : 3 ,name : "c" , comment : "love it!"},
        ]
    }
    newComment = (comment) => {
        console.log("new comment!")
        let newComment = {id : 4 , name : "d", comment : comment}
        let newState = {comment : [...this.state.comment,newComment]}
        this.setState(newState)
        console.log(this.state)
    }
    render() {
        let {comment} = this.state 
        return (
            <ScrollView>
                <Text style={styles.Title}>ความคิดเห็น</Text>
                <AddComment newComment={this.newComment}></AddComment>
                {comment.map((obj) =>{
                    return (
                        <View>
                        <Text style={styles.name}>{obj.name}</Text>
                        <CommentBox comment={obj.comment}></CommentBox>
                        </View>
                    )
                })}
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    name : {
        color : 'white'
    },
    Title :{
        color : 'white',
        padding : 10,
        fontSize : 15
    }
})
