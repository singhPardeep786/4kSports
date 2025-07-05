import React from 'react'

const ClientsSection = () => {

    const clientLogo1 = [
        {
            img: "/images/client_logos/1.jpg",
        },
        {
            img: "/images/client_logos/2.jpg",
        },
        {
            img: "/images/client_logos/3.jpg",
        },
        {
            img: "/images/client_logos/4.jpg",
        },
        {
            img: "/images/client_logos/5.jpg",
        },
        {
            img: "/images/client_logos/6.jpg",
        },
        {
            img: "/images/client_logos/7.jpg",
        },
        {
            img: "/images/client_logos/8.jpg",
        },
        {
            img: "/images/client_logos/9.jpg",
        },
        {
            img: "/images/client_logos/10.jpg",
        },
        {
            img: "/images/client_logos/11.jpg",
        },
    ]

    const clientLogo2 = [
        {
            img: "/images/client_logos/12.jpg",
        },
        {
            img: "/images/client_logos/13.jpg",
        },
        {
            img: "/images/client_logos/14.jpg",
        },
        {
            img: "/images/client_logos/15.jpg",
        },
        {
            img: "/images/client_logos/16.jpg",
        },
        {
            img: "/images/client_logos/17.jpg",
        },
        {
            img: "/images/client_logos/18.jpg",
        },
        {
            img: "/images/client_logos/19.jpg",
        },
        {
            img: "/images/client_logos/20.jpg",
        },
        {
            img: "/images/client_logos/21.jpg",
        },
        {
            img: "/images/client_logos/22.jpg",
        },
    ]
    
  return (
    <>
        <section className='wrapper'>
            <div className="banner_bottom" style={{margin: "2rem auto 1rem auto"}}></div>
            <h2 className='our_clients_heading'>Our Clients</h2>
            <div className="clients_section">
                <div className="logo_main_first_box">
                    <div className="logo_move_box1">
                        {clientLogo1.map((logoDivOne, idx)=>(
                            <div key={idx} className="client_logo">
                                <img src={logoDivOne.img} alt="client logo" />
                            </div>
                        ))}
                        {clientLogo1.map((logoDivOne, idx)=>(
                            <div key={idx} className="client_logo">
                                <img src={logoDivOne.img} alt="client logo" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="logo_main_second_box">
                    <div className="logo_move_box2">
                        {clientLogo2.map((logoDivtwo, idx)=>(
                            <div key={idx} className="client_logo">
                                <img src={logoDivtwo.img} alt="client logo" />
                            </div>
                        ))}
                        {clientLogo2.map((logoDivtwo, idx)=>(
                            <div key={idx} className="client_logo">
                                <img src={logoDivtwo.img} alt="client logo" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        <div className="wrapper about_section_wrapper" style={{margin: " 2rem auto 0 auto"}}></div>
    </>
  )
}

export default ClientsSection