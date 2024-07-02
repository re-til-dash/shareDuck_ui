import createTypoStyle from "../../style/TypoStyle";
import Img, { typeImgProps } from "../atoms/Img";
import styled from "styled-components";

export interface typeProfileProps extends typeImgProps {
  accountName: string;
  accountID: string;
}

export default function Profile({
  src,
  alt,
  accountName,
  accountID,
}: typeProfileProps) {
  return (
    <ProfileContainer>
      <ProfileImg src={src} alt={alt} />
      <div>
        <ProfileName>{accountName}</ProfileName>
        <ProfileID>@{accountID}</ProfileID>
      </div>
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div`
  display: flex;
  width: 100%;

  & > :first-child {
    width: 64px;
    height: 64px;
  }

  & > :last-child {
    margin: auto;
    margin-left: 21px;
  }
`;

const CSSProfileName = createTypoStyle("typo-body-18-medium");
const CSSProfileID = createTypoStyle("typo-body-14");

const ProfileName = styled.p`
  ${CSSProfileName}
`;
const ProfileID = styled.p`
  ${CSSProfileID}
  color: var(--color-wb-300, #BFB7C1);
`;
const ProfileImg = styled(Img)`
  border-radius: 50%;
`;
