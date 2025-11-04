import type { Meta, StoryObj } from '@storybook/react'
import { ButtonArrow } from './index'

const meta = {
  title: 'Components/ButtonArrow',
  component: ButtonArrow,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1a1a1a' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonArrow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const OnDarkBackground: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export const OnLightBackground: Story = {
  parameters: {
    backgrounds: { default: 'light' },
  },
}
