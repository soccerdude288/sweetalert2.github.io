import React from 'react'
import Link from 'gatsby-link'

import ExampleComponent from '../components/examples'

import '../styles/styles.scss'
import logo from '../images/swal2-logo.png'

const IndexPage = () => (
  <div className="container">
    <div className="showcase normal">
      <h4>Normal alert</h4>
      <button>Show normal alert</button>
      <pre><span className="func">alert</span>(<span className="str">'You clicked the button!'</span>)</pre>
      <div className="vs-icon"/>
    </div>

    <div className="showcase sweet">
      <img src={logo} height="30" alt="SweetAlert2"/>
      <button aria-label="Show SweetAlert2 success message">Show success message</button>
      <pre>
        swal(
          <span className="str">'Good job!'</span>,
          <span className="str">'You clicked the button!'</span>,
          <span className="str">'success'</span>
        )
      </pre>
    </div>
    <p>Pretty cool huh? SweetAlert2 automatically centers itself on the page and looks great no matter if you're using a
      desktop computer, mobile or tablet. It's even highly customizeable, as you can see below!</p>

    {ExampleComponent()}
  </div>
)

export default IndexPage
