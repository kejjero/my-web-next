import section from "../scss/modules/section.module.scss"
import skills from "../scss/modules/skills.module.scss"
import TopSection from "../components/TopSection";
import React, {useEffect, useRef, useState} from "react";
import {SKILLS} from "../utils/constants";
import MySkills from "../components/MySkills";
import { motion } from "framer-motion";
import SwiperSkills from "../components/SwiperSkills";

const Skills: React.FC = () => {
    const buttons  = [{title: "Frontend"}, {title: "Backend"}, {title: "Графика"}]
    const [activeIndex, setActiveIndex] = useState(0);
    const [filterSkills, setFilterSkills] = useState([]);
    const [width, setWidth] = useState<number>();

    const onClickButton = (i) => {
        setActiveIndex(i)
    }

    useEffect(() => {
        const currentSkills = SKILLS.filter((item) => item.activeIndex === activeIndex)
        setFilterSkills(currentSkills)
        setWidth(window.screen.width)
    }, [activeIndex])

    const sectionAnimation = {
        hidden: {
            y: 30,
            opacity: 0
        },
        visible: custom  => ({
            y: 0,
            opacity: 1,
            transition: {delay: custom * 0.1}
        })
    }


    return(
        <motion.section
            id="skills"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: width > 700 ? 0.4 : 0.1, once: true}}
            className={section.section}
            custom={1}
            variants={sectionAnimation}
        >
            <div className={skills.skills}>
                <div className={section.section__wrapper}>
                    <TopSection title="Навыки и инструменты" subtitle="Что применяю в работе"/>
                    <div className={skills.skills__buttonGroup}>
                        {
                            buttons.map((item, i) => (
                                <button
                                    key={item.title}
                                    onClick={() => onClickButton(i)}
                                    className={`skills__button ${activeIndex === i ? "skills__button_active" : ""} `}
                                >
                                    {item.title}
                                </button>
                            ))
                        }
                    </div>
                    {
                        width > 520 ?
                            <MySkills filterSkills={filterSkills}/>
                            :
                            <SwiperSkills filterSkills={filterSkills} />

                    }
                </div>
            </div>
        </motion.section>
    )
}

export default Skills;