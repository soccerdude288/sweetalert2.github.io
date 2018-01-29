import React from 'react'
import logo from '../../images/swal2-logo.png'
import paypalImage from '../../images/paypal.png'

const Header = () => (
  <header>
    <img src={logo} className='logo' width='498' alt='SweetAlert2 logo'/>
    <h1>A beautiful, responsive, customizable, accessible (WAI-ARIA) replacement for JavaScript's popup boxes</h1>
    <h2>Zero dependencies</h2>
    <div className='carbonads-wrapper'>
      <script
        id='_carbonads_js'
        src='//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=sweetalert2githubio'
        async/>
      <script src='//m.servedby-buysellads.com/monetization.js'/>
      <div className='bsa-cpc'/>
    </div>
    <div className='stats mobile-hidden'>
      Current version:
      <a href='https://github.com/sweetalert2/sweetalert2/releases' id='current-version'
         aria-label='Current version '/> ●
      Latest update:
      <a href='https://github.com/sweetalert2/sweetalert2/commits/master' id='latest-update'
         aria-label='Latest update '/> ●
      Downloads last month:
      <a href='https://npm-stat.com/charts.html?package=sweetalert2' id='downloads-last-month'
         aria-label='Downloads last month '/>
    </div>
    <a className='top-right-button download'>Download</a>
    <a href='https://unpkg.com/sweetalert2' tabIndex='-1' className='top-right-button cdn' target='_blank'
       rel='noopener'>CDN</a>
    <div className='top-right-button donate'>
      <img src={paypalImage} width='32' height='32' alt=''/>
      <span>Donate</span>
    </div>
  </header>
)

export default Header
