import React, { Component } from 'react'

import Head from './components/Head'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'

const siteName = "Birdland Records";

export default class Layout extends Component{
  render(){
    return(
      <html lang="en">
        <Head
          siteName={siteName}
          title={this.props.title}
          description={this.props.description}
        />
        <body>

          <div id="wrapper">

            <SiteHeader />

            {this.props.children}

            <SiteFooter />

          </div>

        </body>
      </html>
    )
  }
}