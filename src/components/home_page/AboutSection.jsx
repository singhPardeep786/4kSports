import React, { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion';

// Intersection observer hook
const useInView = (options = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3, ...options }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
};

// About heading animation variants (moved outside Counter, fixed scope)
const aboutHeading = {
  hidden: { 
    opacity: 0,
    y: 60
   },
  visible: { 
    opacity: 1,
    y: 0, 
    transition: { duration: 0.7, ease: 'easeOut' } 
  }
}

// Counter with framer-motion for smooth animation
const Counter = ({ end, duration = 2, suffix = '', className = '', label, startCount }) => {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let controls;
    if (startCount) {
      controls = animate(count, end, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => setDisplay(Math.floor(latest)),
      });
    } else {
      setDisplay(0);
      count.set(0);
    }
    return () => controls && controls.stop();
    // eslint-disable-next-line
  }, [end, duration, startCount]);
  
  return (
    <motion.div
      className={`flex flex-col items-center ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={startCount ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      <motion.span
        className="text-[3rem] font-bold text-[var(--orange2)]"
        style={{}}
        aria-label={display}
      >
        {display}{suffix}
        {/* {suffix && (
          <span
            style={{
              fontSize: '1.5rem',
              marginLeft: '0.3rem',
              verticalAlign: 'super',
              display: 'inline-block',
            }}
          >
            {suffix}
          </span>
        )} */}
      </motion.span>
      <span className="text-lg text-white mt-3 text-center label_font">{label}</span>
    </motion.div>
  );
};

const AboutSection = () => {
  const [counterRef, inView] = useInView();

  return (
    <>
      <div className="about_section_bg overflow-hidden">
        <section className='wrapper overflow-hidden'>
        <section className=" banner_bottom" style={{margin:"0 0 2rem 0"}}></section>
          <div className="about_section flex flex-col justify-center">
            <div className="about_content_box1 flex items-start justify-center flex-col gap-5">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={aboutHeading}
            >
              About Us
            </motion.h2>
              <p>4K Sports is started with a clear mission to revolutionize the framework of sports infrastructure with multisport and multipurpose facilities. Developing next-gen sports infrastructure for every kind of sport, 4K Sports is committed to bringing a change of growth.</p>
              <p>Through constant innovation, we strive to bring sports infrastructure and accessories of top-notch quality along with a high product portfolio that you can choose from. Bringing a new range of infra that every sport requires to meet your demands of every sport ground requirements, 4K Sports is your one-stop solution for all Sports Infrastructure and Accessories. Kickstart the sport groundwork now by browsing our products.</p>
            </div>
          </div>
      {/* Responsive fix: remove 'contents' class and add flex-col for mobile, flex-row for md+ */}
      <div className="work_done_numbers_box realtive xl:absolute">
        <div
          className="work_done_numbers flex flex-col sm:flex-row flex-wrap justify-center sm:justify-evenly gap-8 sm:gap-10 md:gap-12 overflow-hidden relative"
          ref={counterRef}
        >
          <Counter className='counter' end={250} suffix="k" label="Hours of Work" startCount={inView} duration={2} />
          <Counter className='counter' end={136} suffix="+" label="Projects Done" startCount={inView} duration={2} />
          <Counter className='counter' end={100} suffix="%" label="Client Satisfaction" startCount={inView} duration={2} />
        </div>
      </div>
      <div className="wrapper about_section_wrapper" style={{zIndex:"9", position:"absolute", bottom: 0, width:"95%"}}></div>
        </section>
      </div>
    </>
  )
}

export default AboutSection