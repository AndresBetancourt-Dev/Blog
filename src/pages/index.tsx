import type { NextPage } from "next";
import {
  About,
  ContactCta,
  Experience,
  FeaturedProjects,
  Hero,
  Seo,
  Skills,
} from "../components";
import { personSchema, websiteSchema } from "../components/seo/schema";

const Home: NextPage = () => (
  <>
    <Seo path="/" type="profile" jsonLd={[personSchema(), websiteSchema()]} />
    <Hero />
    <About />
    <FeaturedProjects />
    <Experience />
    <Skills />
    <ContactCta />
  </>
);

export default Home;
