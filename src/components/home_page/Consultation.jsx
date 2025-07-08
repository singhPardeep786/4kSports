import React from 'react'
import { Link } from 'react-router'
import Button from '../button/Button'

const Consultation = () => {
    
  return (
    <>
        <div className="consultation_section">
            <div className="wrapper banner_bottom"></div>
            <div className="consultation_section_bg">
                <section className='wrapper flex items-center justify-center'>
                    <div className="consultaion_content text-center">
                        <h2>Get a free <span className='text-[var(--maincolor)] font-semibold'> consultation </span></h2>
                        <p>We believe that Sports is an indispensable part of any system.</p>
                        <Link>
                            <Button
                                // children="Know More"
                                // icon={<MoveRight />}
                                className="mt-[1rem!important] btn_bg"
                            />
                        </Link>
                    </div>
                </section>
            </div>
            <div className="wrapper about_section_wrapper" style={{margin: "0 auto 0 auto"}}></div>
        </div>
    </>
  )
}

export default Consultation