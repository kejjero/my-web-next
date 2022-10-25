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
            text: "Создаю SPA или SSR приложения с полной адаптивностью под любые устройства. Имеется опыт разработки как одностраничных лендингов, так и полноценных онлайн магазинов."
        },
        {
            title: "Backend",
            text: "Есть небольшой опыт разработки бекенда на уровне авторизации/регистрации пользователя, взаимодействия с БД (MongoDB) с помощью http запросов, отправка данных через сookie / jwt и т.д."
        },
        {
            title: "Fullstack",
            text: "Готов взяться за fullstack проект под ключ, честно оценив свои силы и возможности. Так же владею навыками сборки, настройки и развёртывания приложений на Ubuntu."
        },
        {
            title: "Graphics",
            text: "Разрабатываю креативный дизайн сайтов, дополняя их красочными иллюстрациями, анимациями и иными приблудами. Берусь только за то, что сделаю по настоящему качественно."
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