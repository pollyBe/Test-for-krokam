import * as React from "react";
import Logo from "@/assets/icons/Krokam.svg?react";
import style from "./footer.module.scss";
import { Link } from "react-scroll";
import YoutubeIcon from "@/assets/icons/YoutubeIcon.svg?react";

export const Footer: React.FC = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <Logo />
        <div className={style.links}>
          <div className={style.left}>
            <a href="mailto:info@krokam.com">info@krokam.com</a>
            <Link
              to="videoSection"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <YoutubeIcon />
            </Link>
          </div>
          <div className={style.right}>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Our Projects
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About Project
            </Link>
            <Link
              to="contacts"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contacts
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
