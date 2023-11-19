import Input, { InputProps } from "../../../../components/atoms/Input";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/Atoms/Input",
  component: Input
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: InputProps) => (
  <Input {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Nama Lengkap"
};
