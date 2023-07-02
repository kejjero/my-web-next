import section from "../../../scss/modules/section.module.scss";
import portfolio from "../../../scss/modules/portfolio.module.scss"
import TopSection from "../../TopSection";
import Work from "../../Work";
import {works} from "../../../utils/constants"
import React, {useEffect, useState} from "react";
import skills from "../../../scss/modules/skills.module.scss";
import { motion } from "framer-motion";
import {Radio} from "antd";

const Portfolio: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [filterWorks, setFilterWorks] = useState([]);
    const [width, setWidth] = useState<number>();
    const buttons  = [{title: "Проекты"}, {title: "Open Source"}]

    const sectionAnimation = {
        hidden: {
            y: 30,
            opacity: 0
        },
        visible: custom  => ({
            y: 0,
            opacity: 1,
            transition: {delay: custom * 0.1, ease: [0, 0.2, 0.5, 0.8], duration: 1.5, type:"spring"}
        })
    }

    const onClickButton = (i) => {
        setActiveIndex(i)
    }

    useEffect(() => {
        const currentWorks = works.filter((item) => {
            return item.tag === buttons[activeIndex].title
        })
        setFilterWorks(currentWorks)
        setWidth(window.screen.width)
    }, [activeIndex])


    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: width > 700 ? 0.2 : 0.1, once: true}}
            className={section.section}
            custom={1}
            variants={sectionAnimation}
        >
            <div className={section.section__wrapper} id="portfolio">
                <TopSection title="Портфолио" subtitle="Личные проекты и вклад в Open Source"/>
                <div className={skills.skills__buttonGroup}>
                    <Radio.Group size="large" defaultValue="Проекты">
                        {
                            buttons.map((item, i) => (
                                <Radio.Button
                                    key={item.title}
                                    value={item.title}
                                    onClick={() => onClickButton(i)}
                                    style={{minWidth: "100px", textAlign: "center", backgroundColor: "#F2F1EF"}}
                                >
                                    {item.title}
                                </Radio.Button>
                            ))
                        }
                    </Radio.Group>
                </div>
                <ul className={portfolio.portfolio__works}>
                    {
                        filterWorks.map((item, i) => (
                            <Work key={i} item={item}/>
                        ))
                    }
                </ul>
            </div>
        </motion.section>
    )
}

export default Portfolio;
