import { StaticImageData } from "next/image"

export interface ILink {
    children: JSX.Element
    href: string
    target?: string
}

export interface  IButton {
    fill?: boolean
    children: JSX.Element | string
    width?: string | number
}

export interface  ICardService {
    title: string
    text: string
}

export interface  ILabel {
    width?: number
    height?: number
    styles?: any
    isBlack?: boolean
}

export interface  ILayout {
    children: JSX.Element
}

export interface ITitle {
    children: string
}

export interface ITopSection {
    title: string
    subtitle: string
    isBlack?: boolean
}

export interface IWork {
    item: any
}
