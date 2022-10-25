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
import logoAcro from  "../images/workLogo.svg";


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
]

export const projects = [
    {
        id: "acro-furniture",
        about: "Онлайн магазин мебели с множеством фильтров выбора товара и оформлением онлайн заказа. Проработал архитектурную концепцию проекта под выбранный стек технологий, а также нарисовал UX/UI дизайн.",
        description: "По своей инициативе собрал команду из 4 Frontend разработчиков. Проработал архитектурную концепцию проекта под выбранный стек технологий, а также нарисовал UX/UI дизайн.",
        skills: [
            {icon: ts, title: "TypeScript"},
            {icon: redux, title: "Redux Toolkit"},
            {icon: react, title: "React"},
            {icon: jest, title: "Jest + Enzyme"},
            {icon: scss, title: "SCSS"},
            {icon: mui, title: "Material UI"},
            {icon: router, title: "React Router"},
            {icon: form, title: "React Hook Form"},
            {icon: axios, title: "Axios"},
        ],
        intro: {
            statusItems: [
                {title: "Дата разработки", value: "сентябрь 2022"},
                {title: "Категория", value: "Fullstack"},
                {title: "Статус", value: "MVP"}
            ],
            imageIntro: "",
            linkGitHub: "https://github.com/arco-furniture/arco-furniture",
            linkDemo: "https://arco-furniture.github.io/arco-furniture/",
            imageLogo: logoAcro,
        },
    }
]