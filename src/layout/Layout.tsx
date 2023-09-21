import { FC, PropsWithChildren } from "react";
import { Contact, Navbar, StarsCanvas } from "../components";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative z-0 bg-dark-primary">
      <Navbar />
      {children}
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default Layout;
