import { ComponentMeta, ComponentStory } from "@storybook/react";
import CategoryFooterItem, {
  CategoryFooterItemProps
} from "../../../../components/molecules/CategoryFooterItem";

export default {
  title: "Components/Molecules/CategoryFooterItem",
  component: CategoryFooterItem
} as ComponentMeta<typeof CategoryFooterItem>;

const Template: ComponentStory<typeof CategoryFooterItem> = (
  args: CategoryFooterItemProps
) => <CategoryFooterItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "About Us",
  link: "/about-us"
};
