import React, { useRef, useLayoutEffect, useState } from 'react'
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react'

const productsSlides = [
  [
    {
      img: "/images/running.jpeg",
      alt: "Sports Vinyl",
      link: "/sports/athletics",
      label: "Sports Vinyl"
    },
    {
      img: "/images/basketball.jpeg",
      alt: "Commercial Vinyl",
      link: "/sports/basketball",
      label: "Commercial Vinyl"
    },
    {
      img: "/images/basketball.jpeg",
      alt: "Wooden Flooring",
      link: "/sports/baseball",
      label: "Wooden Flooring"
    },
  ],
  [
    {
      img: "/images/kids_play_area/Kids Play Area and Outdoor Gym.jpg",
      alt: "Synthetic Flooring",
      link: "/sports/playarea",
      label: "Synthetic Flooring"
    },
    {
      img: "/images/basketball.jpeg",
      alt: "Kids Play Area",
      link: "/sports/basketball",
      label: "Kids Play Area"
    },
    {
      img: "/images/running.jpeg",
      alt: "PU Sports Flooring",
      link: "/sports/athletics",
      label: "PU Sports Flooring"
    },
  ],
  [
    {
      img: "/images/basketball.jpeg",
      alt: "Football Turf",
      link: "/sports/basketball",
      label: "Football Turf"
    },
    {
      img: "/images/kids_play_area/Kids Play Area and Outdoor Gym.jpg",
      alt: "Futsal Turf",
      link: "/sports/playarea",
      label: "Futsal Turf"
    },
    {
      img: "/images/running.jpeg",
      alt: "Rubber Flooring",
      link: "/sports/athletics",
      label: "Rubber Flooring"
    },
  ],
]

