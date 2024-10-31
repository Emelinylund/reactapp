import React, { useState } from 'react'
import Notification from '../images/notification.svg'

const Newsletter = () => {
  const [formData, setFormData] = useState({ email: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
  setFormData({...formData, [name]: value})

  if (value.trim() === '') {
    setErrors(prevErrors => ({...prevErrors, [name]: `The ${name} field is required.`}))
  } else {
    setErrors(prevErrors => ({...prevErrors, [name]: ''}))
  }
  }

  const handleOk = () => {
    setSubmitted(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = {}
    Object.keys(formData).forEach(field => {
      if (formData[field].trim() === '') {
        newErrors[field] = `The ${field} field is required.`
      }
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (res.ok) {
      setSubmitted(true)
      setFormData({ name: '' })
  }
}

  if (submitted) {
    return ( 
      <div className="informationbox">
        <h1>You have now subscribed to our newsletter!</h1>
        <button className="btn-purple" onClick={handleOk}>OK</button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
    <section id="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-content">
          
          <img src={Notification} alt="Notification Bell" />
          <h3>
            Subscribe to our newsletter to stay<br />
            informed about latest updates
          </h3>
        </div>
        <div className="newsletter-input">
          <div className="input-icon">
            
            <i className="fa-regular fa-envelope"></i>
            <div className="form-group">
            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Your Email" />
            <span>{errors.email && errors.email}</span>
          </div></div>
          <button type="submit">Subscribe</button>
        </div>
      </div>
    </section>
    </form>
  )
}

export default Newsletter;
