import Profile, { typeProfileProps } from "./Profile";
import { Meta } from "@storybook/react";

const meta: Meta<typeof Profile> = {
  component: Profile,
  args: {
    src: "https://via.placeholder.com/150",
    alt: "placeholder 150",
    accountName: "egggg",
    accountID: "egg",
  },
};

export default meta;

export function ProfileStory(args: typeProfileProps) {
  return <Profile {...args} />;
}
