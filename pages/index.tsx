import Intro from "../sections/Intro";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Service from "../sections/Service";
import Portfolio from "../sections/Portfolio";
import Contacts from "../sections/Contacts";
import Head from "next/head";

const Index = () => {

    return (
        <>
            <Head>
                <title>Петерс Максим</title>
                <meta property="og:title" content="Креативный веб-разработчик" key="title"/>
                <meta name="author" content="Петерс Максим"/>
                <meta name="description" content="Создаю креативные веб-интерфейсы с уклоном на производительность
                и юзабилити."/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="https://i.ibb.co/rmK589z/2.png" type="image/x-icon"/>
                <meta name="copyright" lang="ru" content="kejero.pw" />
                <meta name="yandex-verification" content="b7bdf3ba5acb6831" />
                <meta name="keywords"
                      content="веб-разработка,
                      frontend, фронтенд, web-интерфейсы, веб-разработчик,
                      разработчик, spa разработка, ssr разработка,
                      web, fullstack разработка, сайт под ключ,
                      фрилансер, фриланс, сайт-портфолио,
                      создать сайт, React, TypeScript,"
                />
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