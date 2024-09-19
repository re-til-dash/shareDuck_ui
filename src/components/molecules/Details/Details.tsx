import {  DetailsHTMLAttributes, MouseEventHandler, ReactNode, useState } from "react";
import styled from "styled-components";
import createTypoStyle from "../../../style/TypoStyle";
import Icon from "../../atoms/Icon/Icon";
import List from "../../atoms/List/List";

interface typeDetailsProps extends DetailsHTMLAttributes<HTMLDetailsElement> {
  lists: {id: string, list: ReactNode }[];
}

const MAX_WIDTH = "152px";

const CSSButtonText = createTypoStyle("typo-body-14-bold");

function Details({
  children,
  lists,
  open = false,
  ...props
}: typeDetailsProps) {

  const [selected, setSelected] = useState("Overview");

  const handleClickList = (id: string):MouseEventHandler=> (e) => {
    e.stopPropagation();
    setSelected(id)
  }

  return (
    <StyledDetails open={open} {...props}>
      <summary  >
        {children}
      </summary>
       {lists.length > 0 && 
       <StyledUlist>
        {lists.map(({id, list}) => 
          (<StyledList isSelected={selected == id} key={id} onClick={handleClickList(id)}>
        {list}
        </StyledList>))}
        </StyledUlist>}
    </StyledDetails>
  );
}

Details.Text = styled.span`
  ${CSSButtonText}

  @media  (max-width: ${MAX_WIDTH}) {
    &{
      display: none;
    }
  }
`;

Details.Icon = Icon;

const StyledDetails = styled.details`
  width: 100%;
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

  @media  (max-width:  ${MAX_WIDTH}) {
    &{
      margin: 0;
    }

    & > li img {
      width: 16px;
    }
  }
 
`

const StyledList = styled(List)<{ isSelected: boolean}>`
    color: ${props => props.isSelected ? "var(--vio-500)" : "var(--wb-300)"};

    &:hover {
      ${props =>
        !props.isSelected && "background-color: rgba(20, 19, 20, 0.05);"}
    }
    ${CSSButtonText}

  
`

export default Details;