const sportsSlides = [
  [
    {
      img: "/images/running.jpeg",
      alt: "Athletics & Jogging",
      link: "/sports/athletics",
      label: "Athletics & Jogging"
    },
    {
      img: "/images/basketball.jpeg",
      alt: "Basketball Court",
      link: "/sports/basketball",
      label: "Basketball Court"
    },
    {
      img: "/images/basketball.jpeg",
      alt: "Baseball Grounds",
      link: "/sports/baseball",
      label: "Baseball Grounds"
    },
  ],
  [
    {
      img: "/images/kids_play_area/Kids Play Area and Outdoor Gym.jpg",
      alt: "Children Play Area",
      link: "/sports/playarea",
      label: "Children Play Area"
    },
    {
      img: "/images/basketball.jpeg",
      alt: "Basketball Court",
      link: "/sports/basketball",
      label: "Basketball Court"
    },
    {
      img: "/images/running.jpeg",
      alt: "Athletics & Jogging",
      link: "/sports/athletics",
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

  useLayoutEffect(() => {
    if (navLinksRef.current) {
      setDropdownWidth(navLinksRef.current.offsetWidth)
    }
    const handleResize = () => {
      if (navLinksRef.current) {
        setDropdownWidth(navLinksRef.current.offsetWidth)
      }
      // Close mobile menu on resize to desktop
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    setActiveDropdown(null)
  }

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const CustomSwiper = ({ slides, type }) => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    return (
      <div className="relative w-full">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, idx) => (
              <div key={idx} className="w-full flex-shrink-0">
                <div className="flex justify-evenly gap-2 items-center p-4">
                  {slide.map((item, i) => (
                    <div className='flex flex-col w-1/3 items-center p-2' key={i}>
                      <a href={item.link} className="block">
                        <div className="relative img_hover overflow-hidden group">
                          <div className="img_overlay absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                          <img 
                            src={`https://via.placeholder.com/150x100/7CAC26/ffffff?text=${encodeURIComponent(item.label)}`} 
                            alt={item.alt} 
                            className="w-full h-20 object-cover rounded-md mb-2" 
                          />
                          <div className="img_content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-xs text-white text-center rounded-full flex items-center">
                              <span><ChevronRight size={12} /></span>
                              <span>{item.label}</span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {slides.length > 1 && (
          <div className="flex justify-center mt-2 space-x-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === idx ? 'bg-green-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <>
      <style jsx>{`
        .hamburger-icon {
          transition: all 0.3s ease;
        }
        
        .hamburger-icon.active {
          transform: rotate(180deg);
        }
        
        .mobile-menu {
          transition: all 0.3s ease;
          transform: translateX(100%);
          opacity: 0;
        }
        
        .mobile-menu.active {
          transform: translateX(0);
          opacity: 1;
        }
        
        .dropdown-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
        }
        
        .dropdown-content.active {
          max-height: 500px;
          padding: 1rem 0;
        }
        
        .nav-link {
          position: relative;
          transition: color 0.3s ease;
        }
        
        .nav-link:hover {
          color: #7CAC26;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #7CAC26;
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        @media (max-width: 1023px) {
          .nav-link::after {
            display: none;
          }
        }
      `}</style>
      
      <nav className='w-full lg:w-[98%] h-auto flex items-center justify-between px-4 lg:px-3 fixed left-0 lg:left-1/2 lg:-translate-x-1/2 top-0 z-50 bg-white shadow-md'>
        {/* Logo */}
        <div className="nav_logo w-24 lg:w-35 flex-shrink-0">
          <img 
            src="https://via.placeholder.com/120x40/7CAC26/ffffff?text=LOGO" 
            alt="logo" 
            className="w-full h-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex nav_links flex-1 relative text-center justify-center" ref={navLinksRef}>
          <ul className='inline-flex gap-6 items-center'>
            <li>
              <a href='/' className="nav-link">Home</a>
            </li>
            <li>
              <a href='/about' className="nav-link">About Us</a>
            </li>
            <li className='relative group'>
              <div className="inline-block">
                <a href='/products' className='nav-link flex items-center justify-center gap-1'>
                  Products <ChevronDown size={15} className="group-hover:rotate-180 transition-transform"/>
                </a>
              </div>
              <ul className='absolute left-0 top-full z-10 bg-white shadow-lg rounded-md mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300'
                  style={dropdownWidth ? { width: dropdownWidth } : {}}>
                <li>
                  <CustomSwiper slides={productsSlides} type="products" />
                </li>
              </ul>
            </li>
            <li className='relative group'>
              <div className="inline-block">
                <a href='/sports' className='nav-link flex items-center justify-center gap-1'>
                  Sports <ChevronDown size={15} className="group-hover:rotate-180 transition-transform"/>
                </a>
              </div>
              <ul className='absolute left-0 top-full z-10 bg-white shadow-lg rounded-md mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300'
                  style={dropdownWidth ? { width: dropdownWidth } : {}}>
                <li>
                  <CustomSwiper slides={sportsSlides} type="sports" />
                </li>
              </ul>
            </li>
            <li>
              <a href='/clients' className="nav-link">Clients</a>
            </li>
            <li>
              <a href='/services' className="nav-link">Services</a>
            </li>
            <li>
              <a href='/projects' className="nav-link">Projects</a>
            </li>
            <li>
              <a href='/contact' className="nav-link">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Action Icons */}
        <div className="nav_icons flex items-center gap-3 flex-shrink-0">
          <a href='/contact' className='hidden sm:block'>
            <div className='enquire w-8 h-8 lg:w-10 lg:h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors'>
              <span className="text-white text-xs lg:text-sm">?</span>
            </div>
          </a>
          <a href="tel:+919647612345" className='hidden sm:block'>
            <div className='phone w-8 h-8 lg:w-10 lg:h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors'>
              <span className="text-white text-xs lg:text-sm">📞</span>
            </div>
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden hamburger-icon p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-gray-700" />
            ) : (
              <Menu size={24} className="text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
            onClick={toggleMobileMenu}
          ></div>
        )}

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''} fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-lg lg:hidden z-50 overflow-y-auto`}>
          <div className="p-4">
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b">
              <img 
                src="https://via.placeholder.com/100x30/7CAC26/ffffff?text=LOGO" 
                alt="logo" 
                className="h-8"
              />
              <button 
                onClick={toggleMobileMenu}
                className="p-2"
                aria-label="Close menu"
              >
                <X size={24} className="text-gray-700" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <ul className='space-y-4'>
              <li>
                <a href='/' className="block py-2 text-gray-700 hover:text-green-600">Home</a>
              </li>
              <li>
                <a href='/about' className="block py-2 text-gray-700 hover:text-green-600">About Us</a>
              </li>
              <li>
                <div>
                  <button 
                    onClick={() => toggleDropdown('products')}
                    className='w-full flex items-center justify-between py-2 text-gray-700 hover:text-green-600'
                  >
                    Products 
                    <ChevronDown 
                      size={15} 
                      className={`transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div className={`dropdown-content ${activeDropdown === 'products' ? 'active' : ''} ml-4`}>
                    <div className="space-y-2">
                      {productsSlides.flat().map((product, idx) => (
                        <a 
                          key={idx}
                          href={product.link} 
                          className="block py-1 text-sm text-gray-600 hover:text-green-600"
                        >
                          {product.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <button 
                    onClick={() => toggleDropdown('sports')}
                    className='w-full flex items-center justify-between py-2 text-gray-700 hover:text-green-600'
                  >
                    Sports 
                    <ChevronDown 
                      size={15} 
                      className={`transition-transform ${activeDropdown === 'sports' ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div className={`dropdown-content ${activeDropdown === 'sports' ? 'active' : ''} ml-4`}>
                    <div className="space-y-2">
                      {sportsSlides.flat().map((sport, idx) => (
                        <a 
                          key={idx}
                          href={sport.link} 
                          className="block py-1 text-sm text-gray-600 hover:text-green-600"
                        >
                          {sport.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href='/clients' className="block py-2 text-gray-700 hover:text-green-600">Clients</a>
              </li>
              <li>
                <a href='/services' className="block py-2 text-gray-700 hover:text-green-600">Services</a>
              </li>
              <li>
                <a href='/projects' className="block py-2 text-gray-700 hover:text-green-600">Projects</a>
              </li>
              <li>
                <a href='/contact' className="block py-2 text-gray-700 hover:text-green-600">Contact Us</a>
              </li>
            </ul>

            {/* Mobile Action Buttons */}
            <div className="mt-8 pt-6 border-t space-y-3">
              <a href='/contact' className='block'>
                <div className='w-full bg-green-600 text-white text-center py-3 rounded-lg hover:bg-green-700 transition-colors'>
                  Enquire Now
                </div>
              </a>
              <a href="tel:+919647612345" className='block'>
                <div className='w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors'>
                  Call Us: +91 96476 12345
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header