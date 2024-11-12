import React, { useEffect, useState } from 'react'
import AppstoreLight from '../images/appstore (2).svg'
import GoogleplayLight from '../images/googleplay (2).svg'
import AppstoreDark from '../images/Appstoredarkmode.svg'
import GoogleplayDark from '../images/googleplaydarkmode.svg'
import Phoneback from '../images/iphone 12 Probakom1.svg'
import Phonefront from '../images/iphone 12 Pro.svg'

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.body.classList.contains('dark-theme'))
    }

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] })

    checkDarkMode()

    return () => observer.disconnect()
  }, [])

  
  const AppstoreImage = isDarkMode ? AppstoreDark : AppstoreLight
  const GoogleplayImage = isDarkMode ? GoogleplayDark : GoogleplayLight

  return (
    <section id="hero1">
      <div className="container1"> 
        <div className="headline"> 
          <h1>Manage All Your Money in One App</h1>
          <div className="content"> 
            <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
            <div className="buttons"> 
              <a className="btn-download-app" href="#"><img src={AppstoreImage} alt="appstore" /></a>
              <a className="btn-download-app" href="#"><img src={GoogleplayImage} alt="googleplay" /></a>
            </div>
            <a href="#" className="discover-more"> 
              <span className="btn-circle">
                <i className="fa-solid fa-chevron-down"></i>
              </span>
              <span>Discover more</span>
            </a>
          </div>
        </div>
      </div>

      <div className="images"> 
        <img className="img-back" src={Phoneback} alt="iphone my budget" />
        <img className="img-front" src={Phonefront} alt="iphone your cards" />
      </div>
    </section>
  )
}

export default Hero
