import { Meta } from "@storybook/react";
import Post from "./PostCard";
import { typePostStory } from "../../../types/post.type";
import splitComma from "../../../utils/splitComma";
import pushMissing from "../../../utils/pushMissing";
const tags = [
    {
        id: 'tag_',
        content: '#오늘'
    }
]
const meta : Meta<typePostStory> = {
    component: Post,
    argTypes:{
        src: {
            control: 'file'
        },
        alt: {
            control: 'text'
        },
        title: {
            control: 'text'
        },
        tags: {
            control: 'text'
        },
        property: {
            control: 'text'
        },
        number:{
            control: 'number'
        },
        date:{
            control: 'date'
        }
    },
    args:{
        src: "https://via.placeholder.com/200",
        title: "게시글 제목",
        tags: "",
        property: '55',
        number: 1,
    }
}

export default meta;



export function CardStory(args:typePostStory){
        //,를 기준으로 나누고 빈 문자열은 제거
        const inputTexts = splitComma(args.tags).filter(text => !!text)
        //id임의 생성하여 객체로 변환
        const inputTags = inputTexts.map((tag, index) => ({id: index+'_tag', content: tag}))
        //중복된 태그를 제외한 태그만 추가
        const newTags = pushMissing(tags, inputTags);
    return <Post>
        <Post.Card>
            <Post.Img src={args.src} alt={args.alt ?? args.title} />
            <Post.Content>
                <Post.Info number={args.number} date={args.date}/>
                <Post.Title>{args.title}</Post.Title>
                <Post.Tags tags={newTags}/>
                <Post.Property>{args.property}</Post.Property>
            </Post.Content>
        </Post.Card>
    </Post>
}

export function ListStory(args:typePostStory){
        //,를 기준으로 나누고 빈 문자열은 제거
        const inputTexts = splitComma(args.tags).filter(text => !!text)
        //id임의 생성하여 객체로 변환
        const inputTags = inputTexts.map((tag, index) => ({id: index+'_tag', content: tag}))
        //중복된 태그를 제외한 태그만 추가
        const newTags = pushMissing(tags, inputTags);
    return <Post view="list">
        <Post.Card>
            <Post.Img src={args.src} alt={args.alt ?? args.title} />
            <Post.Content>
                <Post.Info number={args.number} date={args.date}/>
                <Post.Title>{args.title}</Post.Title>
                <Post.Tags tags={newTags}/>
                <Post.Property>{args.property}</Post.Property>
            </Post.Content>
        </Post.Card>
    </Post>
}