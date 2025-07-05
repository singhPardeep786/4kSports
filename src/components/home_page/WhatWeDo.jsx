import React from 'react'
import { motion } from 'framer-motion'
import { MoveRight } from 'lucide-react'
import { Link } from 'react-router'

const WhatWeDo = () => {

    const works = [
        {
            title: "Products",
            button: "View All",
            icon: <MoveRight />,
        },
        {
            title: "Sports",
            button: "View All",
            icon: <MoveRight />,
        },
        {
            title: "Services",
            button: "View All",
            icon: <MoveRight />,
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
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    }
    
  return (
    <>
        <section className='wrapper'>
            <div className="banner_bottom" style={{margin: "2rem auto 1rem auto"}}></div>
            <div className="what_we_do_heading">
                <motion.h2
                 initial="hidden"
                 whileInView="visible"
                 variants={headingVariants}
                 viewport={{ once: true, amount: 0.6 }}
                >
                    What we do
                </motion.h2>
            </div>
            <div className="what_we_do">
                {works.map((work, idx)=>(
                    <div key={idx} className='work'>
                        <h3>{work.title}</h3>
                        <Link className='flex items-center gap-1' to=''>
                            <span>{work.button}</span>
                            <span>{work.icon}</span>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="about_section_wrapper" style={{margin: " 2rem auto 0 auto"}}></div>
        </section>
    </>
  )
}

export default WhatWeDo