import s from "../scss/modules/intro.module.scss";
import Image from "next/image";
import ava from "../images/ava.jpg"
import Label from "../components/Label";
import Marquee from "react-fast-marquee";
import React, {useEffect, useState} from "react";
import {useTrail, a} from "react-spring";
import {motion} from "framer-motion"
import {RightOutlined} from "@ant-design/icons";
import { Button } from 'antd';
import 'antd/dist/antd.css';


const Intro: React.FC = () => {
    const marqueeItems = ["мобильные приложения", "дизайн", "web-интерфейсы","Векторная графика", "Typescript", "Иллюстрации", "React", "Анимации", "SPA / SSR"]
    const stylesLabel = {paddingBottom: 2, paddingRight: 5}
    const [widthLabel, setWidthLabel] = useState<number>()

    useEffect(() => {
        if (window.screen.width >= 876) {
            setWidthLabel(45)
        } else {
            setWidthLabel(40)
        }
    })

    const textAnimation = {
        hidden: {
            x: -100,
            opacity: 0
        },
        visible: custom  => ({
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.1}
        })
    }


    return (
        <motion.section
            className={s.intro}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5, once: true }}
        >
            <div className={s.intro__wrapper}>
                <div className={s.intro__conitainText}>
                        <motion.p custom={3} variants={textAnimation} className={s.intro__title}>Привет, я Максим</motion.p>
                        <motion.span custom={4} variants={textAnimation} className={s.intro__title}>
                            <Label width={widthLabel} styles={stylesLabel}/> креативный
                            <motion.p custom={5} variants={textAnimation} className={s.intro__title}>веб-разработчик.</motion.p>
                        </motion.span>
                    <motion.p custom={6} variants={textAnimation} className={s.intro__directions}>
                        Frontend <span className={s.intro__directions_and}>&&</span>
                        Backend <span className={s.intro__directions_and}>&&</span>
                        2D/3D Graphics
                    </motion.p>
                    <motion.div custom={7} variants={textAnimation} className={s.intro__buttons}>
                        <Button
                            size="large"
                            type="primary"
                            style={{
                                minHeight: "45px",
                                minWidth: "150px",
                                backgroundColor: "#000",
                                color: "#fff",
                                borderColor: "#000",
                                borderRadius: "0"
                        }}
                        >
                            Подробнее
                        </Button>

                        <Button
                            size="large"
                            style={{
                                minHeight: "45px",
                                minWidth: "120px",
                                backgroundColor: "#F2F1EF",
                                borderRadius: "0",
                                borderColor: "#000",
                                color: "#000"
                        }}
                        >
                            Подробнее
                        </Button>
                    </motion.div>
                </div>
                <Image className={s.intro__avatar} src={ava} width={550} height={550}/>
            </div>
            <div className={s.intro__marqueeWrapper}>
                <Marquee
                    className={s.intro__marquee}
                    gradient={false}
                    speed={30}
                >
                    <p className={s.intro__marquee_text}>
                        {
                            marqueeItems.map((item, i) => {
                                return (
                                    <span key={i} className={s.intro__marquee_item}>
                                    {item}
                                        <span className={s.intro__marquee_symbol}>
                                        {`</>`}
                                    </span>
                                </span>
                                )
                            })
                        }
                    </p>
                </Marquee>
            </div>
        </motion.section>
    )
}

export default Intro;