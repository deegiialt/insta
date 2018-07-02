import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Camera } from 'react-native';
import { Actions } from 'react-native-router-flux';


class Photo extends Component {
  // takePicture = async function () {
  //   if (this.camera) {
  //     const options = { quality: 0.5, base64: true };
  //     const data = await this.camera.takePictureAsync(options)
  //     console.log(data.uri);
  //   }
  // }
  takePicture() {
    const options = {}

    this.camera.capture({ metadata: options }).then((data) => {
      console.log(data)
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    return(
      <View>
        <TouchableOpacity onPress={() => Actions.home()}><Image source={require('../android/app/assets/images/headerphoto.png')} style={styles.headerView} /></TouchableOpacity>
        {/* <View > */}
        <Camera
          ref={(cam) => {
            this.camera = cam
          }}
          style={styles.view}
          aspect={Camera.constants.Aspect.fill}>
          <Text
            style={styles.capture}
            onPress={this.takePicture.bind(this)}>
            [CAPTURE_IMAGE]
            </Text>
        </Camera>
        {/* </View> */}
        <View style={styles.buttonView}>
          <TouchableOpacity 
          onPress={ this.takePicture }
          ><Image source={require('../android/app/assets/images/picbutton.png')} style={styles.button} /></TouchableOpacity>
        </View>
        <View style={styles.menuView}>
          <TouchableOpacity onPress={ () => Actions.gallery() }><Image source={require('../android/app/assets/images/GALLERY.png')} style={styles.gallery} /></TouchableOpacity>
          <TouchableOpacity><Image source={require('../android/app/assets/images/Photo.png')} style={styles.photo} /></TouchableOpacity>
          <TouchableOpacity><Image source={require('../android/app/assets/images/VIDEO.png')} style={styles.video} /></TouchableOpacity>
        </View>
      </View>
    )
  }
};

const styles = {
  headerView: {
    width: 411,
    height: 44
  },
  x: {
    width: 13,
    height: 13
  },
  photoView: {
    width: 411,
    height: 387
  },
  button: {
    width: 74,
    height: 71,
  },
  buttonView: {
    width: 412,
    height: 268,
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuView: {
    width: 411,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  gallery: {
    width: 94,
    height: 18
  },
  photo: {
    width: 76,
    height: 18
  },
  video: {
    width: 67,
    height: 18
  }
};

export default Photo;