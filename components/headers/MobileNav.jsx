"use client";
import { menuItems } from "@/data/menu";
import { closeMobileMenu } from "@/utlis/toggleMobileMenu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Shield, Activity, Users2, Binary, Database, Network, Lock, Cloud, AlertCircle } from "lucide-react";
import { Icon } from 'lucide-react';
const iconMap = {
  shield: Shield,
  activity: Activity,
  users: Users2,
  binary: Binary,
  database: Database,
  network: Network,
  lock: Lock,
  cloud: Cloud,
  "alert-circle": AlertCircle,
};


export default function MobileNav() {
  const [activeParent, setActiveParent] = useState(-1);
  const [activeParent2, setActiveParent2] = useState(-1);
  const pathname = usePathname();
  const isMenuActive = (menu = menuItems[3]) => {
    let isActive = false;
    if (menu.href !== "#") {
      if (pathname.split("/")[1] == menu.href?.split("/")[1]) {
        isActive = true;
      }
    }
    if (menu.subMenu) {
      menu.subMenu.forEach((el) => {
        if (el.href != "#") {
          if (pathname.split("/")[1] == el.href?.split("/")[1]) {
            isActive = true;
          }
        }
        if (el.subMenu) {
          el.subMenu.map((elm) => {
            if (elm.href != "#") {
              if (pathname.split("/")[1] == elm.href?.split("/")[1]) {
                isActive = true;
              }
            }
          });
        }
      });
    }
    return isActive;
  };

  useEffect(() => {
    closeMobileMenu();
  }, [pathname]);
  const menuAreaRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current && // Check if click is inside #mobileMenu
        mobileMenuRef.current.contains(event.target) &&
        menuAreaRef.current && // Check if click is outside .gt-menu-area
        !menuAreaRef.current.contains(event.target)
      ) {
        closeMobileMenu();
        // Add your custom logic here
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      id="mobileMenu"
      ref={mobileMenuRef}
      className="gt-menu-wrapper onepage-nav"
    >
      <div ref={menuAreaRef} className="gt-menu-area text-center">
        <button onClick={closeMobileMenu} className="gt-menu-toggle">
          <i className="fal fa-times"></i>
        </button>
        <div className="mobile-logo">
          <Link scroll={false} href="/">
            <Image
              alt="techo"
              src="/assets/img/logo.png"
              width="199"
              height="42"
            />
          </Link>
        </div>
        <div className="gt-mobile-menu">
          
        <ul className="mobile-menu-mh">
  <li id="link-wrap" className="">
  <Link className="menuActive" href="/">
      Home
      <span className="gt-mean-expand" />
    </Link>
  </li>
  <li id="link-wrap" className="">
    <Link className="" href="/about">
      About Us
      <span className="gt-mean-expand" />
    </Link>
  </li>
  <li id="link-wrap" className="menu-item-has-children">
    <Link className="" href="#">
      Services
      <span className="gt-mean-expand" />
    </Link>
    <ul className="sub-menu active">
      <li className="">
        <Link className="" href="/our-service/">
        <span style={{ backgroundColor: "#FF5733"}}><Shield /></span>
          Proactive Cyber Defense
        </Link>
      </li>
      <li className="">
        <Link className="" href="/our-service/">
        <span style={{ backgroundColor: "#16A085"}}><Activity /></span>
          Network Security &amp; Protection
        </Link>
      </li>
      <li className="">
        <Link className="" href="/our-service/#endpoint">
        <span style={{ backgroundColor: "#E67E22"}}><Users2 /></span>
          Endpoint Protection &amp; Device Security
        </Link>
      </li>
      <li className="">
        <Link className="" href="/our-service/">
        <span style={{ backgroundColor: "#9B59B6"}}><Binary /></span>
          Backup &amp; Disaster Recovery
        </Link>
      </li>
      <li className="">
        <Link className="" href="/our-service/">
        <span style={{ backgroundColor: "#D35400"}}><Database /></span>
          SOC 2 Compliance Consulting
        </Link>
      </li>
      <li className="">
        <Link className="" href="/our-service/">
        <span style={{ backgroundColor: "#2980B9"}}><Network /></span>
          Business Continuity &amp; Backup Recovery Planning
        </Link>
      </li>
    </ul>
  </li>
  <li id="link-wrap" className="">
    <Link className="" href="/contact">
      Contact Us
      <span className="gt-mean-expand" />
    </Link>
  </li>
</ul>



        </div>
      </div>
      
    </div>
    
  );
}
