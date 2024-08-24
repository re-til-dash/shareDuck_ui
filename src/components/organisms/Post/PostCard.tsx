import {  useContext, createContext } from "react";
import styled from "styled-components";
import Img, { typeImgProps } from "../../atoms/Img/Img";
import createTypoStyle from "../../../style/TypoStyle";
import Tag from "../../molecules/Tag/Tag";
import { typeCardProps, typeContentProps, typeInfoProps, typePostProps, typePropertyProps, typeTag, typeTagsProps, typeTitleProps } from "../../../types/post.type";


const initValue: typePostProps = {view: 'card'}
const PostContext = createContext(initValue);

function PostNumber({number, ...props}:typeInfoProps){
    const postNum = number?.toString().padStart(2, "0")
    return <div {...props}>#{postNum}</div>
}

function PostDate({date, ...props}:typeInfoProps){
    return <StyledDate {...props}>{date}</StyledDate>
}

function PostInfo({number, date, ...props}:typeInfoProps){
    return <StyledInfo {...props}>
            <PostNumber number={number} />
            <PostDate date={date} />
        </StyledInfo>
}

function PostTitle ({children, ...props}:typeTitleProps){
    return <StyledTitle {...props}>{children}</StyledTitle>
}

function PostTags ({tags, ...props}:typeTagsProps){
    return <StyledTagList { ...props}>
        {
            tags.map((tag: typeTag) => 
           <li key={tag.id} ><Tag.Secondary>{tag.content}</Tag.Secondary></li>
            )
        }
        </StyledTagList>
}

function PostProperty ({children, ...props}:typePropertyProps){
    return <StyledPostProperty {...props}>{children}</StyledPostProperty>
}

function PostImg({src, alt, ...props}:typeImgProps){
    const {view} = useContext(PostContext);
    return <StyledPostImg src={src} alt={alt} style={{aspectRatio: `${view == 'card' ? `1/1`: `7/1`}`}}  {...props}/>
}

function PostContent ({children, ...props}:typeContentProps){
    const {view} = useContext(PostContext);
    const style = view === 'card' ? {width: `100%`} : { height: `100%`, minWidth: `600px`};
    return <StyledPostContent style={{...style}} {...props}>{children}</StyledPostContent>
}

function Card ({children, ...props} :typeCardProps){
     const {view} = useContext(PostContext);
    return <StyledCard style={{width: `${view === 'card' ? 'fit-content' : '100%'}`}} {...props}>{children}</StyledCard>
}

function Post ({view='card', children, ...props}:typePostProps) {
    return <PostContext.Provider value={{view}}>
         <StyledPost  {...props}>{children}</StyledPost>
    </PostContext.Provider>
}

Post.Card = Card;
Post.Img = PostImg;
Post.Content = PostContent;
Post.Info = PostInfo;
Post.Title = PostTitle;
Post.Tags = PostTags;
Post.Property = PostProperty;

export default Post;


const StyledPost= styled.ul`
    list-style: none;
    display: flex;
    /* 임시 추가 */
    background: #F9FAFB;
    padding: 4px;
    width: 100%;
    flex-wrap: wrap;
`

const StyledCard = styled.li`
    height: fit-content;
    min-width: 316px;
    display: flex;
    position: relative;
`

const StyledPostContent = styled.div`
    position: absolute;
    inset: 0;
    margin-top: auto;
    margin-left: auto;
    width: fit-content;
    height: fit-content;
    border-radius: 8px;
    background: var(--wb-000, #FFF);
    padding: 16px;
     & > :not(:last-child){
        margin-bottom: 16px;
    }
`

const StyledPostImg = styled(Img)`
    border-radius:  8px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`

const StyledTitle = styled.h3`
 ${createTypoStyle('typo-head-24')}
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
`

const StyledTagList = styled.ul`
    list-style-type: none;
    display: flex;
    gap: 8px;

    & > li{
        flex-shrink: 0;
    }
`

const StyledPostProperty = styled.p`
    ${createTypoStyle('typo-body-18')}
`

const StyledInfo = styled.div`
    display: flex;
    gap: 10px;
    & > :last-child{
        margin-right: auto;
    }
`

const StyledDate = styled.div`
    ${createTypoStyle('typo-body-14')}
    color: var(--wb-500, #7A757B);
`