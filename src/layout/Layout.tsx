import { FC, PropsWithChildren } from "react";
import { Contact, Hero, Navbar, StarsCanvas } from "../components";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>
      </div>
      {children}
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>
  );
};

export default Layout;
