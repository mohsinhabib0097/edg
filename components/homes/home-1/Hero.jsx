"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules"; // Import Navigation
import { slidesData } from "@/data/heroSlides";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-1" id="hero">
      <Swiper
        className="swiper gt-slider hero-slider1 swiper-fade swiper-initialized swiper-horizontal swiper-autoheight swiper-watch-progress swiper-backface-hidden"
        id="heroSlide1"
        modules={[EffectFade, Autoplay, Navigation]} // Add Navigation module
        effect="fade"
        autoHeight
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{ nextEl: ".slider-next", prevEl: ".slider-prev" }} // Add navigation settings
      >
        {slidesData.map((slide) => (
          <SwiperSlide className="swiper-slide" key={slide.id}>
            <div className="hero-inner">
              <div
                className="gt-hero-bg"
                style={{ backgroundImage: `url(${slide.bgSrc})` }}
              />
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-8">
                    <div className="hero-style1">
                      <h6
                        className="hero-sub-title"
                        data-ani="slideindown"
                        data-ani-delay="0.2s"
                      >
                        <Image
                          className="me-1"
                          src={slide.titleIconSrc}
                          width={28}
                          height={12}
                          alt="icon"
                        />
                        {slide.subtitle}
                      </h6>
                      <h1 className="hero-title text-white">
                        <span
                          className="title1"
                          data-ani="slideindown"
                          data-ani-delay="0.3s"
                        >
                          {slide.title1}
                        </span>
                      </h1>
                      <Link
                        scroll={false}
                        href={`/our-service`}
                        className="gt-btn gt-btn-icon"
                        data-ani="slideinup"
                        data-ani-delay="0.6s"
                      >
                        EXPLORE MORE
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Fix: Ensure navigation buttons have correct classes */}
      <button className="slider-arrow style2 slider-prev">
        <Image
          alt="img"
          src="/assets/img/icon/arrowLeft.png"
          width="20"
          height="20"
        />
      </button>
      <button className="slider-arrow style2 slider-next">
        <Image
          alt="img"
          src="/assets/img/icon/arrowRight.png"
          width="20"
          height="20"
        />
      </button>

      <div className="scroll-down">
        <a href="#service-area" className="hero-scroll-wrap">
          <i className="fal fa-long-arrow-left" />
          Scroll
        </a>
      </div>
    </section>
  );
} 