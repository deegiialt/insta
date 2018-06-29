import React, { Component } from 'react';
import Header from './components/header.js';
import { View } from 'react-native';

class App extends Component {

  render() {
    return(
      <View>
        <Header/>
      </View>
    )
  }
}

export default App;