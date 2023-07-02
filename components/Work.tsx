import s from "../scss/modules/portfolio.module.scss"
import Image from "next/image";
import React, {useEffect, useState} from "react";
import {IWork} from "../types/components";
import {motion} from "framer-motion";
import 'antd/dist/antd.css';
import {Button} from 'antd';

import {Tag} from 'antd';

const Work: React.FC<IWork> = ({item}) => {
    const [widthImage, setWidthImage] = useState<number>();
    const [heightImage, setHeightImage] = useState<number>();
    const [widthWindow, setWidthWindow] = useState<number>();

    useEffect(() => {
        setWidthWindow(window.screen.width)
        if (window.screen.width > 920) {
            setWidthImage(490)
            setHeightImage(345)
        } else {
            setWidthImage(920)
            setHeightImage(500)
        }

    }, [])

    const sectionAnimation = {
        hidden: {
            y: 30,
            opacity: 0
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: {delay: custom * 0.1}
        })
    }

    return (
        <motion.li
            className={s.portfolio__work}
            animate="visible"
            whileInView="visible"
            viewport={{amount: 0.7}}
            custom={5}
            variants={sectionAnimation}
        >
            <div className={s.portfolio__imageWrapper}>
                {
                    widthWindow < 920 &&
                    <>
                        <h3 className={s.portfolio__title}>{item.title}</h3>
                        <p className={s.portfolio__paragraph}>{item.about}</p>
                    </>
                }
                <Image
                    placeholder='blur'
                    src={item.image}
                    className={`portfolio__image`}
                    height={heightImage}
                    width={widthImage}
                />
            </div>
            <div className={s.portfolio__workWrapper}>
                {
                    widthWindow > 920 &&
                    <>
                        <h3 className={s.portfolio__title}>{item.title}</h3>
                        <p className={s.portfolio__paragraph}>{item.about}</p>
                    </>
                }
                <ul className={s.portfolio__skills}>
                    {
                        item.stack.map((item) => (
                            <li key={item.skill}>
                                <Tag color="default">{item.skill}</Tag>
                            </li>
                        ))
                    }
                </ul>
                <a href={item.link} target='_blank'>
                    <Button className={s.portfolio__workButton} type="primary" size="large">
                        Подробнее
                    </Button>
                </a>
            </div>
        </motion.li>
    )
}

export default Work;
