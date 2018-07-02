import React, { Component } from 'react';
import { View, Image, TouchableOpacity, ScrollView, CameraRoll, Share } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Gallery extends Component {
  state = {
    picArray: [],
    doneLoading: false,
    index: null
  }

  componentDidMount() {
    this.fetchPhotos()
  }

  fetchPhotos = () => {
    CameraRoll.getPhotos({ first: 30 })
      .then(res => {
        let picArray = res.edges;
        this.setState({ picArray, doneLoading: true })
        // console.log(picArray)
      })
      .catch(err => console.log(err));
  }

  sharePhoto = (index) => {
    const image = this.state.picArray[index].node.image.uri
    let shareOptions = {
      title: "React Native Share Example",
      message: "Check out this photo!",
      url: `data:image/jpg;base64,${image}`,
      subject: "Check out this photo!"
    }
    Share.share(shareOptions)
      .then((res) => console.log('res:', res))
      .catch(err => console.log('err', err))
  }

  render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity onPress={() => Actions.photo()}><Image source={require('../android/app/assets/images/galleryheader.png')} style={styles.galleryHeader} /></TouchableOpacity>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {this.state.doneLoading ? this.state.picArray.map((pic, i) => (
            <TouchableOpacity key={pic.node.image.uri} onPress={() => this.sharePhoto(i) }>
              <Image key={pic.node.image.uri} source={{uri: pic.node.image.uri}} style={styles.images} />		
            </TouchableOpacity>			
          )) : null}
        </ScrollView>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1
  },
  galleryHeader: {
    width: 411,
    height: 44
  },
  images: {
    width: 137,
    height: 137
  },
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
}

export default Gallery;