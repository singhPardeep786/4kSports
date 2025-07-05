import React, { useState, useRef, useEffect } from 'react';
import 'lightbox2/dist/css/lightbox.min.css';
import 'lightbox2/dist/js/lightbox-plus-jquery.min.js';

const faqData = [
  {
    question: "What are the brands and quality of products?",
    answer: "We have imported brands and best in quality products. Call us for more information and get a quote."
  },
  {
    question: "What is the pricing range?",
    answer: "The pricing range varies with the quantity, quality, size of the area, and material. Call us for inquiries & detailed information."
  },
  {
    question: "What is the warranty and warranty period?",
    answer: "Depending on the requirement, you get the warranty along with the quotation."
  },
  {
    question: "What is the work duration for a project?",
    answer: "4kSports provides quick & swift services. The period varies according to the requirement."
  },
  {
    question: "Name all the sports infrastructure services.",
    img: "/images/product_table.jpg"
  }
];

const PlusMinusIcon = ({ isOpen }) => (
  <span
    style={{
      display: "inline-block",
      width: "1em",
      height: "1em",
      position: "relative",
      marginLeft: "1rem",
      verticalAlign: "middle"
    }}
    aria-hidden="true"
  >
    <span
      style={{
        position: "absolute",
        top: "50%",
        left: "0",
        width: "100%",
        height: "3px",
        background: "var(--black)",
        borderRadius: "2px",
        transform: "translateY(-50%)",
        transition: "background 0.3s"
      }}
    />
    <span
      style={{
        position: "absolute",
        left: "50%",
        top: "0",
        width: "0.2em",
        height: "100%",
        background: "var(--black)",
        borderRadius: "2px",
        transform: isOpen
          ? "translateX(-50%) rotate(90deg)"
          : "translateX(-50%) rotate(0deg)",
        transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)"
      }}
    />
  </span>
);

const AccordionItem = ({ faq, isOpen, onClick, showImg }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen, faq.answer, faq.img]);

  useEffect(() => {
    if (!isOpen) return;
    const handleResize = () => {
      if (contentRef.current) {
        setHeight(contentRef.current.scrollHeight);
      }
    };
    window.addEventListener('resize', handleResize);
    let observer;
    if (contentRef.current && window.ResizeObserver) {
      observer = new window.ResizeObserver(() => {
        setHeight(contentRef.current.scrollHeight);
      });
      observer.observe(contentRef.current);
    }
    return () => {
      window.removeEventListener('resize', handleResize);
      if (observer && contentRef.current) observer.disconnect();
    };
  }, [isOpen, faq.answer, faq.img]);

  return (
    <div
      className="faq_accordion_item"
      style={{
        background: isOpen ? "var(--maincolor)" : "var(--green)",
        boxShadow: isOpen ? "0 4px 16px 0 rgba(0,0,0,0.07)" : "none",
        transition: "background 0.4s, box-shadow 0.4s",
      }}
    >
      <button
        className="faq_accordion_question"
        onClick={onClick}
        aria-expanded={isOpen}
        type="button"
      >
        <span>{faq.question}</span>
        <PlusMinusIcon isOpen={isOpen} />
      </button>
      <div
        className="faq_accordion_answer"
        style={{
          maxHeight: isOpen ? `${height}px` : "0px",
          height: isOpen ? `${height}px` : "0px",
          overflow: "hidden",
          transition: "max-height 0.5s cubic-bezier(0.4,0,0.2,1), height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.5s cubic-bezier(0.4,0,0.2,1), padding 0.4s",
          opacity: isOpen ? 1 : 0,
          padding: isOpen ? "0.5rem 0 2.5rem 0.8rem" : "0 0",
          background: "var(--white)",
        }}
        aria-hidden={!isOpen}
      >
        <div ref={contentRef} style={{ transition: "color 0.3s" }}>
          {faq.answer}
          {showImg && faq.img && (
            <div style={{ margin: "1.5rem 0", textAlign: "center" }}>
              {/* Use Lightbox2 anchor for image */}
              <a
                href={faq.img}
                data-lightbox="faq-images"
                data-title="Product Table"
                style={{ display: 'inline-block' }}
                tabIndex={0}
                aria-label="Open image in lightbox"
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    // Simulate click for accessibility
                    e.target.click();
                  }
                }}
              >
                <img
                  src={faq.img}
                  alt="Product Table"
                  style={{
                    maxWidth: "100%",
                    borderRadius: "0.5rem",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    width: '40%',
                    margin: '0 auto 3.5rem auto',
                    display: 'block',
                    cursor: 'zoom-in'
                  }}
                  role="button"
                />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = idx => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  // Lightbox2 is jQuery-based and expects DOM elements to be present.
  // We need to ensure it's initialized after mount and when images are rendered.
  useEffect(() => {
    // eslint-disable-next-line no-undef
    if (window.lightbox && window.lightbox.init) {
      // Re-initialize lightbox to pick up new DOM
      window.lightbox.init();
    }
  }, [openIndex]);

  return (
    <>
      <section className='wrapper'>
        <div className="banner_bottom" style={{ margin: "2rem auto 1rem auto" }}></div>
        <h2 className="case_study_heading">Have a Question?</h2>
        <div className="faq_section">
          <div className="faq_content">
            {faqData.map((faq, idx) => (
              <AccordionItem
                key={idx}
                faq={faq}
                isOpen={openIndex === idx}
                onClick={() => handleAccordionClick(idx)}
                showImg={!!faq.img}
              />
            ))}
          </div>
        </div>
        <div className="about_section_wrapper" style={{ margin: "3rem auto 0 auto" }}></div>
      </section>
    </>
  );
};

export default FAQs;