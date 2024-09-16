import {  DetailsHTMLAttributes, MouseEventHandler, useState } from "react";
import styled from "styled-components";
import createTypoStyle from "../../../style/TypoStyle";
import Icon from "../../atoms/Icon/Icon";

interface typeDetailsProps extends DetailsHTMLAttributes<HTMLDetailsElement> {
  lists: string[];
}


const CSSButtonText = createTypoStyle("typo-body-14-bold");

function Details({
  children,
  lists = [],
  open = false,
  ...props
}: typeDetailsProps) {

  const [selected, setSelected] = useState("Overview");

  const handleClickList = (list: string):MouseEventHandler=> (e) => {
    e.stopPropagation();
    setSelected(list)
  }

  return (
    <StyledDetails open={open} {...props}>
      <summary  >
        {children}
      </summary>
       {lists.length && <StyledUlist>{lists.map((list,index) => <StyledList isSelected={selected === list} key={"list" +index} onClick={handleClickList(list)}>{list}</StyledList>)}</StyledUlist>}
    </StyledDetails>
  );
}

Details.Text = styled.p`
  color: var(--wb-700);
  flex-shrink: 0;
  flex-basis: 100%;

  ${CSSButtonText}
`;

Details.Icon = Icon;

const StyledDetails = styled.details`
  & > * {
    list-style-type: none; /* 그 외의 브라우저용 사용자 정의 스타일 */
  }
  & > summary{
      padding: 14px 8px;
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 16px;
  }

  & > summary > :nth-child(2){
    margin-right: auto;
  }

  &[open] > summary, &:hover > summary {
    border-radius: 8px;
    background: var(--vio-000, #FAEFFE);
  }
`

const StyledUlist = styled.ul`
  margin-left: auto;
  width: calc(100% - 52px);
 
`

const StyledList = styled.li<{ isSelected: boolean}>`
    width: 100%;
    background-color: var(--wb-000);
    border: none;
    border-radius: 8px;
    height: 52px;
    padding: 0 8px;
    display: flex;
    align-items: center;
    color: ${props => (props.isSelected ? "var(--vio-500)" : "var(--wb-500)")};
    &:hover {
      ${props =>
        !props.isSelected && "background-color: rgba(20, 19, 20, 0.05);"}
    }
    ${CSSButtonText}
`

export default Details;
