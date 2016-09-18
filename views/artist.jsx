import React, { Component } from 'react'
import DefaultLayout from './layout'


export default class Artist extends Component{
  render() {
    const {artist} = this.props;
    return(
      <DefaultLayout
        title={this.props.title}
        description={this.props.description}>

          <h1>{artist.name}</h1>

      </DefaultLayout>
    )
  }
}