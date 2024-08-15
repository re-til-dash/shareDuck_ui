import Img, { typeImgProps } from "../../atoms/Img/Img.tsx";
import createTypoStyle from "../../../style/TypoStyle";
import { createContext, PropsWithChildren, useContext } from "react";
import styled from "styled-components";

interface typeProfileImgProps extends typeImgProps {
  src: string;
  alt?: string;
}

interface typeProfileNameProps {
  accountName: string;
}

interface typeProfileIdProps {
  accountID: string;
}

export interface typeProfileProps
  extends PropsWithChildren,
    typeProfileIdProps,
    typeProfileNameProps,
    typeProfileImgProps {}

const ProfileContext = createContext({});

function Group({ children }: PropsWithChildren) {
  const props = useContext(ProfileContext);
  return <div {...props}>{children}</div>;
}

function Name({ accountName }: typeProfileNameProps) {
  const props = useContext(ProfileContext);
  return <ProfileName {...props}>{accountName}</ProfileName>;
}

function Id({ accountID }: typeProfileIdProps) {
  const props = useContext(ProfileContext);
  return <ProfileID {...props}>@{accountID}</ProfileID>;
}

function Image({ src, alt }: typeProfileImgProps) {
  const props = useContext(ProfileContext);
  return <ProfileImg src={src} alt={alt} {...props} />;
}

function Profile({ children, ...props }: PropsWithChildren) {
  return (
    <ProfileContext.Provider value={props}>
      <ProfileContainer {...props}>{children}</ProfileContainer>
    </ProfileContext.Provider>
  );
}

Profile.Img = Image;
Profile.Group = Group;
Profile.Name = Name;
Profile.Id = Id;

export default Profile;

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
  color: var(--wb-300);
`;
const ProfileImg = styled(Img)`
  border-radius: 50%;
`;
