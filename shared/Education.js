import React, { Component } from 'react'
import PageComponent from '../components/PageComponent';

class Education extends Component {
  render() {
    return <PageComponent
      keyword="Education"
      headerBtn={true}
      navigation={this.props.navigation}
    />
  }
}

export default Education;