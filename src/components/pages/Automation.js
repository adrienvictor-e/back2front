import React from 'react'
import '../../App.css'
import '../Button.css'


function Automation() {
  window.scrollTo(0, 0);
    return (
      <div className="cards">
        <div className='hero'>
        <h1>Automation Projects</h1>
        <h2 className="herosection">
          <i className="fas fa-wrench fa-spin"></i> Ongoing construction
        </h2>
        </div>
        <div className="hero-btns">
          <h4 className="hr">Smart Twitter Bot</h4>
          <h5 className="stack"><i className="fab fa-python"></i> Python</h5>
          <div className="description">
            <ul>
              <h3>
                <li>
                  Gets followers and uploads media
                </li>
                <li>
                  Learns from Trending Tweets
                </li>
              </h3>
            </ul>
          </div>
          <a className="greenb button fatbaby serif round glass">
           Smart Twitter Bot &nbsp;<i className="fab fa-python"></i>
          </a>
          <br></br>
          <a className="greenb button fatbaby serif round glass">
            Project tutorial video <i className="far fa-play-circle"></i>
          </a>
        </div>
      </div>
    );
}

export default Automation