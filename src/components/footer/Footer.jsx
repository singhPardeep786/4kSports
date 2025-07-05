import React from 'react'

const Footer = () => {
  const footer = [
    {
      title: 'Address',
      text: 'Pathrika Nagar, Madhapur, HITEC City, Hyderabad, Telangana 500081'
    },
    {
      img: "/images/logo.png"
    },
    {
      title: 'Contact',
      tel: "+(91) 9647612345",
      mail: "Info@4ksports.in"
    },
  ]
  
  return (
    <>
      <footer>
        <section className='wrapper'>
          <div className="banner_bottom" style={{ margin: "2rem auto 1rem auto" }}></div>
          <div className="footer_section_main">
            <div className="footer_section">
              {/* Left: Address */}
              <div className="footer_content">
                <h3>{footer[0].title}</h3>
                <p>{footer[0].text}</p>
              </div>
              {/* Middle: Logo Image */}
              <div className="footer_content" style={{ textAlign: "center" }}>
                <img
                  src={footer[1].img}
                  alt="4K Sports Logo"
                />
              </div>
              {/* Right: Contact */}
              <div className="footer_content">
                <h3>{footer[2].title}</h3>
                <p>
                  <a href={`tel:${footer[2].tel}`} style={{ color: "inherit", textDecoration: "none" }}>
                    {footer[2].tel}
                  </a>
                  <br />
                  <a href={`mailto:${footer[2].mail}`} style={{ color: "inherit", textDecoration: "none" }}>
                    {footer[2].mail}
                  </a>
                </p>
              </div>
            </div>  
            <div className="copyright text-center">
              <p>&copy; All Rights Reserved by 4KSPORTS</p>
            </div>
          </div>
        </section>
      </footer>
    </>
  )
}

export default Footer