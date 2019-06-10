import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Topbar from './components/Topbar'
import Post from './components/Post'
import Comment from './components/CommentSection'
import LinearGradient from 'react-native-linear-gradient'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={["#00005B","#3C2ABB"]}>
        <Topbar></Topbar>
        <Post></Post>
        <Comment></Comment>
        </LinearGradient>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
 
});
