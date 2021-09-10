import { Navbar } from "./Navbar"
import { Main } from "./Main"
import { About } from "./About"
import { Abilities } from "./Abilities"
import { Project } from "./Projects"

export default function Home(){
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Abilities />
      <Project />
    </>
  )
}