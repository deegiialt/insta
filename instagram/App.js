import React, { Component } from 'react';
import Header from './components/header.js';
import { View } from 'react-native';

class App extends Component {
  // componentDidMount() {
  //   this.getFrame;
  // }

  // getFrame = () => {
  //   API.search()
  //     .then(res => console.log(res));
  //     .catch(err => console.log(err));
  // };

  render() {
    return(
      <View>
        <Header/>
      </View>
    )
  }
}

export default App;