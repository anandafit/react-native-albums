import React, { Component } from 'react';
import { Text, View, Image, Linking} from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import CardButton from './Button';

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <View>
          <Image style = { style.thumbNailStyle } source = { { url : props.album.thumbnail_image} }/>
        </View>
        <View style = { style.containerStyle }>
          <Text style = {style.headerTextStyle}>{ props.album.title }</Text>
          <Text>{ props.album.artist }</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style = { style.imageStyle } source = { { url : props.album.image} }/>
      </CardSection>

      <CardSection>
        <CardButton onPress = { () => Linking.openURL(props.album.url)}>
          Buy me !!
        </CardButton>
      </CardSection>
    </Card>
  );

};


const style = {
  headerContentStyle : {
    flexDirection : 'column',
    justifyContent : 'space-around'
  },
  headerTextStyle : {
    fontSize : 18
  },
  thumbNailStyle : {
    height : 50,
    width : 50,
    marginLeft : 5,
    marginRight : 5
  },
  thumbNailContainerStyle : {
    justifyContent: 'center',
    alignItems : 'center'
  },
  imageStyle : {
    height: 300,
    flex : 1,
    width: null
  }
};

export default  AlbumDetail;