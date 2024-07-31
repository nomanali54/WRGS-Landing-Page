import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Title subtitle='Our PROGRAM' title='What we offer'/>
    <div className="container">
    <Programs/>
    <About/>
    <Title subtitle='Gallery' title='Campus Photos'/>
    <Campus/>
    <Title subtitle='TESTIMONIALS' title='What Student Says'/>
    <Testimonials/>
    <Title subtitle='CONTACT US' title='Get in Touch'/>
    <Contact/>
    </div>
    </>
  )
}

export default App
