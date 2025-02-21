"use client";
import { fancyBoxes } from "@/data/features";
import Link from "next/link";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function About() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="about-area space fix position-reltive">
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
          <div  className="container">
            <div className="about-wrapper style1">
              <div
                className="about-thumb-box wow fadeInLeft"
                data-wow-delay=".4s"
              >
                <div className="about-thumb-box about-thumb1">
                  <DotLottieReact
                   style={{ width: '600px', height: '400px' }} 
                    src="/assets/img/1738901666846.lottie"
                    loop
                    autoplay
                   
                  />
                </div>
              </div>
              <div
                className="about-content wow fadeInRight"
                data-wow-delay=".6s"
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
                    </span>{" "}
                    About EDG TEK{" "}
                    <span>
                      <Image
                        alt="icon"
                        src="/assets/img/icon/titleIcon.png"
                        width="28"
                        height="12"
                      />
                    </span>
                  </h5>
                  <h2 className="title text-start">Our Mission & Values</h2>
                  <p className="text">
                  EDGTEK was founded with a clear mission: to provide enterprise-level cybersecurity solutions to businesses of all sizes. With over two decades in IT, we have witnessed the rapid evolution of technology and the devastating impact of cybersecurity breaches. Our goal is to ensure that every business—whether high-security or low-demand—has the protection it needs to stay secure.
                  </p>

                  <p className="text">At EDGTEK, trust is at the core of everything we do. We believe that cybersecurity requires more than just technology—it requires experts you can trust. Our team consists of dedicated tech professionals, not salespeople, who always act with your best interests in mind.</p>

                   
                </div>

                <div className="profile-wrapper">
                  <Link
                    scroll={false}
                    href={`/contact`}
                    className="gt-btn gt-btn-icon"
                  >
                    GET IN TOUCH
                  </Link>
                  <div className="fancy-box style1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "60px", }} className="about-wrap style1">
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
                 
                 <div className="title-area">
                  <h5 className="subtitle text-start">
                    <span>
                      <Image
                        alt="icon"
                        src="/assets/img/icon/titleIcon.png"
                        width="28"
                        height="12"
                      />
                    </span>{" "}
                     
                    <span>
                      <Image
                        alt="icon"
                        src="/assets/img/icon/titleIcon.png"
                        width="28"
                        height="12"
                      />
                    </span>
                  </h5>
                  <h2 className="title text-start">Our Expertise & Commitment</h2>
                  <p className="text">
                  What sets EDGTEK apart is our commitment to providing the best security solutions without unnecessary upselling. We focus on honest, reliable service, ensuring that every client gets the protection they need.
                  </p>

                  <p className="text">
                  Our expertise lies in leveraging the best security tools available. We deploy cutting-edge software designed to detect and stop nearly all cyber threats. And for that rare 0.01% chance that an attack gets through, we implement encrypted backup solutions to guarantee data recovery and business continuity.
                  </p>

                  <p className="text">
                  Cyber threats are constantly evolving, and so are we. EDGTEK stays ahead by continuously refining our strategies, adopting the latest security technologies, and ensuring our clients remain protected in an ever-changing digital landscape.
                  </p>

                  

                 
                </div>

                <div className="profile-wrapper"></div>


              </div>
              <div
                className="about-content wow fadeInRight"
                data-wow-delay=".6s"
              >
                <div className="about-thumb-box about-thumb1">
                  <DotLottieReact
                    src="/assets/img/1738902153316.lottie"
                    loop
                    autoplay
                    style={{ width: '600px', height: '400px' }} 
                  />
                </div>
                
                
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="f2Gzr8sAGB8"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
