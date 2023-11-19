import { ComponentMeta, ComponentStory } from "@storybook/react";
import GameItem, {
  GameItemProps
} from "../../../../components/molecules/GameItem";

export default {
  title: "Components/Molecules/GameItem",
  component: GameItem
} as ComponentMeta<typeof GameItem>;

const Template: ComponentStory<typeof GameItem> = (args: GameItemProps) => (
  <GameItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Super Mech",
  category: "Mobile",
  thumbnail: "Thumbnail-1"
};