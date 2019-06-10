import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import Login from './components/Login';
import ShowPost from './components/ShowPost'
import Forum from './components/Forum'

const AppNavigator = createSwitchNavigator({
    Home : Login,
    Forum : Forum,
    ShowPost : ShowPost
},{
    initialRouteName : "Home",
    

})

export default createAppContainer(AppNavigator)
