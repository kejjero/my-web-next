import insta from "../images/socials/instagram.svg"
import github from "../images/socials/github.svg"
import vk from "../images/socials/vk.svg"
import telegram from "../images/socials/telegram.svg"
import linkedin from "../images/socials/linkedin.svg"
import {
    scss, js, ts, react, router, redux, form, axios, mui, ant, next,
    jest, webpack, nodejs, express, mongodb, nest, figma, illustrator,
    photoshop, after_effects, ubuntu, nginx, passport, query, cinema, jwt,
    storybook, mobx, rtl, rollup
} from "../images/skills"
import work1 from "../images/work.jpg";
import doka from '../images/doka.png'

export const ARRAY_MENU = [
    {name: 'Обо мне', link: "#about"},
    {name: 'Навыки', link: "#skills"},
    {name: 'Услуги', link: "#service"},
    {name: 'Проекты', link: "#portfolio"},
    {name: 'Контакты', link: "#contacts"},
]

export const MARQUEE_ITEMS = [
    "Design",
    "REST API",
    "Frontend",
    "Nest.js",
    "TypeScript",
    "Backend",
    "CGI",
    "React",
    "SPA / SSR"
]

export const ARRAY_SOCIALS = [
    {icon: insta, link: "https://www.instagram.com/kejero.o"},
    {icon: github, link: "https://github.com/kejjero"},
    {icon: vk, link: "https://vk.com/kejera"},
    {icon: telegram, link: "https://t.me/kejRRR"},
    {icon: linkedin, link: "https://www.linkedin.com/in/maxim-peters-560711254/"},
]

export const SKILLS = [
    {title: "JavaScript", icon: js, description: "", activeIndex: 0},
    {title: "TypeScript", icon: ts, description: "", activeIndex: 0},
    {title: "React", icon: react, description: "", activeIndex: 0},
    {title: "Redux", icon: redux, description: "", activeIndex: 0},
    {title: "MobX", icon: mobx, description: "", activeIndex: 0},
    {title: "SCSS / modules", icon: scss, description: "", activeIndex: 0},
    {title: "Axios", icon: axios, description: "", activeIndex: 0},
    {title: "Ant Design", icon: ant, description: "", activeIndex: 0},
    {title: "WebPack", icon: webpack, description: "", activeIndex: 0},
    {title: "Rollup", icon: rollup, description: "", activeIndex: 0},
    {title: "Storybook", icon: storybook, description: "", activeIndex: 0},
    {title: "Material UI", icon: mui, description: "", activeIndex: 0},
    {title: "Jest & Enzyme", icon: jest, description: "", activeIndex: 0},
    {title: "RTL", icon: rtl, description: "", activeIndex: 0},
    {title: "React Query", icon: query, description: "", activeIndex: 0},
    {title: "Next.js", icon: next, description: "", activeIndex: 0},
    {title: "React Hook Form", icon: form, description: "", activeIndex: 0},
    {title: "React Router", icon: router, description: "", activeIndex: 0},
    {title: "Node.js", icon: nodejs, description: "", activeIndex: 1},
    {title: "Express.js", icon: express, description: "", activeIndex: 1},
    {title: "MongoDB", icon: mongodb, description: "", activeIndex: 1},
    {title: "Nest.js", icon: nest, description: "", activeIndex: 1},
    {title: "Passport.js", icon: passport, description: "", activeIndex: 1},
    {title: "JWT", icon: jwt, description: "", activeIndex: 1},
    {title: "Ubuntu", icon: ubuntu, description: "", activeIndex: 1},
    {title: "Nginx", icon: nginx, description: "", activeIndex: 1},
    {title: "Figma", icon: figma, description: "", activeIndex: 2},
    {title: "Illustrator", icon: illustrator, description: "", activeIndex: 2},
    {title: "Photoshop", icon: photoshop, description: "", activeIndex: 2},
    {title: "After Effects", icon: after_effects, description: "", activeIndex: 2},
    {title: "Cinema 4D", icon: cinema, description: "", activeIndex: 2},
]

export const works = [
    {
        title: 'АркоМебель', about: 'Онлайн-магазин мебели', tag: 'Проекты', image: work1, linkId: "acro-furniture", link: "https://github.com/arco-furniture/arco-furniture",
        stack: [
            {skill: "TypeScript"}, {skill: "React"}, {skill: "Redux Toolkit"},
            {skill: "React Query"}, {skill: "Jest & Enzyme"}, {skill: "Material UI"},
            {skill: "React Hook Form"}, {skill: "SCSS/modules"}, {skill: "Axios"},
            {skill: "Nest.js"}, {skill: "Nest.js"}, {skill: "MongoDB"},
        ]
    },
    {
        title: 'Дока', about: 'Контрибьютер по JavaScript-событию change()',tag: 'Open Source', image: doka, linkId: "doka", link: "https://github.com/doka-guide/content/pull/4057",
        stack: []
    }
]