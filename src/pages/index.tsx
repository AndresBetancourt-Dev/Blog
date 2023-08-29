import type { NextPage } from "next"
import { Fragment } from "react";
import { About, Experience, Feedbacks, Tech, Works } from "../components";

const Home: NextPage = () => {
  return (
    <Fragment>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      <Feedbacks/>
    </Fragment>
  );
};

export default Home;
