import React from 'react';
import '../../App.css';
import '../Button.css';
import { Link } from 'react-router-dom';


function Frontend() {
  window.scrollTo(0, 0);
    return (
      <div className="cards">
        <div className='hero'>
        <h1>Frontend Projects</h1>
        <h2 className="herosection">
          <i className="fas fa-wrench fa-spin"></i> Ongoing construction
        </h2>
        </div>
        <div className="hero-btns">
        <h4 className="hr">Fluid Lightbox Popup</h4>
          <h5 className="stack"><i className="fab fa-react"></i> React &nbsp; &nbsp; <i className="fab fa-js-square"></i>&nbsp; JavaScript</h5>
          <div className="description">
            <ul>
              <h3>
                <li>
                  Responsive gird of images with soft zoom effect on hover
                </li>
                <li>
                  HD Full screen image pop up on click
                </li>
              </h3>
            </ul>
          </div>
          <Link to='/lightbox'>
          <a className="greenb button fatbaby serif round glass">
            Fluid Lightbox Popup <i className="fab fa-js-square"></i>
          </a>
          </Link>
        </div>
        <div className="hero-btns">
        <h4 className="hr">CV Themes</h4>
          <h5 className="stack"><i className="fab fa-react"></i> React &nbsp; &nbsp; <i className="fab fa-css3-alt"></i>&nbsp; CSS</h5>
          <div className="description">
            <ul>
              <h3>
                <li>
                  AI-designed CV themes: Spy-Fi Lounge & Infograph
                </li>
                <li>
                  Click to preview, expand fullscreen, or download PDF
                </li>
              </h3>
            </ul>
          </div>
          <Link to='/cv-themes'>
          <a className="greenb button fatbaby serif round glass">
            CV Themes <i className="fab fa-react"></i>
          </a>
          </Link>
        </div>
      </div>
    );
}

export default Frontend