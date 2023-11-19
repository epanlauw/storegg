import { ComponentMeta, ComponentStory } from "@storybook/react";
import ReachItem, {
  ReachItemProps
} from "../../../../components/molecules/ReachItem";

export default {
  title: "Components/Molecules/ReachItem",
  component: ReachItem
} as ComponentMeta<typeof ReachItem>;

const Template: ComponentStory<typeof ReachItem> = (
  args: Partial<ReachItemProps>
) => <ReachItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "290M+",
  subtitle: "Players Top Up",
  isLast: false
};
