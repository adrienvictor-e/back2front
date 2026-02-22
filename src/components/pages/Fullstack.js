import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';


function Fullstack() {
  window.scrollTo(0, 0);
    return (
        <div className="cards">
        <div className='hero'>
        <h1>Fullstack Projects</h1>
        <h2 className="herosection">
          <i className="fas fa-wrench fa-spin"></i> Ongoing construction
        </h2>
        </div>
        <div className="hero-btns">
        <h4 className="hr">Interactive Calendar App</h4>
          <h5 className="stack"><i className="fab fa-react"></i> React</h5>
          <div className="description">
            <ul>
              <h3>
                <li>
                Uses the browser's date API for a live calendar
                </li>
                <li>
                Daily events can be added or deleted (uses local storage)
                </li>
              </h3>
            </ul>
          </div>
          <Link to='/calendar'>
          <a className="greenb button fatbaby serif round glass">
          Interactive Calendar App <i className="fab fa-react"></i>
          </a>
          </Link>
        </div>
        <div className="hero-btns">
        <h4 className="hr">Breaking Bad API</h4>
          <h5 className="stack"><i className="fab fa-react"></i> React</h5>
          <div className="description">
            <ul>
              <h3>
                <li>
                Fetch API using Async function and Await promise
                </li>
                <li>
                Filter query to render info and image from characters
                </li>
                <li>
                Responsive gird of images with card flip effect on hover
                </li>
                <li>
                Search bar with name filter
                </li>
              </h3>
            </ul>
          </div>
          <Link to='/bbapi'>
          <a className="greenb button fatbaby serif round glass">
          Breaking Bad API <i className="fab fa-react"></i>
          </a>
          </Link>
          </div>
          <div className="hero-btns">
        <h4 className="hr">Node.js CRUD app</h4>
          <h5 className="stack"><i className="fab fa-node"></i> Node</h5>
          <div className="description">
            <ul>
              <h3>
                <li>
                Google authentication
                </li>
                <li>
                Public and private stories are stored in a secure cloud MongoDB database
                </li>
                <li>
                Public stories can be seen only by authenticated users
                </li>
                <li>
              If the{' '}
              <ExternalLink href="https://online-diary-adrien.up.railway.app">
              <a className="backup-link">
                main site link
              </a>
              </ExternalLink>
              {' '}is broken, here's{' '}
              <ExternalLink href="https://online-diary-adrien.onrender.com/">
              <a className="backup-link">
                my backup site
              </a>
              </ExternalLink>
              : if the initial loading is slow, do a browser refresh retry
            </li>
              </h3>
            </ul>
          </div>
          <ExternalLink href="https://online-diary-adrien.up.railway.app">
          <a className="greenb button fatbaby serif round glass">
          Node.js CRUD app <i className="fab fa-node"></i>
          </a>
          </ExternalLink>
        </div>
      </div>
      
    )
}

export default Fullstack