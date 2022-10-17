import {motion} from "framer-motion";
import skills from "../scss/modules/skills.module.scss";
import Image from "next/image";
import React, {useState} from "react";

const MySkills = ({filterSkills}) => {
    const [isHovered, setHovered] = useState(false)
    const skillAnimation = {
        hidden: {
            transform: 'scale(0)',
            opacity: 0
        },
        visible: custom  => ({
            transform: 'scale(1)',
            opacity: 1,
            transition: {delay: custom * 0.04}
        })
    }

    console.log(isHovered)

    return(
        <motion.ul
            initial="hidden"
            animate="visible"
            whileInView="visible"
            viewport={{ amount: 0.7}}
            className={skills.skills__skillsGroup}
        >
            {
                filterSkills.map((item, i) => (
                    <motion.li
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        key={item.title}
                        className={skills.skills__skillsGroup__skill}
                        custom={i++}
                        variants={skillAnimation}
                    >
                        <Image width={60} height={60} className={skills.skills__icon} src={item.icon} />
                        <h3 className={skills.skills__title}>{item.title}</h3>
                    </motion.li>
                ))
            }
        </motion.ul>
    )
}

export default MySkills;