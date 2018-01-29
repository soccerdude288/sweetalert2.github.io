import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header/index'

import favicon from '../images/favicon.png'
import appleTouchIcon from '../images/apple-touch-icon.png'
import '../styles/bootstrap4-buttons.css'
import '../styles/carbon-ads.scss'
import '../styles/styles.scss'

const TemplateWrapper = ({children}) => (
  <div className={'application'}>
    <Helmet>
      <title>SweetAlert2 - a beautiful, responsive, customizable and accessible (WAI-ARIA) replacement for
        JavaScript's popup boxes</title>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge;"/>
      <link rel="icon" href={favicon}/>
      <link rel="apple-touch-icon" href={appleTouchIcon}/>
      <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com"/>
      <link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
      <link rel="preload" href="https://unsplash.it/400/200/?random" as="image"/>
      <link rel="preload" href="https://bit.ly/1Nqn9HU" as="image"/>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"/>
      <script src="https://unpkg.com/sweetalert2@latest/dist/sweetalert2.all.js"/>
    </Helmet>
    <Header/>
    {children()}
  </div>
)

TemplateWrapper.propType = {
  children: PropTypes.func
}

export default TemplateWrapper