import Intro from "../sections/Intro";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Service from "../sections/Service";
import Portfolio from "../sections/Portfolio";
import Contacts from "../sections/Contacts";
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import Head from "next/head";

const Index = () => {

    return (
        <>
            <Head>
                <title>kejero.pw</title>
                <meta property="og:title" content="Креативный веб-разработчик" key="title"/>
                <meta name="author" content="Петерс Максим"/>
                <meta name="description" content="Создаю креативные веб-интерфейсы с уклоном
                на производительность и оптимизацию"/>
                <link rel="shortcut icon" href="https://i.ibb.co/rmK589z/2.png" type="image/x-icon"/>
            </Head>
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