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
                  <h2 className="title text-start">Who We Are</h2>
                  <p className="text">
                    <b>EDGTEK</b> protects businesses from cyber threats with
                    expert security solutions. Whether you need{" "}
                    <b>network protection, encrypted backups</b>, or an{" "}
                    <b>extra security</b> layer, we’ve got you covered.
                  </p>

                  <p className="text">
                    If you have an IT technician, we’ll work alongside them to
                    secure your systems. Nearly 50% of cyberattacks target small
                    businesses, and 60% shut down within six months after a
                    breach. We don’t want you to be a statistic.
                  </p>

                  <p className="text">
                    Need full network support? We provide end-to-end security to
                    keep your business safe. Let us handle security so you can
                    focus on growth.
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
                  <h2 className="title text-start">What We Do</h2>
                  <p className="text">
                  Cybersecurity isn’t optional—it’s essential. <b>EDGTEK</b> provides <b>proactive, comprehensive</b>
protection to keep your business secure and running smoothly. Cyber threats are constantly
evolving, and a single breach can lead to downtime, financial loss, and reputational damage. 
                  </p>

                  <p className="text">
                  We take a <b>strategic approach </b>to security, combining <b>advanced tools, industry expertise, and
continuous monitoring</b> to detect and prevent threats before they disrupt your business. Whether
you need to <b>fortify your network, secure your data</b>, or <b>enhance your existing IT defenses</b>, we
deliver customized solutions to keep your business protected. 
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
