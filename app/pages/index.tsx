import type { NextPage } from "next";
import Meta from "../components/Meta";

const Home: NextPage = () => {
  return (
    <div>
      <Meta />
      <img src="/images/logo.svg" alt="busshiDev" width="100%" height="100%" />
    </div>
  );
};

export default Home;
