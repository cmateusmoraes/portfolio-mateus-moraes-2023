import type { Meta, StoryObj } from '@storybook/react'
import { Title } from './index'

const meta = {
  title: 'Components/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
    },
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Title>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: {
    children: 'Sobre',
    theme: 'dark',
  },
}

export const Light: Story = {
  args: {
    children: 'Portfolio',
    theme: 'light',
  },
}

export const LongText: Story = {
  args: {
    children: 'Desenvolvedor Front-End Sênior',
    theme: 'dark',
  },
}
