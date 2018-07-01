import React, { Component } from 'react';
import Home from './components/home.js';
import Photo from './components/photo.js';
import { Scene, Router, Stack } from 'react-native-router-flux';

class App extends Component {
  render() {
    return(
      <Router>
        <Stack key='root'>
          <Scene key='home' component={Home} hideNavBar={true}/>
          <Scene key='photo'component={Photo} hideNavBar={true}/>
        </Stack>
      </Router>
    )
  }
}

export default App;