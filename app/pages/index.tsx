import type { NextPage } from "next";
import Meta from "../components/Meta";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Meta />
      <Image src="/images/logo.svg" alt="busshiDev" layout="fill" />
    </div>
  );
};

export default Home;
