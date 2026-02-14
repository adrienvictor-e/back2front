import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            
            <div class='footer-links'>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
        <Link to='/'>
          <div class='footer-logo'>
            Back2front &nbsp;<i className="fas fa-bolt"></i>
          </div>
        </Link>
          <a class='website-rights' href="https://adrienvictor-e.github.io/back2front/#/" target="_blank" rel="noreferrer">
          Adrien Victor © 2021-2026 · Originally built in 2021
          <br></br>
          Website:
          <br></br>
          adrienvictor-e.github.io/back2front</a>
          <div className="fb-page" data-href="https://www.facebook.com/adrienvictor/" data-tabs="" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/adrienvictor/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/adrienvictor/">Adrien Victor Web developer</a></blockquote></div>
        </div>
      </section>
        </div>
    )
}

export default Footer
