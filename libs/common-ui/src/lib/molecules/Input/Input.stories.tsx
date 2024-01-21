import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta = {
  title: 'UI/Molecules/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
    id: 'txt-input',
    label: 'Write something:',
  },
};

export const Primary: Story = {
  args: {
    type: 'text',
    id: 'fname',
    label: 'First name:',
    required: true,
  },
};

export const Secondary: Story = {
  args: {
    type: 'email',
    id: 'email-input',
    label: 'Type an e-mail:',
    value: 'e.g. xyz@gmail.com',
  },
};

export const Tertiary: Story = {
  args: {
    type: 'checkbox',
    id: 'checkbox-input',
    label: 'Check if you agree: ',
  },
};
