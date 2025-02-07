import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";
import About from "@/components/homes/home-1/About";
import Cta from "@/components/common/Cta";
import Facts from "@/components/homes/home-1/Facts";
import Hero from "@/components/homes/home-1/Hero";
import Process from "@/components/homes/home-1/Process";
import Services2 from "@/components/homes/home-1/Services2";
import TextSlider from "@/components/homes/home-2/TextSlider";
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
