import React from 'react';
import { View, Image } from 'react-native';

const Header = () => (
    <View>
        <Image source={require('../android/app/assets/images/instaclone.png')} style={styles.imageStyle} />
    </View>
)

const styles = {
  imageStyle: {
    height: 822,
    width: 411
  }
}

export default Header;