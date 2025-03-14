import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";

import About from "@/components/homes/home-2/About";

import Cta from "@/components/common/Cta";

import TextSlider from "@/components/homes/home-2/TextSlider";
import VideoBox from "@/components/homes/home-2/VideoBox";
import Pricing from "@/components/homes/home-3/Pricing";
import Services2 from "@/components/otherPages/service/Services2";
import Link from "next/link";
export const metadata = {
  title: "Services || Expert Cybersecurity & Data Protection",
  description: "EDGTEK provides expert cybersecurity solutions, including network protection, encrypted backups, and advanced security measures to safeguard your business from cyber threats.",
};
export default function Page() {
  return (
    <>
     
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
                 Our Services
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
                  <li>Our Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <About />
        <TextSlider /> 
        {/* <VideoBox />
        <Pricing /> */}
        <div className="pb-300"></div>
        <Cta />
      </main>
      <Footer1 />
    </> 
  );
}
