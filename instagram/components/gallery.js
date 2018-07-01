import React, { Component } from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Gallery extends Component {

	render() {
		return(
			<View>
				<TouchableOpacity onPress={() => Actions.photo()}><Image source={require('../android/app/assets/images/galleryheader.png')} style={styles.galleryHeader} /></TouchableOpacity>
				<ScrollView>
				</ScrollView>
			</View>
		)
	}
}

const styles = {
	galleryHeader: {
		width: 411,
		height: 44
	}
}

export default Gallery;