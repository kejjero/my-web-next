import {motion} from "framer-motion";
import skills from "../scss/modules/skills.module.scss";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { Grid, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

const SwiperSkills = ({filterSkills, width}) => {
  const [swiper, setSwiper] = useState(null);
  const skillAnimation = {
    hidden: {
      transform: 'scale(0)',
      opacity: 0
    },
    visible: custom => ({
      transform: 'scale(1)',
      opacity: 1,
      transition: {delay: custom * 0.04}
    })
  }

  useEffect(() => {
    swiper?.slideTo(0)
  },[filterSkills])

  const slides = filterSkills.map((item: any, index) => (
    <SwiperSlide key={item.title}>
      <motion.div
        key={item.title}
        className={skills.skills__skillsGroup__skill}
        custom={index++}
        variants={skillAnimation}
      >
        <Image alt={item.title} width={60} height={60} src={item.icon}/>
        <h3 className={skills.skills__title}>{item.title}</h3>
      </motion.div>
    </SwiperSlide>
    )
  )


  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      whileInView="visible"
      viewport={{amount: 0.7}}
      className={skills.skills__skillsGroup}
    >
        <Swiper
          onSwiper={setSwiper}
          slidesPerView={width > 900 ? 5 : 3}
          grid={{
            fill: 'row',
            rows: 2,
          }}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          className={skills.skills__swiperDesk}
        >
          {slides}
        </Swiper>
    </motion.ul>
  )
}

export default SwiperSkills;