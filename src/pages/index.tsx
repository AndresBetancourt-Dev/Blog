import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Fragment } from "react";
import { About, Experience, Hero, Tech, Projects } from "../components";

const Home: NextPage = () => {
  return (
    <Fragment>
      <NextSeo
        title={"Andrés Betancourt - Software Developer"}
        description={
          "Fullstack Developer with focus on Web and Mobile Development"
        }
      />
      <Hero />
      <Projects />
      <Tech />
      <About />
      <Experience />
    </Fragment>
  );
};

export default Home;
