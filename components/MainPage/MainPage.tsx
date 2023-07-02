import Intro from "./sections/Intro";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Service from "./sections/Service";
import Portfolio from "./sections/Portfolio";
import Contacts from "./sections/Contacts";

const MainPage = (): JSX.Element => {
  return (
    <main>
      <Intro/>
      <About/>
      <Skills/>
      <Service/>
      <Portfolio/>
      <Contacts/>
    </main>
  )
}

export default MainPage
