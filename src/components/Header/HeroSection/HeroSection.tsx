import Logo from "@/assets/icons/logo-6.svg?react";

import style from "./heroSection.module.scss";

export const HeroSection = () => {
  return (
    <section className={style.hero} id="home">
      <div className={style.heroInfo}>
        <div className={style.logo}>
          <Logo />
        </div>
        <h1>
          Personal audio guides
          <br />
          and navigators for localities and surroundings
        </h1>
      </div>
    </section>
  );
};
