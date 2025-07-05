import React, { useRef, useLayoutEffect, useState, useEffect } from 'react'
import { Link } from 'react-router'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/scrollbar'
import { Scrollbar } from 'swiper/modules'
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react'

const productsSlides = [
  [
    {
      img: "/images/running.jpeg",
      alt: "Sports Vinyl",
      // link: "/sports/athletics",
      label: "Sports Vinyl"
    },
    {
      img: "/images/basketball.jpeg",
      alt: "Commercial Vinyl",
      // link: "/sports/basketball",
      label: "Commercial Vinyl"
    },
    {
      img: "/images/basketball.jpeg",
      alt: "Wooden Flooring",
      // link: "/sports/baseball",
      label: "Wooden Flooring"
    },
    
  ],
  [
    {
      img: "/images/consultation_bg.jpeg",
      alt: "Synthetic Flooring",
      // link: "/sports/playarea",
      label: "Synthetic Flooring"
    },
    {
      img: "/images/basketball.jpeg",
      alt: "Kids Play Area",
      // link: "/sports/basketball",
      label: "Kids Play Area"
    },
    {
      img: "/images/running.jpeg",
      alt: "PU Sports Flooring",
      // link: "/sports/athletics",
      label: "PU Sports Flooring"
    },
  ],
  [
    {
      img: "/images/basketball.jpeg",
      alt: "Football Turf",
      // link: "/sports/basketball",
      label: "Football Turf"
    },
    {
      img: "/images/consultation_bg.jpeg",
      alt: "Futsal Turf",
      // link: "/sports/playarea",
      label: "Futsal Turf"
    },
    {
      img: "/images/running.jpeg",
      alt: "Rubber Flooring",
      // link: "/sports/athletics",
      label: "Rubber Flooring"
    },
  ],
  [
    {
      img: "/images/basketball.jpeg",
      alt: "Athletic Track",
      // link: "/sports/basketball",
      label: "Athletic Track"
    },
    {
      img: "/images/consultation_bg.jpeg",
      alt: "Landscaping Turf",
      // link: "/sports/playarea",
      label: "Landscaping Turf"
    },
    {
      img: "/images/running.jpeg",
      alt: "PP tiles",
      // link: "/sports/athletics",
      label: "PP tiles"
    },
  ],
  [
    {
      img: "/images/basketball.jpeg",
      alt: "Mafil Wood Flooring",
      // link: "/sports/basketball",
      label: "Mafil Wood Flooring"
    },
    {
      img: "/images/consultation_bg.jpeg",
      alt: "Nylan Brided Net",
      // link: "/sports/playarea",
      label: "Nylan Brided Net"
    },
    {
      img: "/images/running.jpeg",
      alt: "PP Tiles Interlocking System",
      // link: "/sports/athletics",
      label: "PP Tiles Interlocking System"
    },
  ],
]

const sportsSlides = [
  [
    {
      img: "/images/running.jpeg",
      alt: "Athletics & Jogging",
      // link: "/sports/athletics",
      label: "Athletics & Jogging"
    },
    {
      img: "/images/basketball.jpeg",
      alt: "Basketball Court",
      // link: "/sports/basketball",
      label: "Basketball Court"
    },
    {
      img: "/images/basketball.jpeg",
      alt: "Baseball Grounds",
      // link: "/sports/baseball",
      label: "Baseball Grounds"
    },
    
  ],
  [
    {
      img: "/images/consultation_bg.jpeg",
      alt: "Children Play Area",
      // link: "/sports/playarea",
      label: "Children Play Area"
    },
    {
      img: "/images/basketball.jpeg",
      alt: "Basketball Court",
      // link: "/sports/basketball",
      label: "Basketball Court"
    },
    {
      img: "/images/running.jpeg",
      alt: "Athletics & Jogging",
      // link: "/sports/athletics",
      label: "Athletics & Jogging"
    },
  ],
  [
    {
      img: "/images/basketball.jpeg",
      alt: "Basketball Court",
      // link: "/sports/basketball",
      label: "Basketball Court"
    },
    {
      img: "/images/consultation_bg.jpeg",
      alt: "Children Play Area",
      // link: "/sports/playarea",
      label: "Children Play Area"
    },
    {
      img: "/images/running.jpeg",
      alt: "Athletics & Jogging",
      // link: "/sports/athletics",
      label: "Athletics & Jogging"
    },
  ],
]

