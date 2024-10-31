import { useState, useEffect } from 'react'
import './App.css'
 
function App() {
  const [testimonials, setTestimonials] = useState([])
 
  useEffect(() => {
 
    const fetchData = async () => {
      const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
      const data = await res.json()
      setTestimonials(data)
 
      console.log(data)
    }
 
    fetchData()
 
  }, [])
 
  return (
    <>
      {
        testimonials.map(item => (<div key={item.id}>{item.author}</div>))
      }
    </>
  )
}
 
export default App