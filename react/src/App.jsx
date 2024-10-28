import './App.css'
import './App.jsx'
import Header from'./components/Header'
import Homenav from'./components/Homenav'
import Hero from'./components/Hero'
import Brands from'./components/Brands'
import Page2 from'./components/Page2'
import Page3 from'./components/Page3'
import Page4 from'./components/Page4'
import Page5 from'./components/Page5'
import Page6 from'./components/Page6'
import Newsletter from'./components/Newsletter'
import Footer from'./components/Footer'
import DarkModeSwitch from './components/DarkModeSwitch'

function App() {
  

  return (
    <>
      <Header />
      <DarkModeSwitch />
      <Homenav />
      <Hero />
      <Brands />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
