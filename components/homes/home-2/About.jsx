"use client";
import Link from "next/link";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import { useState } from "react";

export default function About() {
  const [isOpen, setOpen] = useState(false);
  return (

    <>
      
      <section className="about-area">
        <div
          className="about-wrap style2 space-top pb-233 fix fix position-reltive aboutbottomgap"
          data-bg-src=""
          style={{ backgroundImage: "url(/assets/img/bg/aboutBg2_1.png)" }}
        >
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
          <div id="proactive" className="container containerwrap">
            <div className="about-wrapper style2">
              <div
                className="about-thumb-box wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="about-thumb-box about-thumb1">
                  <Image
                    alt="thumb"
                    src="/assets/img/service/998f31dd9d.jpeg"
                    width="682"
                    height="561"
                  />
                </div>
                <div className="about-thumb-box line jump" />
              </div>
              <div
                className="about-content wow fadeInRight"
                data-wow-delay="1s"
              >
                <div className="title-area">
                  <h5 className="subtitle text-start">
                  </h5>
                  <h2 className="title text-start">
                  Proactive Cyber Defense
                  </h2>
                  <p className="text">
                  The cyber threat landscape is constantly changing. EDGTEK provides cutting-edge security
solutions, including: 

                  </p>
                </div>
                <div className="fancy-box-wrapper">
                  <div className="fancy-box">
                    <div className="checklist mt-0 mb-0">
                      <ul className="ps-0">
                        <li>
                        <Image
                            alt="icon"
                            src="/assets/img/icon/signIcon.png"
                            width="30"
                            height="30"
                          />
                        </li>
                        <li><strong>Real-time threat detection</strong> – Identifies and mitigates cyber threats as they occur</li>
                      </ul>
                      <ul className="ps-0">
                        <li>
                        <Image
                            alt="icon"
                            src="/assets/img/icon/signIcon.png"
                            width="30"
                            height="30"
                          />
                        </li>
                        <li><strong>Ransomware and malware prevention</strong> – Protects your systems from malicious
                        software attacks</li>
                      </ul>
                      <ul className="ps-0">
                        <li>
                        <Image
                            alt="icon"
                            src="/assets/img/icon/signIcon.png"
                            width="30"
                            height="30"
                          />
                        </li>
                        <li><strong>AI-driven attack mitigation</strong> – Uses artificial intelligence to predict and prevent cyber
                        attacks</li>
                      </ul>
                      <ul className="ps-0">
                        <li>
                        <Image
                            alt="icon"
                            src="/assets/img/icon/signIcon.png"
                            width="30"
                            height="30"
                          />
                        </li>
                        <li><strong>Security awareness training for employees</strong> – Educates staff to recognize and avoid
security risks. </li>
                      </ul>
                      <ul className="ps-0">
                        <li>
                        <Image
                            alt="icon"
                            src="/assets/img/icon/signIcon.png"
                            width="30"
                            height="30"
                          />
                        </li>
                        <li><strong>Email Security & Anti-Phishing Protection</strong> – Prevents unauthorized access and
                        phishing attempts via email. </li>
                      </ul>
                    </div>
                  </div>
                   
                </div>
                 
              </div>
            </div>
          </div>
          <span className="servicesspacer"></span>
          <div id="network" className="container containerwrap">
            <div className="about-wrapper style2">
            <div
                className="about-content wow fadeInLeft"
                data-wow-delay="1s"
              >
                <div className="title-area">
                  <h5 className="subtitle text-start">
                  </h5>
                  <h2 className="title text-start">
                  Network Security & Protection
                  </h2>
                  <p className="text">
                  Your network is your first line of defense. We offer: 
                  </p>
                </div>
                <div className="fancy-box-wrapper">
                  <div className="fancy-box">
                    <div className="checklist mt-0 mb-0">
                      <ul className="ps-0">
                        <li>
                        <Image
                            alt="icon"
                            src="/assets/img/icon/signIcon.png"
                            width="30"
                            height="30"
                          />
                        </li>
                        <li><strong>Intrusion detection and prevention</strong> – Identifies and blocks suspicious activities in realtime. </li>
                      </ul>
                      <ul className="ps-0">
                        <li>
                        <Image
                            alt="icon"
                            src="/assets/img/icon/signIcon.png"
                            width="30"
                            height="30"
                          />
                        </li>
                        <li><strong>Secure VPN setup & maintenance</strong> – Ensures safe and encrypted remote access to your
                        network.</li>
                      </ul>
                      <ul className="ps-0">
                        <li>
                        <Image
                            alt="icon"
                            src="/assets/img/icon/signIcon.png"
                            width="30"
                            height="30"
                          />
                        </li>
                        <li><strong>Firewall management</strong> – Monitors and controls incoming and outgoing network traffic</li>
                      </ul>
                      <ul className="ps-0">
                        <li>
                        <Image
                            alt="icon"
                            src="/assets/img/icon/signIcon.png"
                            width="30"
                            height="30"
                          />
                        </li>
                        <li><strong>Continuous monitoring & vulnerability assessments</strong> – Regularly scans and addresses
security weaknesses. </li>
                      </ul>
                      <ul className="ps-0">
                        <li>
                        <Image
                            alt="icon"
                            src="/assets/img/icon/signIcon.png"
                            width="30"
                            height="30"
                          />
                        </li>
                        <li><strong>Secure Wi-Fi Solutions & Zero Trust Networking</strong> – Protects wireless networks and
                        limits access based on strict verification. </li>
                      </ul>
                    </div>
                  </div>
                  
                </div>
                
              </div>
              <div
                className="about-thumb-box wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="about-thumb-box about-thumb1">
                  <Image
                    alt="thumb"
                  src="/assets/img/service/fee702c568.jpeg"
                    width="682"
                    height="561"
                  />
                </div>
                <div className="about-thumb-box line jump" />
              </div>
              
            </div>
          </div>
          <span className="servicesspacer"></span>
          <div id="endpoint" className="container containerwrap">
            <div className="about-wrapper style2">
              <div
                className="about-thumb-box wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="about-thumb-box about-thumb1">
                  <Image
                    alt="thumb"
                  src="/assets/img/service/a9dc83f8ab.jpeg"
                    width="682"
                    height="561"
                  />
                </div>
                <div className="about-thumb-box line jump" />
              </div>
              <div
                className="about-content wow fadeInRight"
                data-wow-delay="1s"
              >
                <div className="title-area">
                  <h5 className="subtitle text-start">
                  </h5>
                  <h2 className="title text-start">
                  Endpoint Protection & Device Security 
                  </h2>
                  <p className="text">
                  Each device connected to your network is a potential risk. Our services include: 
                  </p>
                </div>
                <div className="fancy-box-wrapper">
                  <div className="fancy-box">
                    <div className="checklist mt-0 mb-0">
                      <ul className="ps-0">
                        <li>
                        <Image
                            alt="icon"
                            src="/assets/img/icon/signIcon.png"
                            width="30"
                            height="30"
                          />
                        </li>
                        <li><strong>Advanced antivirus & anti-malware solutions</strong> – Provides real-time protection against
viruses and malware.</li>
                      </ul>
                      <ul className="ps-0">
                        <li>
                        <Image
                            alt="icon"
                            src="/assets/img/icon/signIcon.png"
                            width="30"
                            height="30"
                          />
                        </li>
                        <li><strong>Remote monitoring of all company devices</strong> – Tracks and manages security threats on
all connected devices.</li>
                      </ul>
                      <ul className="ps-0">
                        <li>
                        <Image
                            alt="icon"
                            src="/assets/img/icon/signIcon.png"
                            width="30"
                            height="30"
                          />
                        </li>
                        <li><strong>Automated security patch updates</strong> – Keeps software and systems updated with the
latest security fixes.</li>
                      </ul>
                      <ul className="ps-0">
                        <li>
                        <Image
                            alt="icon"
                            src="/assets/img/icon/signIcon.png"
                            width="30"
                            height="30"
                          />
                        </li>
                        <li><strong>Endpoint Detection & Response (EDR) Solutions</strong> – Identifies and responds to threats
targeting endpoint devices.</li>
                      </ul>
                      <ul className="ps-0">
                        <li>
                        <Image
                            alt="icon"
                            src="/assets/img/icon/signIcon.png"
                            width="30"
                            height="30"
                          />
                        </li>
                        <li><strong>Mobile Device Security & Management</strong> – Secures and manages mobile devices used in
your business.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="profile-wrapper">
                 
                  
                </div>
              </div>
            </div>
          </div>
          <span className="servicesspacer"></span>
          <div id="backup" className="container containerwrap">
            <div className="about-wrapper style2">
            <div
                className="about-content wow fadeInLeft"
                data-wow-delay="1s"
              >
                <div className="title-area">
                  <h5 className="subtitle text-start">
                  </h5>
                  <h2 className="title text-start">
                  Backup & Disaster Recovery 
                  </h2>
                  <p className="text">
                  Your data is your most valuable asset. We provide: 
                  </p>
                </div>
                <div className="fancy-box-wrapper">
                  <div className="fancy-box">
                    <div className="checklist mt-0 mb-0">
                      <ul className="ps-0">
                        <li>
                        <Image
                            alt="icon"
                            src="/assets/img/icon/signIcon.png"
                            width="30"
                            height="30"
                          />
                        </li>
                        <li><strong>Cloud-based automated backups</strong> – Stores your critical data securely in the cloud with
automatic backups.</li>
                      </ul>
                      <ul className="ps-0">
                        <li>
                        <Image
                            alt="icon"
                            src="/assets/img/icon/signIcon.png"
                            width="30"
                            height="30"
                          />
                        </li>
                        <li><strong>Disaster recovery planning</strong> – Develops a plan to quickly restore operations in case of an
emergency.</li>
                      </ul>
                      <ul className="ps-0">
                        <li>
                        <Image
                            alt="icon"
                            src="/assets/img/icon/signIcon.png"
                            width="30"
                            height="30"
                          />
                        </li>
                        <li><strong>Rapid system restoration solutions</strong> – Ensures fast recovery of data and applications
after disruptions.</li>
                      </ul>
                      <ul className="ps-0">
                        <li>
                        <Image
                            alt="icon"
                            src="/assets/img/icon/signIcon.png"
                            width="30"
                            height="30"
                          />
                        </li>
                        <li><strong>Compliance-friendly backup solutions</strong> – Meets industry regulations for secure and
compliant data storage.</li>
                      </ul>
                      <ul className="ps-0">
                        <li>
                        <Image
                            alt="icon"
                            src="/assets/img/icon/signIcon.png"
                            width="30"
                            height="30"
                          />
                        </li>
                        <li><strong>Business Continuity & Ransomware Recovery Services</strong> – Helps your business
maintain operations during cyber incidents.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="profile-wrapper">
                
                </div>
              </div>
              <div
                className="about-thumb-box wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="about-thumb-box about-thumb1">
                  <Image
                    alt="thumb"
                  src="/assets/img/service/baf5235c13.jpeg"
                    width="682"
                    height="561"
                  />
                </div>
                <div className="about-thumb-box line jump" />
              </div>
              
            </div>
          </div>
          <span className="servicesspacer"></span>
          <div id="soc" className="container containerwrap">
            <div className="about-wrapper style2">
              <div
                className="about-thumb-box wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="about-thumb-box about-thumb1">
                  <Image
                    alt="thumb"
                  src="/assets/img/service/7fa50455ed.jpeg"
                    width="682"
                    height="561"
                  />
                </div>
                <div className="about-thumb-box line jump" />
              </div>
              <div
                className="about-content wow fadeInRight"
                data-wow-delay="1s"
              >
                <div className="title-area">
                  <h5 className="subtitle text-start">
                  </h5>
                  <h2 className="title text-start">
                  SOC 2 Compliance Consulting 
                  </h2>
                  <p className="text">
                  Compliance is critical for securing customer trust and meeting industry regulations. Our SOC 2
compliance services include:
                  </p>
                </div>
                <div className="fancy-box-wrapper">
                  <div className="fancy-box">
                    <div className="checklist mt-0 mb-0">
                      <ul className="ps-0">
                        <li>
                        <Image
                            alt="icon"
                            src="/assets/img/icon/signIcon.png"
                            width="30"
                            height="30"
                          />
                        </li>
                        <li><strong>Security & Risk Assessment</strong> – Evaluates and strengthens your organization's security
posture.</li>
                      </ul>
                      <ul className="ps-0">
                        <li>
                        <Image
                            alt="icon"
                            src="/assets/img/icon/signIcon.png"
                            width="30"
                            height="30"
                          />
                        </li>
                        <li><strong>Gap Analysis & Audit Preparation</strong> – Identifies compliance gaps and prepares your
business for audits.</li>
                      </ul>
                      <ul className="ps-0">
                        <li>
                        <Image
                            alt="icon"
                            src="/assets/img/icon/signIcon.png"
                            width="30"
                            height="30"
                          />
                        </li>
                        <li><strong>Policy & Procedure Documentation</strong> – Develops clear security policies and operational
procedures.</li>
                      </ul>
                      <ul className="ps-0">
                        <li>
                        <Image
                            alt="icon"
                            src="/assets/img/icon/signIcon.png"
                            width="30"
                            height="30"
                          />
                        </li>
                        <li><strong>Ongoing Compliance Monitoring & Support</strong> – Continuously assesses and updates
compliance measures.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="profile-wrapper">
                 
                
                </div>
              </div>
            </div>
          </div>
          <span className="servicesspacer"></span>
          <div id="business" className="container containerwrap">
            <div className="about-wrapper style2">
            <div
                className="about-content wow fadeInLeft"
                data-wow-delay="1s"
              >
                <div className="title-area">
                  <h5 className="subtitle text-start">
                  </h5>
                  <h2 className="title text-start">
                  Business Continuity & Backup Recovery Planning 
                  </h2>
                  <p className="text">
                  Unforeseen events can disrupt your business. We help ensure operational resilience with: 
                  </p>
                </div>
                <div className="fancy-box-wrapper">
                  <div className="fancy-box">
                    <div className="checklist mt-0 mb-0">
                      <ul className="ps-0">
                        <li>
                        <Image
                            alt="icon"
                            src="/assets/img/icon/signIcon.png"
                            width="30"
                            height="30"
                          />
                        </li>
                        <li><strong>Business Continuity Strategy Development</strong> – Creates a roadmap to keep your business
running during crises.</li>
                      </ul>
                      <ul className="ps-0">
                        <li>
                        <Image
                            alt="icon"
                            src="/assets/img/icon/signIcon.png"
                            width="30"
                            height="30"
                          />
                        </li>
                        <li><strong>Disaster Recovery Plans Tailored to Your Business</strong> – Customizes recovery plans to fit
your organization's needs.</li>
                      </ul>
                      <ul className="ps-0">
                        <li>
                        <Image
                            alt="icon"
                            src="/assets/img/icon/signIcon.png"
                            width="30"
                            height="30"
                          />
                        </li>
                        <li><strong>Risk Assessments & Compliance Audits</strong> – Evaluates potential risks and ensures
regulatory compliance.</li>
                      </ul>
                      <ul className="ps-0">
                        <li>
                        <Image
                            alt="icon"
                            src="/assets/img/icon/signIcon.png"
                            width="30"
                            height="30"
                          />
                        </li>
                        <li><strong>Regular Backup Testing & Restoration Drills</strong> – Conducts routine tests to verify the
effectiveness of backups and recovery processes.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                 
              </div>
              <div
                className="about-thumb-box wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="about-thumb-box about-thumb1">
                  <Image
                    alt="thumb"
                  src="/assets/img/service/1133d43bdc.jpeg"
                    width="682"
                    height="561"
                  />
                </div>
                <div className="about-thumb-box line jump" />
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
