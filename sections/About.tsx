import s from "../scss/modules/about.module.scss"
import Label from "../components/Label";
import React from "react";
import {motion} from "framer-motion";

const About: React.FC = () => {
    const labelStyles = {paddingTop: 4}
    const info = [
        {title: "telegram", value: "@kejRRR", link: "https://t.me/kejRRR"},
        {title: "github", value: "@kejjero", link: "https://github.com/kejjero"},
        {title: "LinkedIn", value: "@kejero", link: "https://www.linkedin.com/in/kejjero/"},
    ]
    const stats = [
        {title: "реализованных проектов", value: "9"},
        {title: "года опыта разработки", value: "2+"},
        {title: "hard skills", value: "20+"}
    ]

    const topLeftAnimation = {
        hidden: {
            x: -100,
            opacity: 0
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.1, ease: [0, 0.2, 0.5, 0.8], duration: 1.5, type:"spring"}
        })
    }

    const topRightAnimation = {
        hidden: {
            x: 100,
            opacity: 0
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.1, ease: [0, 0.2, 0.5, 0.8], duration: 1.5, type:"spring"}
        })
    }

    const statsAnimation = {
        hidden: {
            y: 100,
            opacity: 0
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: {delay: custom * 0.1, ease: [0, 0.2, 0.5, 0.8], duration: 1.5, type:"spring"}
        })
    }


    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.2, once: true}}
            className={s.about}>
            <div className={s.about__wrapper} id="about">
                <motion.div className={s.about__top}>
                    <div className={s.about__wrapper_title}>
                        <motion.h2 custom={1} variants={topLeftAnimation} className={s.about__title}>Петерс <Label
                            width={25} height={25} styles={labelStyles}/> Максим
                        </motion.h2>
                        <motion.p custom={2} variants={topLeftAnimation} className={s.about__subtitle}>Работаю с душой и
                            упорством
                        </motion.p>
                    </div>
                    <div className={s.about__wrapper_about}>
                        <motion.h3 custom={3} variants={topRightAnimation} className={s.about__titleAbout}>
                            Создаю креативные веб-интерфейсы с уклоном на производительность и юзабилити.
                        </motion.h3>
                        <motion.p custom={4} variants={topRightAnimation} className={s.about__paragraph}>
                              Я <span className={s.about__exude}> Frontend </span> / <span className={s.about__exude}>Full Stack </span>
                            разработчик в стеке <a
                          className={s.about__link} href="https://reactjs.org/" target='_blank'>React</a>, <a
                          className={s.about__link} href="https://www.typescriptlang.org/" target='_blank'>TypeScript</a> и <a
                          className={s.about__link} href="https://nestjs.com/" target='_blank'>Nest.js</a>.
                            С большим интересом подхожу к изучению новых технологий, а так же всегда забочусь
                            о качестве и масштабируемости своего кода.
                        </motion.p>
                        <motion.p custom={4} variants={topRightAnimation} className={s.about__paragraph}>
                            Помимо веб-разработки, занимаюсь созданием UI дизайна, рисую красочные иллюстрации
                            и понемногу практикуюсь в анимациях. А в качестве хобби иду в направлении цифровой
                            графики, искусства и блогерства.
                        </motion.p>
                        <ul className={s.about__info}>
                            {
                                info.map((item, i) => (
                                    <motion.li custom={i + 1} variants={topRightAnimation} key={i}
                                               className={s.about__info_item}>
                                        <h4 className={s.about__titleInfo}>{item.title}</h4>
                                        <a target="_blank" href={item.link} className={s.about__valueInfo}>{item.value}</a>
                                    </motion.li>
                                ))
                            }
                        </ul>
                    </div>
                </motion.div>
                <motion.ul className={s.about__stats} custom={5} variants={statsAnimation}>
                    {
                        stats.map((item, i) => (
                            <li key={i} className={s.about__stats_item}>
                                <span className={s.about__valueStats}>{item.value}</span>
                                <h4 className={s.about__titleStats}>{item.title}</h4>
                            </li>
                        ))
                    }
                </motion.ul>
            </div>
        </motion.section>
    )
}

export default About;