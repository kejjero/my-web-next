import service from "../scss/modules/service.module.scss"
import TopSection from "../components/TopSection";
import CardService from "../components/CardService";
import React from "react";
import { motion } from "framer-motion";
import s from "../scss/modules/service.module.scss";

const Service: React.FC = () => {
    const cards = [
        {
            title: <h4 className={s.service__cardTitle}>Frontend</h4>,
            text: <p className={s.service__cardText}>
                Создаю <a className={s.service__link} href="https://clck.ru/32TSR5" target="_blank">SPA</a> или <a className={s.service__link} href="https://clck.ru/32VmEu" target="_blank">SSR</a> приложения с полной адаптивностью под любые устройства.
                Разрабатваю как одностраничные лендинги, так и полноценные онлайн магазины, сервисы, блоги.</p>
        },
        {
            title: <h4 className={s.service__cardTitle}>Backend</h4>,
            text: <p className={s.service__cardText}>Есть опыт разработки бекенда на уровне
                авторизации/регистрации пользователя, взаимодействия с БД (MongoDB) с
                помощью http запросов, отправка данных через сookie / jwt и т.д.</p>
        },
        {
            title: <h4 className={s.service__cardTitle}>Fullstack</h4>,
            text: <p className={s.service__cardText}>Готов взяться за fullstack проект под ключ с отрисовкой
                дизайна, создания сервера и веб-интерфейса. Так же владею навыками сборки, настройки и развёртывания приложений
                на <a className={s.service__link} href="https://thecode.media/ubuntu-linux/" target="_blank">Ubuntu</a>.</p>
        },
        {
            title: <h4 className={s.service__cardTitle}>Graphics</h4>,
            text: <p className={s.service__cardText}>Искусно работаю с
                растровой / векторной графикой и немного с 3D.
                Разрабатываю креативный дизайн сайтов, дополняя их
                красочными иллюстрациями и анимациями.
            </p>
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