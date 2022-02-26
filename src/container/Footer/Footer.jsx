import React, { useState } from 'react'
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import "./Footer.scss"

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <>
      <h2 className="head-text">Take a Coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="Email" />
          <a href="mailto:hello@micael.com" className='p-text'>hello@micael.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="Mobile" />
          <a href="tel:+1 (123) 456-789" className='p-text'>+1 (123) 456-789</a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input type="text" className="p-text" placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input type="text" className="p-text" placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea 
              className="p-text" 
              placeholder='Your Message' 
              name='message' 
              value={message} 
              onChange={handleChangeInput}
            />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>{loading ? "Sending" : "Send Message"}</button>
        </div>
      ) : (
        <h3 className="head-text"> Thank you for your message. I will contact you soon! </h3>
      )}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);