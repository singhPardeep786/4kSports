import React from 'react'
import Button from '../button/Button'

const CaseStudy = () => {

    const caseStudies = [
        {
            title: "Build Your",
            title2: "Multisport Arena",
            text: "4K Sports is all set to redefine sports for everyone with new infrastructure and new sports products on the checklist.",
        },
        {
            title: "Build Your",
            title2: "Tennis Court",
            text: "We design and construct premium tennis courts with durable surfaces like acrylic, clay, and grass and ensure quality play."
        },
        {
            title: "Build Your",
            title2: "Children's Ground",
            text: "A play area that has the right surface and all the games fitted properly for the safety and fun of children."
        },
    ]
    
  return (
    <>
        <section className='wrapper'>
        <div className="banner_bottom" style={{margin: "2rem auto 1rem auto"}}></div>
            <h2 className='case_study_heading'>Case Study</h2>
            <div className="case_study_section">
                {caseStudies.map((studies, idx) =>(
                    <div key={idx} className="case_studies_box">
                        <div className="case_studies_box_content">
                        <div className='content_headings'>
                            <h3>{studies.title}</h3>
                            <h3>{studies.title2}</h3>
                        </div>
                            <p>{studies.text}</p>
                            <Button
                            children='Get Quote'
                            className='get_quote'
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="about_section_wrapper" style={{margin: " 3rem auto 0 auto"}}></div>
        </section>
    </>
  )
}

export default CaseStudy