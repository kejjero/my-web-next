import section from "../scss/modules/section.module.scss";
import portfolio from "../scss/modules/portfolio.module.scss"
import TopSection from "../components/TopSection";
import ButtonGroup from "../components/ButtonGroup";
import Work from "../components/Work";
import work1 from "../images/work.jpg"
import Button from "../components/Button";
import React, {useEffect} from "react";
import skills from "../scss/modules/skills.module.scss";
import { motion } from "framer-motion";

const Portfolio: React.FC = () => {
    const buttons  = [{title: "Все"}, {title: "Frontend"}, {title: "Fullstack"}]
    const works = [
        {title: 'Онлайн-магазин мебели', tag: 'full stack', image: work1, linkId: "acro-furniture"},
        {title: 'Доставка марсианской еды', tag: 'frontend', image: work1, linkId: "marsik"},
        {title: 'Сервис загрузки фотографий', tag: 'full stack', image: work1, linkId: "mesto"}
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


    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true}}
            className={section.section}
            custom={1}
            variants={sectionAnimation}
        >
            <div className={section.section__wrapper} id="portfolio">
                <TopSection title="Портфолио" subtitle="реализованные проекты"/>
                <div className={skills.skills__buttonGroup}>
                    {
                        buttons.map((item) => (
                            <button className="skills__button">{item.title}</button>
                        ))
                    }

                </div>
                <ul className={portfolio.portfolio__works}>
                    {
                        works.map((item, i) => (
                            <Work key={i} item={item}/>
                        ))
                    }
                </ul>
                <Button width="100%">Еще</Button>
            </div>
        </motion.section>
    )
}

export default Portfolio;