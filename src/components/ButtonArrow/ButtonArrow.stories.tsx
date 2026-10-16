import type { Meta, StoryObj } from '@storybook/react'
import { ButtonArrow } from './index'

const meta = {
  title: 'Components/ButtonArrow',
  component: ButtonArrow,
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonArrow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
