
import './App.css'
import BlogSection from './components/BlogSection/BlogSection'
import CallBackForm from './components/CallBackForm/CallBackForm'

import Client from './components/Client/Client'
import FAQAccordion from './components/FAQAccordion/FAQAccordion'
import Footer from './components/Footer/Footer'
import HeroBox from './components/HeroBox/HeroBox'
import SimpleSlider from './components/HeroSlider/HeroSlider'

import Navbar from './components/Navbar/Navbar'
import Project from './components/Projects/Projects'
import Services from './components/Services/Services'
import WhoWeAre from './components/WhoWeAre/WhoWeAre'

function App() {


  return (
    <>
  <Navbar/>
  <SimpleSlider/>
  <HeroBox/>
  <WhoWeAre/>
  <Services/>
  <Project/>
  <CallBackForm/>
  <BlogSection/>
  <FAQAccordion/>
  <Client/>
  <Footer/>
    </>
  )
}

export default App
