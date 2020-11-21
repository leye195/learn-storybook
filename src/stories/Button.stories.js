import React from 'react';
import { Button } from './Button';

const buttonObject = {
  title: 'Common/Button',
  component: Button,
}; 

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Button'
}
Primary.parameters = {
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
    ]
  }
}

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  label: 'Button'
}

export const Normal = Template.bind({});
Normal.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Button'
}

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  label: 'Button',
  size: 'small',
  disabled: true,
}

export default buttonObject;