import React, { Component } from 'react'
import DefaultLayout from './layout'

import {Banner} from '../build'

export default class Artist extends Component{
  render() {
    const {artist} = this.props;
    return(
      <DefaultLayout
        title={this.props.title}
        description={this.props.description}>

        <section id="artist-page-container">

          <div id="artist-page-banner">

            <div id="artist-image-container">

              <img className="artist-page-image" src={artist.img_url} alt={artist.name} />
              <div className="artist-name-overlay">
                <span>{artist.name}</span>
              </div>

            </div>

            <div id="artist-links-container">

              <div className="artist-links">
                <a className="artist-official-link" href={`#${artist.name}`}>
                  OFFICIAL SITE
                </a>
                <div className="artist-social-links">
                  <a href="#!TW" >
                    <img src="icons/tw-shadow.png" style={{height: 42, width: 42, marginTop: 8}}  alt="TW" />
                  </a>
                  <a href="#FB" >
                    <img src="icons/fb-shadow.png" style={{height: 38, width: 38, marginBottom: 2}} alt="FB" />
                  </a>
                  <a href="#BL email" >
                    <img src="icons/mail_2.png" style={{height: 40, width: 40, marginBottom: 2}} alt="BL" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          <section id="artist-info-container">

            <Banner className="bg-white" style={{margin: '0'}} shadow={true}>
              <h1 className="info-title">RELEASES</h1>
              <div className="title-underline"></div>
            </Banner>

            <Banner className="bg-grey light" style={{margin: '0'}} shadow={true}>
              <h1 className="info-title">VIDEOS</h1>
              <div className="title-underline"></div>
            </Banner>

            <Banner className="bg-white" style={{margin: '0'}} shadow={true}>
              <h1 className="info-title">EVENTS</h1>
              <div className="title-underline"></div>
            </Banner>

            <Banner className="bg-grey light" style={{margin: '0'}} shadow={true}>
              <h1 className="info-title">BREAKING NEWS</h1>
              <div className="title-underline"></div>
            </Banner>

          </section>

        </section>


      </DefaultLayout>
    )
  }
}