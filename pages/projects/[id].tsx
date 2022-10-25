import {useRouter} from "next/router";
import s from "../../scss/modules/project.module.scss"
import Image from "next/image"
import work from "../../images/work.jpg"
import TopSection from "../../components/TopSection";
import {mockupsAcro} from "../../utils/constants"
import {Swiper, SwiperSlide} from "swiper/react";
import {projects} from "../../utils/constants"
import 'swiper/css';
import { motion } from "framer-motion";
import {useState} from "react";


const Project = () => {
    const {query} = useRouter()
    const findWork = projects.find((item) => item.id === query.id)
    const [activeIndex, setActiveIndex] = useState(0);
    const slides = mockupsAcro.map((item: any, index) => (
            <SwiperSlide key={index} className={s.project__swiperSlide}>
                <Image src={item.mockup} className={s.project__image} />
            </SwiperSlide>
        )
    )

    const animationLeft = {
        hidden: {
            x: -100,
            opacity: 0
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.1}
        })
    }

    const animationRight = {
        hidden: {
            x: 100,
            opacity: 0
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.1}
        })
    }

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
        <section className={s.project}>
            <motion.div
                className={s.project__wrapper}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5, once: true }}
            >
                <div className={s.project__workLogo}>
                    <Image src={findWork?.intro?.imageLogo} width={301}/>
                </div>
                <div className={s.project__bottomLine}>
                    <motion.ul
                        className={s.project__stats}
                        custom={2}
                        variants={animationLeft}
                    >
                        {
                            findWork?.intro?.statusItems.map((item, i) => (
                                <li className={s.project__statsItem} key={item.title}>
                                    <h4 className={s.project__statsTitle}>{item.title}</h4>
                                    <span className={s.project__statsValue}>{item.value}</span>
                                </li>
                            ))
                        }
                    </motion.ul>
                    <motion.div
                        className={s.project__lineButtons}
                        custom={2}
                        variants={animationRight}
                    >
                        <a href={findWork?.intro.linkDemo}>
                            <button className={s.project__lineButton_full}>Demo</button>
                        </a>
                        <a href={findWork?.intro.linkGitHub}>
                            <button className={s.project__lineButton}>GitHub</button>
                        </a>
                    </motion.div>
                </div>
                <div className={s.project__imageWrapper}>
                    <div className={s.project__background}/>
                    <Image className={s.project__imageWork} src={work}/>
                </div>
            </motion.div>
            <div className={s.project__content}>
                <TopSection title="АркоМебель" subtitle="Онлайн магазин мебели"/>
                <div className={s.project__aboutProject}>
                    <div className={s.project__topWrapper}>
                        <div className={s.project__aboutItem}>
                            <h5 className={s.project__aboutTitle}>О проекте</h5>
                            <p className={s.project__paragraph}>{findWork?.about}</p>
                        </div>
                        <div className={s.project__addItem}>
                            <h5 className={s.project__aboutTitle}>Дополнительно</h5>
                            <p className={s.project__paragraph}>{findWork?.description}</p>
                        </div>
                        <div className={s.project__skills}>
                            <h5 className={s.project__aboutTitle}>Стек технологий</h5>
                            <ul className={s.project__skillsGroup}>
                                {
                                    findWork?.skills.map((item, i) => (
                                        <li className={s.project__skillsItem} key={i}>
                                            <Image src={item?.icon} height={40} width={40}/>
                                            <h6 className={s.project__skillsTitle}>{item?.title}</h6>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={s.project__swiperWrapper}>
                    <Swiper
                        loop
                        spaceBetween={50}
                        slidesPerView={1}
                    >
                        {slides}
                    </Swiper>
                </div>
                <ul className={s.project__tape}>
                    <li className={s.project__tapeItem}></li>
                    <li className={s.project__tapeItem}></li>
                    <li className={s.project__tapeItem}></li>
                    <li className={s.project__tapeItem}></li>
                </ul>
            </div>
        </section>
    )
}

export default Project;