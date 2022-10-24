import Intro from "../sections/Intro";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Service from "../sections/Service";
import Portfolio from "../sections/Portfolio";
import Contacts from "../sections/Contacts";
import {Parallax, ParallaxLayer} from '@react-spring/parallax'

const Index = () => {

    return (
        <>
            <Intro/>
            <About/>
            <Skills/>
            <Service/>
            <Portfolio/>
            <Contacts/>
        </>
    )
}

export default Index;