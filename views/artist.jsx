import React, { Component } from 'react'
import DefaultLayout from './layout'

import {Banner} from '../build'
import ArtistBannerImage from './components/ArtistBannerImage'
import ArtistSocialLinks from './components/ArtistSocialLinks'
import Releases from './components/artist_info/Releases'
import Videos from './components/artist_info/Videos'
import Events from './components/artist_info/Events'
import BreakingNews from './components/artist_info/BreakingNews'

export default class Artist extends Component{
  render() {
    const {artist} = this.props;
    return(
      <DefaultLayout
        title={this.props.title}
        description={this.props.description}>

        <section id="artist-page-container">

          <div id="artist-page-banner">

            <ArtistBannerImage artist={artist} />

            <ArtistSocialLinks artist={artist} />

          </div>

          <section id="artist-info-container">

            <Releases releases={artist.info.releases}/>

            <Videos videos={artist.videos}/>

            <Events />

            <BreakingNews />

          </section>

        </section>


      </DefaultLayout>
    )
  }
}