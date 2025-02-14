"use client";
import { menuItems } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Shield,
  Activity,
  Users2,
  Binary,
  Database,
  Network,
  Lock,
  Cloud,
  AlertCircle,
} from "lucide-react";

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

export default function Nav() {
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
      });
    }
    return isActive;
  };

  return (
    <>
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={`${item.subMenu ? "menu-item-has-children" : ""} ${
            item.title === "Services" ? "services-dropdown" : ""
          }`}
        >
          <Link
            scroll={false}
            className={`${isMenuActive(item) ? "menuActive" : ""}`}
            href={item.href}
          >
            {item.title}
          </Link>
          {item.subMenu && item.title === "Services" ? (
            <div className="services-grid-menu">
              <div className="grid-container">
                {item.subMenu.map((subItem, subIndex) => {
                  const Icon = iconMap[subItem.icon];
                  return (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      className="service-item"
                    >
                      <div className="service-icon">
                        {Icon && (
                          <div
                            className="icon-wrapper"
                            style={{
                              backgroundColor: subItem.iconBg.includes("bg-")
                                ? ""
                                : subItem.iconBg,
                            }}
                          >
                            <Icon className={`h-6 w-6 ${subItem.iconColor}`} />
                          </div>
                        )}
                      </div>

                      <div className="service-content">
                        <h3>{subItem.title}</h3>
                        <p>{subItem.description}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ) : (
            item.subMenu && (
              <ul className="sub-menu">
                {item.subMenu.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      scroll={false}
                      className={`${isMenuActive(subItem) ? "menuActive" : ""}`}
                      href={subItem.href}
                    >
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )
          )}
        </li>
      ))}
    </>
  );
}
