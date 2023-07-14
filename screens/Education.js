import React, { Component } from 'react'
import ScreenComponent from '../components/UI/ScreenComponent';

class Education extends Component {
  render() {
    return <ScreenComponent
      keyword="Education"
      headerBtn={true}
      navigation={this.props.navigation}
    />
  }
}

export default Education;