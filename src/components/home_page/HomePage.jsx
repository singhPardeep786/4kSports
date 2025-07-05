import React from 'react'
import HomeBanner from './HomeBanner'
import AboutSection from './AboutSection'
import WhyUsSection from './WhyUsSection'
import WhatWeDo from './WhatWeDo'
import Consultation from './Consultation'
import ClientsSection from './ClientsSection'
import CaseStudy from './CaseStudy'
import Testimonal from './Testimonal'
import FAQs from './FAQs'
import Footer from '../footer/Footer'

const HomePage = () => {
  return (
    <>
      <HomeBanner />
      <AboutSection />
      <WhyUsSection />
      <WhatWeDo />
      <Consultation />
      <ClientsSection />
      <CaseStudy />
      <Testimonal />
      <FAQs />
      <Footer />
    </>
  )
}

export default HomePage