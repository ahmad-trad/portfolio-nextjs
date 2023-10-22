"use client" 

import { Fragment, useEffect, useState } from "react";
import Link from "next/link"; 
import { usePathname } from "next/navigation";

import styles from "./Navbar.module.css";
import { navbarData} from "./navbarData";

import  IconTwitter  from "../Svg/twitter";
import IconGithub from "../Svg/gethubIcon";
import IconLinkedin from "../Svg/linkedinIcon";
import FacebookIcon from "../Svg/facebookIcon";

export const Navbar = () => {
  const [size, setSize] = useState("");
  
  useEffect(() => {
    setSize(window.innerWidth);
    window.addEventListener("resize" , () =>{
      setSize(window.innerWidth);
    });

    window.addEventListener("scroll" ,() => setToggle(false));
  },[])

  const path = usePathname();
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.header}>

      {size >= "890" && 
      <div className={styles.nav}>
        <ul className={styles.list_navbar}>
          {
            navbarData.map((item) => (
              <Fragment key={item.id}>
                <Link onClick={() => setToggle(false)} href={item.src} className={`${styles.link_nav} ${path === item.src ? styles.active : ""}`} >
                  <li className={styles.li_nav}>{item.title}</li>
                </Link>
              </Fragment>
            ))
          }
        </ul>
      </div>
      }

      <div className={styles.logo}>
        <h2 className={styles.logo__title}>AT</h2>
      </div>

      {size > "890" && 
        <div className={styles.icons}>
          <ul className={styles.list_icons}>
            <a onClick={() => setToggle(false)} className={styles.link_icon} href="https://www.linkedin.com/in/ahmad-trad-b1b62a22b/" target="_blank">
              <li><IconLinkedin /></li>
            </a>

            <a onClick={() => setToggle(false)} className={styles.link_icon} href="https://www.facebook.com/profile.php?id=100004400133646" target="_blank">
              <li><FacebookIcon /></li> 
            </a>

            <a onClick={() => setToggle(false)} className={styles.link_icon} href="https://github.com/ahmad-trad" target="_blank">
              <li><IconGithub /></li>
            </a>

            <a onClick={() => setToggle(false)} className={styles.link_icon} href="#" target="_blank">
              <li><IconTwitter /></li> 
            </a>
          </ul>
        </div>
      }

      {size < "890" && 
      <div className={`${styles.nav_mob} ${toggle && styles.display_nav}`}>
        <div className={styles.navlink_mob}>
          <ul className={styles.list_navmob}>
            {
              navbarData.map((item) => (
                <Fragment key={item.id}>
                  <Link onClick={() => setToggle(false)} href={item.src} className={`${styles.link_navmob} ${path === item.src ? styles.active_mob : "" }`} >
                    <li className={styles.li_navmob}>{item.title}</li>
                  </Link>
                </Fragment>
              ))
            }
          </ul>
        </div>

        <div className={styles.icons_mob}>
          <ul className={styles.list_icons_mob}>
          <a  onClick={() => setToggle(false)} className={styles.link_icon} href="https://www.linkedin.com/in/ahmad-trad-b1b62a22b/" target="_blank">
              <li><IconLinkedin /></li>
            </a>

            <a onClick={() => setToggle(false)} className={styles.link_icon} href="https://www.facebook.com/profile.php?id=100004400133646" target="_blank">
              <li><FacebookIcon /></li> 
            </a>

            <a onClick={() => setToggle(false)} className={styles.link_icon} href="https://github.com/ahmad-trad" target="_blank">
              <li><IconGithub /></li>
            </a>

            <a onClick={() => setToggle(false)} className={styles.link_icon} href="#" target="_blank">
              <li><IconTwitter /></li> 
            </a>
          </ul>
        </div>
      </div>
      }

      <div onClick={() => setToggle(!toggle)} className={toggle ? styles.active_muen : styles.muen}>
        <span className={styles.span}></span>
        <span className={styles.span}></span>
        <span className={styles.span}></span>
      </div>
    </div>
  )
}
