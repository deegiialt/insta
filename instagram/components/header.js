import React from 'react';
import { View, Image } from 'react-native';

const Header = () => (
    <View>
    {/* <Text style={styles.textStyle}>Instagram</Text> */}
        <Image source={{ uri: './assets/images/instaclone.png' }} />
    </View>
)

const styles = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,

  },
}

export default Header;