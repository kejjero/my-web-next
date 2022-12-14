import insta from "../images/socials/instagram.svg"
import github from "../images/socials/github.svg"
import vk from "../images/socials/vk.svg"
import telegram from "../images/socials/telegram.svg"
import linkedin from "../images/socials/linkedin.svg"
import {
    html, css, scss, js, ts, react, router, redux, form, axios, mui, next,
    jest, webpack, nodejs, express, mongodb, nest, figma, illustrator,
    photoshop, after_effects
} from "../images/skills"

import {mockup_1, mockup_2, mockup_3, mockup_4, mockup_5} from "../images/acro"
import logoAcro from  "../images/workLogo.svg";
import work1 from "../images/work.jpg";
import work2 from "../images/work2.png";
import work3 from "../images/work3.jpg";


export const ARRAY_MENU = [
    {name: 'Обо мне', link: "#about"},
    {name: 'Навыки', link: "#skills"},
    {name: 'Услуги', link: "#service"},
    {name: 'Проекты', link: "#portfolio"},
    {name: 'Контакты', link: "#contacts"},
]

export const ARRAY_SOCIALS = [
    {icon: insta, link: "https://www.instagram.com/kejero.o"},
    {icon: github, link: "https://github.com/kejjero"},
    {icon: vk, link: "https://vk.com/kejera"},
    {icon: telegram, link: "https://t.me/kejRRR"},
    {icon: linkedin, link: "https://www.linkedin.com/in/maxim-peters-560711254/"},
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

export const works = [
    {
        title: 'АкроМебель', about: 'Онлайн-магазин мебели', tag: 'Frontend', image: work1, linkId: "acro-furniture", link: "https://github.com/arco-furniture/arco-furniture",
        stack: [
            {skill: "TypeScript"}, {skill: "React"}, {skill: "Redux Toolkit"},
            {skill: "Jest + Enzyme"}, {skill: "Material UI"}, {skill: "React Hook Form"},
            {skill: "SCSS"}, {skill: "Lodash"}, {skill: "React Loadable"},
            {skill: "Axios"}, {skill: "Swiper"}
        ]
    },
    {
        title: 'Марсик', about: 'Доставка марсианской еды',tag: 'Frontend', image: work2, linkId: "marsik", link: "https://github.com/kejjero/mars-food",
        stack: [
            {skill: "TypeScript"}, {skill: "React"}, {skill: "Redux Toolkit"},
            {skill: "SCSS"}, {skill: "Material UI"}, {skill: "Swiper"},
            {skill: "Lodash"}, {skill: "React Router"}, {skill: "React Skeleton"},
            {skill: "Axios"}, {skill: "LottieFiles animations"},
        ]
    },
    {
        title: 'Mesto', about: 'Сервис загрузки фотографий из путешествий',tag: 'Fullstack', image: work3, linkId: "mesto", link: "https://github.com/kejjero/react-mesto-api-full",
        stack: [
            {skill: "HTML"}, {skill: "CSS"}, {skill: "React"}, {skill: "Webpack"},
            {skill: "React Router"}, {skill: "Node.js"}, {skill: "MongoDB"},
            {skill: "Express.js"},
        ]
    }
]