import React, { Component } from 'react'
import DefaultLayout from './layout'

import ArtistLink from './components/ArtistLink'

export default class Artists extends Component{
  render() {
    return(
      <DefaultLayout
        title={this.props.title}
        description={this.props.description}>

        <div id="artist-thumb-container">

          <div className="row">

            <ArtistLink
              pathname="#Britt"
              image_url="images/artists/BRITT_1.jpg"
              artist_name="BRITT MARGIT"
            />

            <ArtistLink
              pathname="#Robyn"
              image_url="images/artists/ROBYN_1.jpg"
              artist_name="ROBYN SHERWELL"
            />

            <ArtistLink
              pathname="#Elise"
              image_url="images/artists/ELISE_2.jpg"
              artist_name="ELISE LEGENDRE"
            />

          </div>

          <div className="row">

            <ArtistLink
              pathname="#Cages"
              image_url="images/artists/CAGES_1.jpg"
              artist_name="CAGES OF LIGHT"
            />

            <ArtistLink
              pathname="#Dogwood"
              image_url="images/artists/DOGWOOD_1.jpg"
              artist_name="DOGWOOD HEART"
            />

            <ArtistLink
              pathname="#Fairylights"
              image_url="images/artists/FAIRYLIGHTS_2.jpg"
              artist_name="THE FAIRYLIGHTS"
            />

          </div>

        </div>



      </DefaultLayout>
    )
  }
}