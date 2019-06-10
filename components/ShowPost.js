import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import Topbar from './Topbar'
import Post from './Post'
import Comment from './CommentSection'
import LinearGradient from 'react-native-linear-gradient'
import Backbar from './Backbar';

export default class ShowPost extends Component {
    handleBack = () =>{
        this.props.navigation.navigate('Forum')
    }
    componentDidMount(){
        console.log(this.props.navigation.state.params.postID)
    }
    render() {
        const postID = this.props.navigation.state.params.postID
        return (
            <View style={styles.container}>
                 <LinearGradient style={styles.Component} colors={["#000B3B","#390055"]}>
                       <Topbar></Topbar>
                       <Backbar back={this.handleBack}></Backbar>
                        <Post postID={postID}></Post>
                        <Comment></Comment>
                        </LinearGradient>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
  
    },
   
  });