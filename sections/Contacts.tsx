import contacts from "../scss/modules/contacts.module.scss"
import section from "../scss/modules/section.module.scss";
import TopSection from "../components/TopSection";
import InputForm from "../components/InputForm";
import InputMessage from "../components/InputMessage"
import hash from "../images/hash.svg"
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Contacts: React.FC = () => {
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
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true}}
            className={contacts.contacts}
        >
            <div className={contacts.contacts__hash}>
                <Image src={hash}/>
            </div>
            <motion.div
                custom={1}
                variants={sectionAnimation}
                className={contacts.contacts__wrapper}
                id="contacts"
            >
                <TopSection title="Контакты" subtitle="открыт к сотрудничеству"/>
                <form className={contacts.contacts__form}>
                    <label className={contacts.contacts__label}>
                        <InputForm type="email" placeholder="name@mail.ru" title="Почта"/>
                        <InputForm type="text" placeholder="Сотрудничество" title="Тема сообщения" />
                    </label>
                    <InputMessage/>
                    <button disabled type="submit" className={contacts.contacts__submit}>Отправить сообщение</button>
                </form>
            </motion.div>
        </motion.section>
    )
}

export default Contacts;