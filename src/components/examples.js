import React from 'react'

const Examples = () => (
  <div className="">
    <h3>More examples</h3>

    <ul className="examples">

      <li className="message">
        <div className="ui">
          <p>A basic message</p>
          <button aria-label="Try me! Example: A basic message">Try me!</button>
        </div>
        <pre>swal(<span className="str">'Any fool can use a computer'</span>)</pre>
      </li>

      <li className="title-text">
        <div className="ui">
          <p>A title with a text under</p>
          <button aria-label="Try me! Example: A title with a text under">Try me!</button>
        </div>
        <pre>
          swal(
            <span className="str">'The Internet?'</span>,
            <span className="str">'That thing is still around?'</span>,
            <span className="str">'question'</span>
          )
        </pre>
      </li>

      <li className="error">
        <div className="ui">
          <p>A modal with a title, an error icon, a text, and a footer</p>
          <button aria-label="Try me! Example: A modal with a title, an error icon, a text, and a footer">Try me!
          </button>
        </div>
        <pre>
          {`
        swal({
          type: <span class="str">'error'</span>,
          title: <span class="str">'Oops...'</span>,
          text: <span class="str">'Something went wrong!'</span>,
          footer: <span class="str">'&lt;a href>Why do I have this issue?&lt;/a>'</span>,
        })
        `}
        </pre>
      </li>

      <li id="long-text">
        <div className="ui">
          <p>A modal window with a long content inside:</p>
          <button aria-label="Try me! Example: A modal window with a long content inside">Try me!</button>
        </div>
        <pre>{`
        swal({
          imageUrl: <span class="str">'./images/robot.jpg'</span>,
          imageHeight: <span class="val">1512</span>,
          imageAlt: <span class="str">'A tall image'</span>
        })
        `}</pre>
      </li>
    </ul>
  </div>
)

export default Examples