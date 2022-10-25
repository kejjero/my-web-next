import section from "../scss/modules/section.module.scss";
import portfolio from "../scss/modules/portfolio.module.scss"
import TopSection from "../components/TopSection";
import ButtonGroup from "../components/ButtonGroup";
import Work from "../components/Work";
import work1 from "../images/work.jpg"
import Button from "../components/Button";
import React, {useEffect, useState} from "react";
import skills from "../scss/modules/skills.module.scss";
import { motion } from "framer-motion";

const Portfolio: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [filterWorks, setFilterWorks] = useState([]);
    const [width, setWidth] = useState<number>();
    const buttons  = [{title: "Все"}, {title: "Frontend"}, {title: "Fullstack"}]
    const works = [
        {title: 'Онлайн-магазин мебели', tag: 'Frontend', image: work1, linkId: "acro-furniture"},
        {title: 'Доставка марсианской еды', tag: 'Frontend', image: work1, linkId: "marsik"},
        {title: 'Сервис загрузки фотографий', tag: 'Fullstack', image: work1, linkId: "mesto"}
    ]

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

    const onClickButton = (i) => {
        setActiveIndex(i)
    }

    useEffect(() => {
        const currentWorks = works.filter((item) => {
            if (activeIndex === 0) {
                return true
            } else {
                return item.tag === buttons[activeIndex].title
            }
        })
        setFilterWorks(currentWorks)
        setWidth(window.screen.width)
    }, [activeIndex])


    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: width > 700 ? 0.4 : 0.1, once: true}}
            className={section.section}
            custom={1}
            variants={sectionAnimation}
        >
            <div className={section.section__wrapper} id="portfolio">
                <TopSection title="Портфолио" subtitle="реализованные проекты"/>
                <div className={skills.skills__buttonGroup}>
                    {
                        buttons.map((item, i) => (
                            <button
                                key={i}
                                onClick={() => onClickButton(i)}
                                className={`skills__button ${activeIndex === i ? "skills__button_active" : ""} `}
                            >
                                {item.title}
                            </button>
                        ))
                    }

                </div>
                <ul className={portfolio.portfolio__works}>
                    {
                        filterWorks.map((item, i) => (
                            <Work key={i} item={item}/>
                        ))
                    }
                </ul>
                {
                    filterWorks.length > 3 &&
                    <Button width="100%">Еще</Button>
                }
            </div>
        </motion.section>
    )
}

export default Portfolio;