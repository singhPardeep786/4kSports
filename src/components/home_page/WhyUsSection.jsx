import React from 'react'
import { motion } from 'framer-motion'

const WhyUsSection = () => {
  const cards = [
    {
      icon: "/images/icons/solutions.png",
      title: "One stop Solution",
      desc: "We design, Manage projects, consultation, execution and maintenance all at one place",
    },
    {
      icon: "/images/icons/satisfaction.png",
      title: "High customer satisfaction",
      desc: "We have an over 99.99% customer retention ratio attesting to that!"
    },
    {
      icon: "/images/icons/team.png",
      title: "Team of Qualified Professionals",
      desc: "Our hand-picked experienced in-house team ensures you get a quality experience"
    },
    {
      icon: "/images/icons/best.png",
      title: "Best service levels in Market",
      desc: "A well-trained team of qualified professionals ensure the best quality standards in the Market."
    },
  ]
  
  const headingVariants = {
    hidden: { 
      opacity: 0,
      y: 60
     },
    visible: { 
      opacity: 1,
      y: 0, 
      // transition: { duration: 0.7, ease: 'easeOut' } 
    }
  }

  return (
    <>
      <div className="why_us_section_bg">
        <section className='wrapper'>
          <div className="banner_bottom" style={{margin: "0.2rem auto 1rem auto"}}></div>
          <div className="why_us_heading">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={headingVariants}
            >
              Why Us
            </motion.h2>
          </div>
          <div className="cards_container">
          {cards.map((card, idx)=> (
            <motion.div 
              className="card" 
              id='card'
              key={idx}
              initial={
                window.innerWidth <= 640
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 40 }
              }
              animate={
                window.innerWidth <= 640
                  ? { opacity: 1, y: 0 }
                  : undefined
              }
              whileInView={
                window.innerWidth > 640
                  ? { opacity: 1, y: 0 }
                  : undefined
              }
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <img src={card.icon} alt="icon_imgs" className='card_icon' />
              <div className="card_content">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            </motion.div>
          ))}
          </div>
          <div className="about_section_wrapper" style={{margin: " 2rem auto 0 auto"}}></div>
        </section>
      </div>
    </>
  )
}

export default WhyUsSection