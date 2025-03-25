import { Nav } from "@/components/Nav";
import { HeroSection } from "@/components/Header/HeroSection";

import style from "./header.module.scss";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <Nav />
        <HeroSection />
      </div>
    </header>
  );
};
