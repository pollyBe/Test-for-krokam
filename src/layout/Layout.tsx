import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

import style from "./Layout.module.scss";

export const Layout = () => {
  return (
    <div className={style.containerLayout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
