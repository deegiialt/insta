import React, { Component } from 'react';
import { View } from 'react-native';
import Generated from './pagedraw/component.js';

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
        <Generated />
      </View>
    )
  }
}

export default App;