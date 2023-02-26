import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Components/Button', // story 이름
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'small',
}; // Small의 props 지정

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'large',
}; // Large의 props 지정
