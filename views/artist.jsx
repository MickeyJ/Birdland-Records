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

            <div id="artist-image-container">

              <img className="artist-page-image" src={artist.img_url} alt={artist.name} />
              <div className="artist-name-overlay">
                <span>{artist.name}</span>
              </div>

            </div>

            <div id="artist-links-container">

              <div className="artist-links">
                <a className="artist-official-link" href={`#${artist.name}`}>
                  Official Site
                </a>
                <div className="artist-social-links">
                  <a href="#!TW" >
                    <img src="icons/tw-shadow.png" style={{height: 52, width: 52, marginBottom: -4}}  alt="TW" />
                  </a>
                  <a href="#FB" >
                    <img src="icons/fb-shadow.png" style={{height: 50, width: 50, marginBottom: 0}} alt="FB" />
                  </a>
                  <a href="#BL email" >
                    <img src="icons/mail_2.png" style={{height: 45, width: 45, marginBottom: 2}} alt="BL" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </section>


      </DefaultLayout>
    )
  }
}