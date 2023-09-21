import type { NextPage } from "next";
import { Fragment } from "react";
import { About, Experience, Hero, Tech, Projects } from "../components";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Hero />
      <Projects />
      <Tech />
      <About />
      <Experience />
    </Fragment>
  );
};

export default Home;
