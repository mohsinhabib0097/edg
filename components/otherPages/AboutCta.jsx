"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
export default function AboutCta() {
  return (
    <div className="cta-area">
      <div
        className="cta-wrap style3 space fix"
        data-bg-src=""
        style={{ backgroundImage: "url(/assets/img/bg/ctaBg1_1.png)" }}
      >
        <div className="container">
          <div className="title-area mx-auto">
            <h5
              className="subtitle text-center wow fadeInUp"
              data-wow-delay=".3s"
            >
              <span>
                <Image
                  alt="icon"
                  src="/assets/img/icon/titleIcon.png"
                  width="28"
                  height="12"
                />
              </span>{' '}
              <span>
                <Image
                  alt="icon"
                  src="/assets/img/icon/titleIcon.png"
                  width="28"
                  height="12"
                />
              </span>
            </h5>
            <h2
              className="title text-center text-white mb-20 wow fadeInUp"
              data-wow-delay=".6s"
            >
              Why Choose EDGTEK?
            </h2>
            <center>
            <p style={{ color: "#fff" }}>At EDGTEK, we understand that every business has unique security needs. That’s why we tailor our solutions to fit your specific requirements—whether you need a fully managed security service or just key protective measures. We are committed to delivering enterprise-level cybersecurity without the enterprise price tag. </p></center>
          </div>
          <div
            className="btn-wrapper d-flex justify-content-center mx-auto wow fadeInUp"
            data-wow-delay=".9s"
          >
            <Link
              scroll={false}
              className="gt-btn gt-btn-icon"
              href={`/contact`}
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </div>
    
        <div className="about-wrap style1">
          <div className="shape1_1 d-xl-block d-none">
            <Image
              alt="shape"
              src="/assets/img/shape/aboutShape1_1.png"
              width="270"
              height="733"
            />
          </div>
          <div className="shape1_2 movingX d-xl-block d-none">
            <Image
              alt="shape"
              src="/assets/img/shape/aboutShape1_2.png"
              width="188"
              height="275"
            />
          </div>
          <div className="container">
            <div className="about-wrapper style1">
              <div
                className="about-thumb-box wow fadeInLeft"
                data-wow-delay=".4s"
              >
                <div style={{marginTop: "40px"}} className="about-thumb-box about-thumb1">
                      <DotLottieReact
                      src="/assets/img/1738902153316.lottie"
                      loop
                      autoplay  /> 
                </div>
               
                 
               
              </div>
              <div
                className="about-content wow fadeInRight"
                data-wow-delay=".6s" style={{marginTop: "60px"}}
              >
                <div className="title-area">
                  <h5 className="subtitle text-start">
                    <span>
                      <Image
                        alt="icon"
                        src="/assets/img/icon/titleIcon.png"
                        width="28"
                        height="12"
                      />
                    </span>{' '}
                    About EDG TEK{' '}
                    <span>
                      <Image
                        alt="icon"
                        src="/assets/img/icon/titleIcon.png"
                        width="28"
                        height="12"
                      />
                    </span>
                  </h5>
                  <h2 className="title text-start">
                  Our Customer-First Approach
                  </h2>
                  <p className="text">
                  We believe that cybersecurity should be straightforward and accessible. Our team takes the time to educate and empower our clients, ensuring they understand their security posture. With EDGTEK, you get a partner who prioritizes your business’s safety over making a sale.
                  </p>
                </div>
               
                <div className="profile-wrapper">
                  <Link
                    scroll={false}
                    href={`/contact`}
                    className="gt-btn gt-btn-icon"
                  >
                    GET IN TOUCH
                  </Link>
                  <div className="fancy-box style1">
                 
                     
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        

        
     
    </div>


 



  );
}
