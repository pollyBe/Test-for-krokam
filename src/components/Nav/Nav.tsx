import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import Icon from "@/assets/icons/NavIcon.svg?react";

import style from "./nav.module.scss";

const links: { name: string; to: string }[] = [
  { name: "Home", to: "home" },
  { name: "About the Project", to: "about" },
  { name: "Projects", to: "projects" },
  { name: "Contacts", to: "contacts" },
];

export const Nav = () => {
  return (
    <nav className={style.list}>
      {links.map((link) => {
        return (
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to={link.to}
            key={link.name}
            className={style.listItem}
          >
            {link.name}
          </Link>
        );
      })}
      <NavLink to="/" className={style.icon}>
        <Icon />
      </NavLink>
    </nav>
  );
};
