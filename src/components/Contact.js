import React from 'react';
import '../styles/Contact.css';

const Contact = () => (
  <div className="contact">
    <h3 className="contact__heading">
      Get high on categorized Show HN submissions.
    </h3>
    <p className="contact__paragraph">
      We know the struggle. A lot of great stuff on Hacker News gets lost in the /shownew limbo.
    </p>
    <p className="contact__paragraph">
      Get the weekly top Show HN picks in your inbox!
    </p>
    <div className="contact__form">
      <input 
        type="text" 
        name="email" 
        className="contact__form-input" 
        placeholder="Your e-mail"  
      />
      <button className="contact__form-button">Subscribe</button>
    </div>
    <p className="contact__paragraph">Proudly cloned by <a href="https://michaelmanges.com">Michael Manges</a></p>
  </div>
);

export default Contact;
