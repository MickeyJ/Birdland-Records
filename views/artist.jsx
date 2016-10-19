import React, { Component } from 'react'
import DefaultLayout from './layout'

export default class Artist extends Component{
  render() {
    const {artist} = this.props;
    return(
      <DefaultLayout
        title={this.props.title}
        description={this.props.description}>

        <section id="artist-page-container">
          <div id="artist-page-banner">
            <img className="artist-page-image" src={artist.img_url} alt={artist.name} />
          </div>
          <h1>{artist.name}</h1>

        </section>


      </DefaultLayout>
    )
  }
}