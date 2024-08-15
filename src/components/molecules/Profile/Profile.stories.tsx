
import Profile, { typeProfileProps }  from "./Profile";
import { Meta } from "@storybook/react";

const meta: Meta<typeProfileProps> = {
  component: Profile,
  argTypes:{
    src:{
      control: 'file'
    },
    alt:{
      control: 'text'
    },
    accountID:{
      control: 'text'
    },
    accountName:{
      control: 'text'
    },
  }
};

export default meta;

export function ProfileStory(args: typeProfileProps) {
  return <Profile>
        <Profile.Img src={args.src ?? "https://via.placeholder.com/150"} alt={args.alt}/>
        <Profile.Group>
          <Profile.Name accountName={args.accountName ?? "egggg"} />
          <Profile.Id  accountID={args.accountID ?? "eggggggg"}/>
        </Profile.Group>
     </Profile>;
}