const Header = () => {
  const navLinksRef = useRef(null)
  const [dropdownWidth, setDropdownWidth] = useState(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileDropdown, setMobileDropdown] = useState(null)
  const swiperRef = useRef(null)

  // State for navbar opacity, blur, and translateY
  const [navbarOpacity, setNavbarOpacity] = useState(1)
  const [navbarBlur, setNavbarBlur] = useState(false)
  const [navbarTranslateY, setNavbarTranslateY] = useState(0)
  const lastScrollY = useRef(0)
  const [scrollDirection, setScrollDirection] = useState('up')

  useLayoutEffect(() => {
    if (navLinksRef.current) {
      setDropdownWidth(navLinksRef.current.offsetWidth)
    }
    const handleResize = () => {
      if (navLinksRef.current) {
        setDropdownWidth(navLinksRef.current.offsetWidth)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Scroll effect: navbar goes up on scroll down, comes back on scroll up, blur before reach to the top, opacity 0 on scroll down, 1 on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      // Blur when scrolled more than 10px
      setNavbarBlur(scrollY > 10)

      // Detect scroll direction
      if (scrollY > lastScrollY.current) {
        setScrollDirection('down')
      } else if (scrollY < lastScrollY.current) {
        setScrollDirection('up')
      }
      lastScrollY.current = scrollY

      // Navbar translateY: goes up on scroll down, comes back on scroll up
      if (scrollY > 30 && scrollDirection === 'down') {
        setNavbarTranslateY(-100) // hide
      } else {
        setNavbarTranslateY(0) // show
      }

      // Opacity: 
      // - If scrolling down, fade out (0 after 100px)
      // - If scrolling up, always 1
      if (scrollDirection === 'down') {
        let opacity = 1
        if (scrollY > 0 && scrollY < 100) {
          opacity = 1 - scrollY / 100
        } else if (scrollY >= 100) {
          opacity = 0
        }
        setNavbarOpacity(opacity)
      } else {
        setNavbarOpacity(1)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollDirection])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
    setActiveDropdown(null)
    setMobileDropdown(null)
  }

  // New: open dropdown on focus or mouse enter, close on blur or mouse leave
  const openDropdown = (dropdown) => setActiveDropdown(dropdown)
  const closeDropdown = (dropdown) => {
    // Only close if the dropdown is the one being closed
    if (activeDropdown === dropdown) setActiveDropdown(null)
  }
  // Toggle for click (keyboard accessibility)
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  // Handler to close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
    setMobileDropdown(null)
  }

  // Mobile dropdown toggle
  const handleMobileDropdown = (dropdown) => {
    setMobileDropdown(mobileDropdown === dropdown ? null : dropdown)
  }

  // Helper for keyboard navigation: open on Enter/Space
  const handleDropdownKeyDown = (e, dropdown) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleDropdown(dropdown)
    }
    // Optionally: close on Escape
    if (e.key === 'Escape') {
      setActiveDropdown(null)
    }
  }

  return (
    <>
      <nav
        className={`w-full h-auto flex items-center justify-between fixed left-0 lg:left-1/2 lg:-translate-x-1/2 top-0 z-50 px-4 transition-all duration-300`}
        style={{
          opacity: navbarOpacity,
          backdropFilter: navbarBlur ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: navbarBlur ? 'blur(12px)' : 'none',
          willChange: 'opacity,backdrop-filter,transform',
          transform: `translateY(${navbarTranslateY}px)`
        }}
      >
        <div className="nav_logo w-35 z-50">
          <Link to='/'>
            <img src="/images/logo.png" alt="logo" className="w-full h-auto" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="nav_links hidden lg:block w-[50%] relative text-center" ref={navLinksRef}>
          <ul className='inline-flex gap-3'>
            <li>  
              <Link to='/' className="">Home</Link>
            </li>
            <li>
              <Link to='/' className="">About Us</Link>
            </li>
            {/* Products Dropdown */}
            <li
              className='sports-parent relative'
              onMouseEnter={() => openDropdown('products')}
              onMouseLeave={() => closeDropdown('products')}
            >
              <div
                className="inline-block cursor-pointer"
                tabIndex={0}
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'products'}
                onClick={() => toggleDropdown('products')}
                onFocus={() => openDropdown('products')}
                onBlur={(e) => {
                  // Only close if focus moves outside the dropdown
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    closeDropdown('products')
                  }
                }}
                onKeyDown={e => handleDropdownKeyDown(e, 'products')}
                role="button"
              >
                <Link
                  // to='/products'
                  className='flex items-center p-0 justify-center'
                  tabIndex={-1}
                  aria-label="Products"
                >
                  products <ChevronDown size={15}/>
                </Link>
              </div>
              <ul
                className={`sports-dropdown absolute top-full z-10 w-[50%] bg-white shadow-lg rounded-md mt-2 transition-all duration-200 ${activeDropdown === 'products' ? 'content' : 'hidden'}`}
                id='dropdown_one'
                style={dropdownWidth ? { width: dropdownWidth } : {}}
                tabIndex={-1}
                aria-label="Products submenu"
                onMouseEnter={() => openDropdown('products')}
                onMouseLeave={() => closeDropdown('products')}
              >
                <li>
                  <div className="relative">
                  <Swiper
                      modules={[Scrollbar]}
                      spaceBetween={7}
                      slidesPerView={1}
                      scrollbar={{ draggable: true }}
                      style={{ width: "100%" }}
                      className="sports-swiper"
                      onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                      onSwiper={(swiper) => {
                        swiperRef.current = { swiper }
                      }}
                    >
                      {productsSlides.map((slide, idx) => (
                        <SwiperSlide key={idx}>
                          <div className="flex justify-evenly gap-2 align-center">
                            {slide.map((product, i) => (
                              <div className='flex flex-col w-1/2 items-center p-2' key={i}>
                                  <Link to={product.link}>
                                    <div className="relative img_hover overflow-hidden">
                                      <div className="img_overlay"></div>
                                      <img src={product.img} alt={product.alt} className="w-full h-full object-cover rounded-md mb-2" />
                                      <div className="img_content absolute overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <p className="text-sm text-center rounded-full flex items-center"> <span> <ChevronRight size={15} /></span> <span>{product.label}</span></p>
                                      </div>
                                    </div>
                                  </Link>
                              </div>
                            ))}
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </li>
              </ul>
            </li>
            {/* Sports Dropdown */}
            <li
              className='sports-parent relative'
              onMouseEnter={() => openDropdown('sports')}
              onMouseLeave={() => closeDropdown('sports')}
            >
              <div
                className="inline-block cursor-pointer"
                tabIndex={0}
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'sports'}
                onClick={() => toggleDropdown('sports')}
                onFocus={() => openDropdown('sports')}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    closeDropdown('sports')
                  }
                }}
                onKeyDown={e => handleDropdownKeyDown(e, 'sports')}
                role="button"
              >
                <Link
                  // to='/sports'
                  className='flex items-center p-0 justify-center'
                  tabIndex={-1}
                  aria-label="Sports"
                >
                  Sports <ChevronDown size={15}/>
                </Link>
              </div>
              <ul
                className={`sports-dropdown absolute sports_categories left-0 top-full z-10 bg-white shadow-lg rounded-md mt-2 transition-all duration-200 ${activeDropdown === 'sports' ? 'content' : 'hidden'}`}
                id='dropdown_two'
                style={dropdownWidth ? { width: dropdownWidth } : {}}
                tabIndex={-1}
                aria-label="Sports submenu"
                onMouseEnter={() => openDropdown('sports')}
                onMouseLeave={() => closeDropdown('sports')}
              >
                <li>
                  <div className="relative">
                    <Swiper
                      modules={[Scrollbar]}
                      spaceBetween={7}
                      slidesPerView={1}
                      scrollbar={{ draggable: true }}
                      style={{ width: "100%" }}
                      className="sports-swiper"
                      onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                      onSwiper={(swiper) => {
                        swiperRef.current = { swiper }
                      }}
                    >
                      {sportsSlides.map((slide, idx) => (
                        <SwiperSlide key={idx}>
                          <div className="flex justify-evenly gap-2 align-center">
                            {slide.map((sport, i) => (
                              <div className='flex flex-col w-1/2 items-center p-2' key={i}>
                                  <Link to={sport.link}>
                                    <div className="relative img_hover overflow-hidden">
                                      <div className="img_overlay"></div>
                                      <img src={sport.img} alt={sport.alt} className="w-full h-full object-cover rounded-md mb-2" />
                                      <div className="img_content absolute overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <p className="text-sm text-center rounded-full flex items-center"> <span> <ChevronRight size={15} /></span> <span>{sport.label}</span></p>
                                      </div>
                                    </div>
                                  </Link>
                              </div>
                            ))}
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/'>Clients</Link>
            </li>
            <li>
              <Link to='/'>Services</Link>
            </li>
            <li>
              <Link to='/'>Projects</Link>
            </li>
            <li>
              <Link to='/'>Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed top-0 left-0 w-full h-screen mob_nav_bg transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-70 pointer-events-auto backdrop-blur-lg z-[99]' : 'opacity-0 pointer-events-none'}`}
          onClick={toggleMobileMenu}
        ></div>
        <div
          className={`fixed top-0 right-0 h-full w-4/5 max-w-xs mobile_nav backdrop-blur-md bg-opacity-25 z-[99] shadow-lg transition-transform duration-300 ease-in-out
            ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
          style={{ minHeight: '100vh' }}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-4 py-4 border-b bg-black rounded-lg overflow-hidden">
              <img src="/images/logo.png" alt="logo" className="w-24 h-auto mob_logo" />
              <button
                className="w-8 h-8 flex items-center justify-center focus:outline-none close_menu"
                onClick={toggleMobileMenu}
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>
            <ul className="flex flex-col gap-2 px-6 py-6 text-lg font-medium mt-[1rem!important]">
              <li>
                <Link to='/' onClick={handleLinkClick} className="block py-2">Home</Link>
              </li>
              <li>
                <Link to='/' onClick={handleLinkClick} className="block py-2">About Us</Link>
              </li>
              <li>
                <button
                  className="flex items-center w-full py-2 focus:outline-none"
                  onClick={() => handleMobileDropdown('products')}
                >
                  Products
                  <ChevronDown size={18} className={`ml-2 transition-transform ${mobileDropdown === 'products' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${mobileDropdown === 'products' ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <Swiper
                    modules={[Scrollbar]}
                    spaceBetween={7}
                    slidesPerView={1}
                    scrollbar={{ draggable: true }}
                    style={{ width: "100%" }}
                    className="sports-swiper py-2"
                  >
                    {productsSlides.map((slide, idx) => (
                      <SwiperSlide key={idx}>
                        <div className="flex flex-col gap-2">
                          {slide.map((product, i) => (
                            <Link to={product.link} key={i} onClick={handleLinkClick} className="flex items-center gap-2 py-2">
                              <img src={product.img} alt={product.alt} className="w-12 h-12 object-cover rounded-md" />
                              <span className="flex items-center gap-1 text-base">
                                <ChevronRight size={15} />
                                {product.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </li>
              <li>
                <button
                  className="flex items-center w-full py-2 focus:outline-none"
                  onClick={() => handleMobileDropdown('sports')}
                >
                  Sports
                  <ChevronDown size={18} className={`ml-2 transition-transform ${mobileDropdown === 'sports' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${mobileDropdown === 'sports' ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <Swiper
                    modules={[Scrollbar]}
                    spaceBetween={7}
                    slidesPerView={1}
                    scrollbar={{ draggable: true }}
                    style={{ width: "100%" }}
                    className="sports-swiper py-2"
                  >
                    {sportsSlides.map((slide, idx) => (
                      <SwiperSlide key={idx}>
                        <div className="flex flex-col gap-2">
                          {slide.map((sport, i) => (
                            <Link to={sport.link} key={i} onClick={handleLinkClick} className="flex items-center gap-2 py-2">
                              <img src={sport.img} alt={sport.alt} className="w-12 h-12 object-cover rounded-md" />
                              <span className="flex items-center gap-1 text-base">
                                <ChevronRight size={15} />
                                {sport.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </li>
              <li>
                <Link to='/' onClick={handleLinkClick} className="block py-2">Clients</Link>
              </li>
              <li>
                <Link to='/' onClick={handleLinkClick} className="block py-2">Services</Link>
              </li>
              <li>
                <Link to='/' onClick={handleLinkClick} className="block py-2">Projects</Link>
              </li>
              <li>
                <Link to='/' onClick={handleLinkClick} className="block py-2">Contact Us</Link>
              </li>
            </ul>
            {/* <div className="flex gap-4 px-6 pb-6 mt-auto">
              <Link to='/contact' className='rounded-full' onClick={handleLinkClick}>
                <div className='enquire'>
                  <img src="/images/icons/enquire.png" alt="Enquire icon" />
                </div>
              </Link>
              <a href="tel:+919647612345" onClick={handleLinkClick}>
                <div className='phone'>
                  <img src="/images/icons/phone.png" alt="Phone icon" />
                </div>
              </a>
            </div> */}
          </div>
        </div>

        <div className="nav_icons gap-4 z-50">
          <Link to='/' className='rounded-full'>
            <div className='enquire'>
              <img src="/images/icons/enquire.png" alt="Enquire icon" />
            </div>
          </Link>
          <a href="tel:+919647612345">
            <div className='phone'>
              <img src="/images/icons/phone.png" alt="Phone icon" />
            </div>
          </a>
        </div>
        {/* Hamburger Icon for Mobile */}
        
        <button
          className="lg:hidden z-50 relative w-10 h-10 flex items-center justify-center focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {/* Hamburger/Cross Animation */}
          <div className='flex items-center justify-center'>
          <span className="block relative w-7 h-10">
            <span
              className={`absolute left-0 top-2 w-8 h-[3px] toggle rounded transition-all duration-300
                ${isMobileMenuOpen ? 'translate-x-2 top-3 opacity-0' : ''}
              `}
            ></span>
            <span
              className={`absolute left-0 top-5 w-8 h-[3px] toggle rounded transition-all duration-300
                ${isMobileMenuOpen ? 'opacity-0' : ''}
              `}
            ></span>
            <span
              className={`absolute left-0 top-8 w-8 h-[3px] toggle rounded transition-all duration-300
                ${isMobileMenuOpen ? '-translate-x-2 top-3 opacity-0' : ''}
              `}
            ></span>
          </span>
        </div>
        </button>
      </nav>
    </>
  )
}

export default Header