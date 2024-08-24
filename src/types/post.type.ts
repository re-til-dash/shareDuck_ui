import { HTMLAttributes } from "react"

export interface typeCardProps extends HTMLAttributes<HTMLLIElement>{}

export interface typeTitleProps extends HTMLAttributes<HTMLHeadElement>{}

export interface typeContentProps extends HTMLAttributes<HTMLDivElement>{}

export interface typeInfoProps extends typeContentProps{
    number?: number;
    date?: string;
}

export interface typePropertyProps extends HTMLAttributes<HTMLParagraphElement>{}

export type typeTag = {
    id: string,
    content: string
}

export interface typeTagsProps extends HTMLAttributes<HTMLUListElement>{
    tags: typeTag[]
}

export interface typePostProps extends HTMLAttributes<HTMLUListElement> {
    view?: 'list' | 'card'
}

export interface typePostStory{
    src: string;
    alt?: string;
    tags: string;
    title: string;
    property?: string;
    number: number;
    date: string;
}