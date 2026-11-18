import type { GetServerSideProps } from "next";
import { absoluteUrl } from "../constants/site";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=604800",
  );
  res.write(
    [
      "User-agent: *",
      "Allow: /",
      "",
      `Sitemap: ${absoluteUrl("/sitemap.xml")}`,
      "",
    ].join("\n"),
  );
  res.end();
  return { props: {} };
};

const Robots = () => null;
export default Robots;
