"use client";

import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";

import Cta from "@/components/common/Cta";
import About from "@/components/homes/home-1/About";
import AboutCta from "@/components/otherPages/AboutCta";     
import TextSlider from "@/components/homes/home-2/TextSlider";
import Testimonials from "@/components/homes/home-2/Testimonials";
import Skills from "@/components/homes/home-2/Skills";
import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";

// Note: In client components, we can't export metadata this way
// You'll need to handle this differently, such as with next-seo or a separate layout file
// export const metadata = {
//   title: "About || Expert Cybersecurity & Data Protection",
//   description: "EDGTEK provides expert cybersecurity solutions, including network protection, encrypted backups, and advanced security measures to safeguard your business from cyber threats.",
// 
//  /* about-me.lottie  
// 1738901666846.lottie 
// };

export default function Page() {
  return ( 
    <> 
    <title>About Us  || Expert Cybersecurity &amp; Data Protection</title>
      <HeaderTop />
      <Header1 />
      <main className="main position-relative" id="mains">
        <div className="breadcrumb-wrapper">
          <div
            className="breadcumb"
            data-bg-src=""
            style={{ backgroundImage: "url(/assets/img/hero/breadcumbBg.png)" }}
          >
            <div className="container">
              <div className="page-heading">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  About Us
                </h1>
                <ul
                  className="breadcrumb-items wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <li>
                    <Link scroll={false} href={`/`}>
                      {" "}
                      Home{" "}
                    </Link>
                  </li>
                  <li>
                    <i className="fas fa-chevrons-right" />
                  </li>
                  <li>About Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        

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
                    src="/assets/img/about-me.lottie"
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
                  {" "}
                    <span>
                      <Image
                        alt="icon"
                        src="/assets/img/icon/titleIcon.png"
                        width="28"
                        height="12"
                      />
                    </span>
                  </h5>
                  <h2 className="title text-start">About Me</h2>
                  <p className="text">
                  With nearly <strong>30 years</strong> in IT, I've seen how devastating security breaches can be for businesses in <strong>Arkansas</strong>. Before advanced cybersecurity solutions existed, I worked with companies that suffered system compromises. That experience drove me to stay ahead of evolving threats through continuous education and cutting-edge security strategies. Today, cyber threats are constant-every business needs the right protection.
                  </p>
 
<p className="text">At  <strong> EDGTEK </strong>, we provide trustworthy, dependable, and affordable IT security for businesses of all sizes. Cybersecurity isn't just IT support-it requires specialized protection. We work alongside your existing IT team to seamlessly enhance security without disruption. </p>
<div className="right-image">
<p className="text">Our proactive approach identifies vulnerabilities before they become threats. Let us strengthen your defenses-because cyber threats evolve daily, and the best time to prepare is now. </p>

<div className="imggg">
<img src="https://www.digitaledg.com/wp-content/uploads/2025/02/Kevin-Profile-Web.png" alt="" />

</div>

</div>
                   
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
                  <h2 className="title text-start">Our Mission & Values </h2>
                  <p className="text">
                  EDGTEK was founded with a clear mission: to provide enterprise-level cybersecurity solutions to businesses of all sizes. With over two decades in IT, we have witnessed the rapid evolution of technology and the devastating impact of cybersecurity breaches. Our goal is to ensure that every business—whether high-security or low-demand—has the protection it needs to stay secure.
                  </p>

                 

                  <p className="text">
                  At EDGTEK, trust is at the core of everything we do. We believe that cybersecurity requires more than just technology—it requires experts you can trust. Our team consists of dedicated tech professionals, not salespeople, who always act with your best interests in mind.
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

                <div className="profile-wrapper"></div>


              </div>
              <div
                className="about-content wow fadeInRight"
                data-wow-delay=".6s"
              >
                <div className="about-thumb-box about-thumb1">
                  <DotLottieReact
                   src="/assets/img/1738901666846.lottie"
                    loop
                    autoplay
                    style={{ width: '600px', height: '400px' }} 
                  />
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
          <div  className="container">
            <div className="about-wrapper style1">
              <div
                className="about-thumb-box wow fadeInLeft"
                data-wow-delay=".4s"
              >
               
                <div className="about-thumb-box about-thumb1">
                  <DotLottieReact
                   style={{ width: '600px', height: '400px' }} 
                     src="/assets/img/1738902153316.lottie"
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
                  {" "}
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


        








      </section>{" "}


      
        <AboutCta />
        <TextSlider />     
       
        <div className="pb-300"></div>

        <Cta />
      </main>
      <Footer1 />
    </>
  );
}