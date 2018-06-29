import React from 'react';
import { View, Image, TouchableOpacity} from 'react-native';

const Header = () => (
    <View>
        <View>
          <Image source={require('../android/app/assets/images/croppedinsta.png')} style={styles.imageStyle} />
        </View>
        <View style={styles.menuView}>
          <TouchableOpacity><Image source={require('../android/app/assets/images/home.png')} style={styles.iconStyle} /></TouchableOpacity>
          <TouchableOpacity><Image source={require('../android/app/assets/images/search.png')} style={styles.iconStyle} /></TouchableOpacity>
          <TouchableOpacity><Image source={require('../android/app/assets/images/add.png')} style={styles.iconStyle} /></TouchableOpacity>
          <TouchableOpacity><Image source={require('../android/app/assets/images/like.png')} style={{height: 25, width: 28}} /></TouchableOpacity>
          <TouchableOpacity><Image source={require('../android/app/assets/images/Ellipse.png')} style={styles.iconStyle} /></TouchableOpacity>
        </View>
    </View>
)

const styles = {
  imageStyle: {
    height: 700,
    width: 411
  },
  menuView: {
    width: 411,
    height: 46,
    shadowColor: 'black',
    shadowOffset: { width: -4, height: 0 },
    shadowRadius: 2,
    backgroundColor: '#ffffff',
    marginTop: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center'
  },
  iconStyle: {
    width: 25,
    height: 25
  }
}

export default Header;