import React from 'react'

const Head = (props) =>(
  <head>
    <title>{props.title} - {props.siteName}</title>
    <meta name="description" content={props.description}/>
    <meta name="HandheldFriendly" content="true" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
    <link rel="icon" href="images/favicon.ico" />
    <link rel="stylesheet" href="css/solid.css"/>
    <link rel="stylesheet" href="css/main.css"/>
  </head>
);

export default Head