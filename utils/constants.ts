import insta from "../images/socials/instagram.svg"
import github from "../images/socials/github.svg"
import vk from "../images/socials/vk.svg"
import telegram from "../images/socials/telegram.svg"
import {
    html, css, scss, js, ts, react, router, redux, form, axios, mui, next,
    jest, webpack, nodejs, express, mongodb, nest, figma, illustrator,
    photoshop, after_effects
} from "../images/skills"

import {mockup_1, mockup_2, mockup_3, mockup_4, mockup_5} from "../images/acro"

export const ARRAY_MENU = [
    {name: 'Обо мне'},
    {name: 'Навыки'},
    {name: 'Проекты'},
    {name: 'Контакты'},
]

export const ARRAY_SOCIALS = [
    {icon: insta},
    {icon: github},
    {icon: vk},
    {icon: telegram},
]

export const SKILLS = [
    {title: "HTML", icon: html, description: "", activeIndex: 0},
    {title: "CSS", icon: css, description: "", activeIndex: 0},
    {title: "SCSS", icon: scss, description: "", activeIndex: 0},
    {title: "JavaScript", icon: js, description: "", activeIndex: 0},
    {title: "TypeScript", icon: ts, description: "", activeIndex: 0},
    {title: "React", icon: react, description: "", activeIndex: 0},
    {title: "Redux", icon: redux, description: "", activeIndex: 0},
    {title: "Next.js", icon: next, description: "", activeIndex: 0},
    {title: "Jest + Enzyme", icon: jest, description: "", activeIndex: 0},
    {title: "WebPack", icon: webpack, description: "", activeIndex: 0},
    {title: "Material UI", icon: mui, description: "", activeIndex: 0},
    {title: "React Router", icon: router, description: "", activeIndex: 0},
    {title: "React Hook Form", icon: form, description: "", activeIndex: 0},
    {title: "Axios", icon: axios, description: "", activeIndex: 0},
    {title: "Node.js", icon: nodejs, description: "", activeIndex: 1},
    {title: "Express.js", icon: express, description: "", activeIndex: 1},
    {title: "MongoDB", icon: mongodb, description: "", activeIndex: 1},
    {title: "Nest.js", icon: nest, description: "", activeIndex: 1},
    {title: "Figma", icon: figma, description: "", activeIndex: 2},
    {title: "Illustrator", icon: illustrator, description: "", activeIndex: 2},
    {title: "Photoshop", icon: photoshop, description: "", activeIndex: 2},
    {title: "After Effects", icon: after_effects, description: "", activeIndex: 2},
]

export const mockupsAcro = [
    {mockup: mockup_1},
    {mockup: mockup_2},
    {mockup: mockup_3},
    {mockup: mockup_4},
    {mockup: mockup_5},
]