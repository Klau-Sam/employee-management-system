import { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const meta = {
  title: 'UI/Molecules/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof Select>;

export const _Select: Story = {
  args: {
    label: 'Select day of the week:',
    options: [
      { value: 'monday', label: 'Monday' },
      { value: 'tuesday', label: 'Tuesday' },
      { value: 'tuesday', label: 'Wednesday' },
      { value: 'tuesday', label: 'Thursday' },
      { value: 'tuesday', label: 'Friday' },
    ],
  },
};
