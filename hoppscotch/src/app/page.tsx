import Sidebar from "./sidebar/page";
import Header from "./header/page";

import type { AppProps } from "next/app";

export default function Home() {
  return (
    <>
      <Header />
      <Sidebar />
      <main></main>
    </>
  );
}
