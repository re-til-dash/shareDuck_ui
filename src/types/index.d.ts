
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

import { typeInputProps } from "../components/atoms/CheckBox/CheckBox";
import { typeIconProps } from "../components/atoms/Icon/Icon";
import { typeImgProps } from "../components/atoms/Img/Img";
import { typeButtonProps } from "../components/molecules/Button/Button";
import { typeListButtonProps } from "../components/molecules/ListButton/ListButton";
import { typeProfileProps } from "../components/molecules/Profile/Profile";
import { typeTagProps } from "../components/molecules/Tag/Tag";
import { typeUseTimeStamp } from "../hooks/useTimeStamp";

export declare const CheckBox: React.FC<typeInputProps>;
export declare const Icon: React.FC<typeIconProps>;
export declare const Img: React.FC<typeImgProps>;
export declare const Input: React.FC<typeInputProps>;


export declare const Button: React.FC<typeButtonProps>;
export declare const FloatingButton: React.FC<typeButtonProps>;
export declare const ListButton: React.FC<typeListButtonProps>;
export declare const Profile: React.FC<typeProfileProps>;
export declare const Tag: React.FC<typeTagProps>;

export declare const useTimeStamp:typeUseTimeStamp;


type ShareDuck = {
  CheckBox,
  Icon,
  Img,
  Input,
  Button,
  FloatingButton,
  ListButton,
  Tag,
  Profile,
  useTimeStamp,
};

export default ShareDuck;
