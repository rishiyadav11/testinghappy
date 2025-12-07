import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Features from './components/Features';
import Footer from './components/Footer';
import Accounting from './components/Accounting';
import Testimonials from './components/Testimonialscompo';
import CompaniesAndToolsMarquee from './components/Marquee';
import Faq from './components/Faq';

const App = () => {
  return (
    <main >
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Features />
      <Accounting />
      <CompaniesAndToolsMarquee />
      <Faq/>
      <Testimonials />
      <Footer/>
    </main>
  )
}

export default App