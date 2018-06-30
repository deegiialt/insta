import React from 'react';
import { View, Image} from 'react-native';

const Photo = () => (
    <View>
        <Image source={require('../android/app/assets/images/headerphoto.png')} style={styles.header}/>
        <Image source={require('../android/app/assets/images/x.png')} style={styles.x}/>
        <Image source={require('../android/app/assets/images/Photo.png')} style={styles.photo}/>
        <Image source={require('../android/app/assets/images/Cameraview.png')} style={styles.cameraview}/>
    </View>
);

const styles = {
  header: {
    width: 411,
    height: 44,
    shadowColor: 'rgba(0, 0, 0, 0.02)',
    shadowOffset: { width: 4, height: 0 },
    shadowRadius: 2,
    backgroundColor: '#ffffff',
    position: 'relative'
  },
  x: {
    width: 13,
    height: 13,
    borderColor: '#000000',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#3a3535',
    position: 'absolute'
  },
  photo: {
    width: 48,
    height: 21,
    color: '#000000',
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 21,
  },
  cameraview: {
    width: 411,
    height: 387,
    backgroundColor: '#c4c4c4',
  },
};

export default Photo;