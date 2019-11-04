import React from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'

import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js'
import { particlesParameters } from './constants'

import Clarifai from 'clarifai'
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

let key = 'b3ae5fe93d5a43ad86eda0fc50a2a3ef'

let app = new Clarifai.App({
  apiKey: key
})

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      input: '',
      imageUrl: '',
      box: {}
    }
  }

  calculateFaceLocation = (data) => {
    // console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
    let clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    let image = document.getElementById('inputImage')
    let width = Number(image.width)
    let height = Number(image.height)
    console.log(width, height)

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col *  width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }

  }

  displayFaceBox = (box) => {
    this.setState({box: box})
    console.log(box)
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
    console.log(event.target.value)
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input})

    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className='App pa4'>
        <Particles
          className='particles'
          params={particlesParameters}
        />
          <Navigation />
          <Logo />
          <Rank rank={5} username={'Albany'}/>
          <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
          <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
      </div>
    )
  }
}

export default App
