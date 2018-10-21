import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

// Adding Clarifay API
const app = new Clarifai.App({
apiKey: '1409f71571c74376a8655ee683d60fb0'
});

// Adding Particle.js values
const ParticlesOptions = {
    particles: {
      number: {
        value: 50,
        density: {
        enable: true,
        value_area: 800
        }
      } 
    }
  }

class App extends Component {
  constructor() {
    super();
    this.state = {
      input:'',
    }
  }
  onInputChange = (event) => {
    console.log(event.target.value);

  }
  onButtonSubmit = () => {
    console.log("click");
    app.models.predict(
      "a403429f2ddf4b49b307e318f00e528b", 
      "https://samples.clarifai.com/face-det.jpg")
      .then(
      function(response) {
      // do something with response
      console.log(response);
      },
    function(err) {
      // there was an error
    }
  );
  }

  render() {
    return (  
      <div className="App">
        <Particles className="particles"
        params={ParticlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
        onInputChange={this.onInputChange}
        onButtonSubmit={this.onButtonSubmit} 
        />

        {/*<FaceRecognition /> */}
      </div>
    );
  }
}

export default App;