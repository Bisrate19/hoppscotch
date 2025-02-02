import Sidebar from "./sidebar/page";
import Header from "./header/page";
import Rest from "./sidebar/rest/page"
import Footer from "./footer/page"

import type { AppProps } from "next/app";

export default function Home() {
  return (
    <>
      <Header />
      <Sidebar />
      <Rest /> 
      <Footer />
      <main></main>
    </>
  );
}
