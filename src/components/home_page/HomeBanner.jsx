import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from "framer-motion";

const bannerSlides = [
  {
    img: "/images/football/Footbal-Web_01.jpg",
    alt: "football img",
    className: "slide1",
  },
  {
    img: "/images/pickleball/Pickeball Court_01.jpg",
    alt: "pickleball court 1",
    className: "slide2",
  },
  {
    img: "/images/client_bg1.jpg",
    alt: "other slide",
    className: "slide3",
  },
];

const h2Texts = [
  "The Most ",
  "trusted ",
  "sports",
  "infra co."
];

const h2Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25 + i * 0.18,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const pVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25 + i * 0.18,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const HomeBanner = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Swiper navigation workaround for React
  }, []);

  return (
    <>

    <div className="relative banner_slides">
      <Swiper
        ref={swiperRef}
        modules={[Pagination, EffectFade, Autoplay, Navigation]}
        effect="fade"
        pagination={{
          clickable: true,
          el: ".custom-swiper-pagination",
          renderBullet: function (index, className) {
            const slideData = bannerSlides[index];
            if (!slideData) return '';
            const imgSrc = slideData.img;
            const alt = slideData.alt || `slide ${index + 1}`;
            return `<span class="custom-swiper-bullet ${className}" tabIndex="0" aria-label="Go to slide ${index + 1}">
              <img src="${imgSrc}" alt="${alt}" draggable="false" />
            </span>`;
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        speed={1200}
        className="mySwiper1"
        // autoplay={{
        //   delay: 2700,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: true,
        // }}
        loop={true}
      >
        {bannerSlides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex justify-center items-center gap-2 h-full w-full">
              <div className={slide.className}>
                <div className="banner_content1">
                  {h2Texts.map((text, i) => (
                    <motion.h2
                      className="capitalize"
                      key={i}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      variants={h2Variants}
                    >
                      {text}
                    </motion.h2>
                  ))}
                  <motion.p
                  className="mt-[-2rem]"
                  initial="hidden"
                  animate="visible"
                  variants={pVariants}
                  >4K Sports Company is India’s leading provider for Sports Infrastructure and supply installations in Schools, Colleges, Universities, Residential layouts, Farmhouses, IT Companies, etc.</motion.p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Pagination */}
        <div className="custom-swiper-pagination"></div>
      </Swiper>
    </div>
    <section className="wrapper banner_bottom"></section>
    </>
  );
};

export default HomeBanner;
