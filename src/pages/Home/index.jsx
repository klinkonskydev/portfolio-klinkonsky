import { Navbar } from "../../components/Navbar";
import { Main } from "../../components/Main";
import { About } from "../../components/About";
import { Project } from "../../components/Projects";

export function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Project />
    </>
  );
}
