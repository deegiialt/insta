import React, { Component } from 'react';
import { View, Image, TouchableOpacity, ScrollView, CameraRoll, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Gallery extends Component {
	state = {
		picArray: [],
		doneLoading: false
	}

	componentDidMount() {
		this.fetchPhotos()
	}

	fetchPhotos = () => {
		CameraRoll.getPhotos({ first: 30 })
			.then(res => {
				let photoArray = res.edges;
				this.setState({ photoArray, doneLoading: true })
				console.log(this.state.photoArray)
				console.log(photoArray[0].node.image.uri)
				console.log(this.state.doneLoading)
			})
			.catch(err => console.log(err));
	}

	render() {
		return(
			<View style={styles.container}>
				<TouchableOpacity onPress={() => Actions.photo()}><Image source={require('../android/app/assets/images/galleryheader.png')} style={styles.galleryHeader} /></TouchableOpacity>
				<ScrollView contentContainerStyle={styles.scrollContainer}>
				{/* Map function not working for some reason, using sample images for development */}
					<Image source={{ uri: "content://media/external/images/media/64" }} style={styles.images} />
					<Image source={{ uri: "content://media/external/images/media/82" }} style={styles.images} />
					{this.state.doneLoading ? this.state.picArray.map(pic => (
						<Image key={pic.node.image.uri} source={{uri: pic.node.image.uri}} style={styles.images} />						
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