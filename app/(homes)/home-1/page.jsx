
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";
import About from "@/components/homes/home-1/About";
import Cta from "@/components/common/Cta";
import Facts from "@/components/homes/home-1/Facts";
import Image from "next/image"; 
import Hero from "@/components/homes/home-1/Hero";
import Process from "@/components/homes/home-1/Process";
import Services2 from "@/components/homes/home-1/Services2";
import TextSlider from "@/components/homes/home-2/TextSlider";
import Link from "next/link";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
export const metadata = {
  title: "Home 1 || Techbe-IT Solution & Technology Service Nextjs Template",
  description: "Techbe-IT Solution & Technology Service Nextjs Template",
};
export default function Home1() { 
  return (
    
    <>
     
      <HeaderTop />
      <Header1 />
      <main className="main position-relative" id="mains">
        <Hero />
        <About />
        
        <Services2 />


        <section style={{ paddingBottom: "0", }} className="about-area space fix position-reltive">
        <div className="about-wrap style1">
           
          
          <div  className="container">
            <div className="about-wrapper style2">
              <div
                className="about-thumb-box wow fadeInLeft"
                data-wow-delay=".4s"
              >
                <div className="about-thumb-box about-thumb1 service-dotted image-with-line">
                   <Image
                                    className="img-shine"
                                    src="/assets/img/service/serviceIcon2_1.jpg"
                                    width={270}
                                    height={160}
                                    alt="thumb"
                                  /> 
                </div>
              </div>
              <div
                className="about-content wow fadeInRight"
                data-wow-delay=".6s"
              >
                <div className="title-area">
                  
                  <h2 className="title text-start">Cybersecurity Solutions </h2>

                    <ul className="ul-dooted">
                      <li>24/7 Cyber Threat Monitoring</li>
                      <li>Advanced Endpoint Security </li>
                      <li>Network Protection & Firewall Management </li>
                      <li>Multi-Factor Authentication (MFA) Implementation </li>
                      <li>Secure Remote Access Solutions </li>
                      <li>Firewall & Intrusion Detection Systems (IDS/IPS) </li>
                    </ul>

              
 
                </div>

                 
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "60px", }} className="about-wrap style1">
           
         
          <div className="container">
            <div className="about-wrapper style2">

            <div
                className="about-content wow fadeInRight"
                data-wow-delay=".6s"
              >
                 <div className="title-area">
               
               <h2 className="title text-start">Compliance & Risk Management</h2>

<ul className="ul-dooted">
<li>SOC 2 Compliance Consulting</li>
<li>Cybersecurity Risk Assessments</li>
<li>Vendor & Third-Party Security Evaluations</li>
<li>Compliance & Regulatory Security Solutions</li>
<li>Data Protection & Encryption Policies</li>
</ul>
                 
                 
              </div>
               
                
                
              </div>

              <div
                className="about-thumb-box wow fadeInLeft"
                data-wow-delay=".4s"
              >
                 
                 <div className="title-area">
               
                 <div className="about-thumb-box about-thumb1 service-dotted image-with-line">
                <Image
                                    className="img-shine"
                                    src="/assets/img/service/a172ccbc05.jpg"
                                    width={270}
                                    height={160}
                                    alt="thumb"
                                  /> 
                </div>
                   
                  

                 
                </div>

                <div className="profile-wrapper"></div>


              </div>
              
            </div>
          </div>
        </div>


        <div style={{ marginTop: "40px", }}  className="about-wrap style1">
           
          
           <div  className="container">
             <div className="about-wrapper style2">
               <div
                 className="about-thumb-box wow fadeInLeft"
                 data-wow-delay=".4s"
               >
                 <div className="about-thumb-box about-thumb1 service-dotted image-with-line">
                 <Image
                                    className="img-shine"
                                    src="/assets/img/service/506afd8745.jpg"
                                    width={270}
                                    height={160}
                                    alt="thumb"
                                  /> 
                 </div>
               </div>
               <div
                 className="about-content wow fadeInRight"
                 data-wow-delay=".6s"
               >
                 <div className="title-area">
                   
                   <h2 className="title text-start">Disaster Recovery & Business Continuity </h2>
 
                     <ul className="ul-dooted">
                     <li>Data Backup & Disaster Recovery</li>
                     <li>Fully Managed IT Security Services</li>
                     <li>Business Continuity Planning</li>
                     <li>Backup & Disaster Recovery Strategy </li>
                     <li>Disaster Recovery Planning (DRP) </li>
                     <li>Business Continuity Strategy Development </li>
                     <li>Automated Backup & Data Restoration</li>
                     <li>Incident Response & Breach Mitigation </li>
                     </ul>
 
               
  
                 </div> 
 
                  
               </div>
             </div>
           </div>
         </div>
      </section>{" "}



        <TextSlider />    
        <Process />
     
        <Facts />
        <div style={{ marginTop: '30px', width: '100%', float: 'left', }} />
        <Cta />
      </main>
      <Footer1 />
    </>
  );
}
