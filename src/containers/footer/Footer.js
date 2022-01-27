import React from 'react';
import './footer.css'
import gpt3logo from '../../logo.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others?</h1>
      </div>

      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>
      
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3logo} alt="gpt3_logo" />
          <p>Boburshokh street Namangan Uz <br /> All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Morons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Boburshokh street Namangan Uz</p>
          <p>998 (90) 123-45-67</p>
          <p>info@info.net</p>
        </div>
      </div>

      <div className='gpt3__footer-copyright'>
        <p>@2022 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
};

export default Footer;
