import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Topbar from './components/Topbar'
import Post from './components/Post'
import Comment from './components/CommentSection'


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Topbar></Topbar>
        <Post></Post>
        <Comment></Comment>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
 
});
