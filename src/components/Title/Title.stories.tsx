import type { Meta, StoryObj } from '@storybook/react'
import { Title } from './index'

const meta = {
  title: 'Components/Title',
  component: Title,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'select',
      options: ['light', 'dark'],
    },
  },
} satisfies Meta<typeof Title>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: {
    children: 'Sample Title',
    theme: 'dark',
  },
}

export const Light: Story = {
  args: {
    children: 'Sample Title',
    theme: 'light',
  },
}
