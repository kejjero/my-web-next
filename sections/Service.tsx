import section from "../scss/modules/section.module.scss";
import service from "../scss/modules/service.module.scss"
import TopSection from "../components/TopSection";
import CardService from "../components/CardService";
import React from "react";
import { motion } from "framer-motion";

const Service: React.FC = () => {
    const cards = [
        {
            title: "Frontend",
            text: "Вёрстка красивых и современных веб-страниц с полной адаптивностью под любые устройства и полноценной интерактивностью как из PSD-макета, так и без него."
        },
        {
            title: "Backend",
            text: "Разработка сложной backend логики для уже готового frontend'а, либо по подробному техническому заданию с обеспечением максимальной эффективности и производительности."
        },
        {
            title: "Full Stack",
            text: "Создание полноценных сайтов и веб-приложений, включающих себя пользовательский интерфейс, сложную бизнес логику и высокопроизводительные серверные скрипты."
        },
        {
            title: "UX/UI Design",
            text: "Оптимизация структуры сайта для лучшей его обработки поисковыми системами, что впоследствии улучшает его позиции в поисковой выдаче, ускоряя развитие и увеличивая посещаемость."
        },
    ]

    const sectionAnimation = {
        hidden: {
            y: 100,
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
            className={service.service}
        >

            <motion.div
                id="service"
                custom={1}
                variants={sectionAnimation}
                className={service.service__wrapper}
            >
                <TopSection title="Услуги" subtitle="что могу предложить" isBlack/>
                <ul className={service.service__cards}>
                    {
                        cards.map((item, i) => (
                            <CardService key={i} title={item.title} text={item.text}/>
                        ))
                    }
                </ul>

            </motion.div>
        </motion.section>
    )
}

export default Service;