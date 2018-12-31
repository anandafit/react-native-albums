/** @format */
//
// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
//
// AppRegistry.registerComponent(appName, () => App);


import React from 'react';
import { Text , AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/albumList'


// create the component
const App = () => (
  <View style = { { flex : 1} }>
    <Header headerText = {'My Album'}/>
    <AlbumList/>
  </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);