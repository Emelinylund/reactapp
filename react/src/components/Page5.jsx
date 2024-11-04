import React, { useState, useEffect } from 'react'
import QuoteIcon from '../images/quotes.svg'
import StarIcon from '../images/star.svg' 

const ClientCard = ({ comment, avatarUrl, author, jobRole, starRating }) => {
  return (
    <div className="clients-card">
      <div className="quote-icon">
        <img src={QuoteIcon} alt="quote-icon" />
      </div>
      <div className="stars" style={{ display: 'flex' }}>
        {Array.from({ length: starRating }, (_, index) => (
          <img key={index} src={StarIcon} alt="star" style={{ marginRight: '4px' }} />
        ))}
      </div>
      <p>{comment}</p>
      <div className="client-info">
        <img src={avatarUrl} alt={`${author}'s avatar`} className="client-photo" />
        <div>
          <h4>{author}</h4>
          <p>{jobRole}</p>
        </div>
      </div>
    </div>
  )
}

const Page5 = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
        const data = await res.json()
        setTestimonials(data)
      } catch (error) {
        console.error('Error fetching testimonials:', error)
      }
    }

    fetchTestimonials()
  }, [])

  return (
    <section id="page5">
      <div className="container6">
        <div className="clients">
          <h2>Clients are <br />Loving Our App</h2>
        </div>
        <div className="clients-grid">
          {testimonials.map((testimonial) => (
            <ClientCard
              key={testimonial.id}
              comment={testimonial.comment}
              avatarUrl={testimonial.avatarUrl}
              author={testimonial.author}
              jobRole={testimonial.jobRole}
              starRating={testimonial.starRating}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Page5


