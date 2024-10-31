import React, { useState, useEffect } from 'react'

const DarkModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDarkMode(true)
      document.body.classList.add('dark-theme')
    }
  }, [])

  const darkModeToggle = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)

    if (newMode) {
      document.body.classList.add('dark-theme')
      localStorage.setItem('theme', 'dark')
    } else {
      document.body.classList.remove('dark-theme')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div id="darkmode-toggle-switch" className="btn-toggle-switch">
      <span className="label">Dark mode</span>
      <label htmlFor="darkmode-switch" className="toggle-switch">
      <input 
  type="checkbox" 
  id="darkmode-switch"
  checked={isDarkMode}
  onChange={darkModeToggle}
  aria-label="Enable Dark Mode"/>
        <span className="slider round"></span>
      </label>
    </div>
  )
}

export default DarkModeSwitch