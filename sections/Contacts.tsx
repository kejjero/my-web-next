import contacts from "../scss/modules/contacts.module.scss"
import TopSection from "../components/TopSection";
import hash from "../images/hash.svg"
import Image from "next/image";
import React from "react";
import {motion} from "framer-motion";
import {useForm} from "react-hook-form";
import s from "../scss/modules/contacts.module.scss";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const Contacts: React.FC = () => {
    const onSubmit = data => console.log(data);
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

    const schema = yup.object().shape({
        email: yup.string()
            .required("Вы не заполнили")
            .email('некорректная почта'),
        title: yup.string()
            .required("Вы не заполнили")
            .min(2, 'минимум 2 символа')
            .max(35, 'максимум 35 символов'),
        message: yup.string()
            .required("Вы не заполнили")
            .min(2, 'минимум 5 символов')
            .max(250, 'максимум 250 символов'),
    })

    type FormValues = {
        email: string;
        title: string;
        message: string;
    };


    const {register, handleSubmit, formState: {errors}} = useForm<FormValues>({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    })

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.2, once: true}}
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
                <form noValidate className={contacts.contacts__form} onSubmit={handleSubmit(onSubmit)}>
                    <label className={contacts.contacts__label}>
                        <div className={s.contacts__inputWrapper}>
                            <span className={s.contacts__inputSpan}>Почта</span>
                            <input
                                className={s.contacts__input}
                                type="email"
                                placeholder="name@mail.ru"
                                title="Почта"
                                {...register("email", {required: true})}
                            />
                            {
                                <span className={s.contacts__error}>{errors?.email?.message}</span>
                            }
                        </div>
                        <div className={s.contacts__inputWrapper}>
                            <span className={s.contacts__inputSpan}>Тема сообщения</span>
                            <input
                                className={s.contacts__input}
                                type="text"
                                placeholder="Сотрудничество"
                                title="Почта"
                                {...register("title", {required: true})}
                            />
                            <span className={s.contacts__error}>{errors?.title?.message}</span>
                        </div>
                    </label>
                    <div className={s.contacts__inputWrapper}>
                        <span className={s.contacts__inputSpan}>Сообщение</span>
                        <textarea
                            rows={7}
                            className={s.contacts__input}
                            placeholder="Текст сообщения"
                            {...register("message", {required: true})}
                        />
                        <span className={s.contacts__error}>{errors?.message?.message}</span>
                    </div>
                    <button
                        type="submit"
                        className={contacts.contacts__submit}
                    >
                        Отправить сообщение
                    </button>
                </form>
            </motion.div>
        </motion.section>
    )
}

export default Contacts;