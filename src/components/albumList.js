/**
 * Created by ananda on 12/6/18.
 */

import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetail from './albumDetail';


// create the component
class AlbumList extends Component{
  state = {};
  componentWillMount() {
    this.setState({ albums : [] });
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(
      response => this.setState({ albums : response.data })
    )
  }

  renderAlbums() {
    return this.state.albums.map( album => <AlbumDetail key = {album.title} album = {album}/>);
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }

}

export default AlbumList;
