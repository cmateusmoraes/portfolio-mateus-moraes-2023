import { render, screen } from '@testing-library/react'
import { Title } from './index'

jest.mock('gsap', () => ({
  gsap: {
    registerPlugin: jest.fn(),
    fromTo: jest.fn(() => ({
      kill: jest.fn(),
    })),
  },
  ScrollTrigger: jest.fn(),
}))

describe('Title', () => {
  it('renders children correctly', () => {
    render(<Title>Test Title</Title>)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('applies light theme when specified', () => {
    const { container } = render(<Title theme="light">Test Title</Title>)
    const wrapper = container.querySelector('.titleWrapper')
    expect(wrapper).toHaveClass('light')
  })

  it('renders with dark theme by default', () => {
    const { container } = render(<Title>Test Title</Title>)
    const wrapper = container.querySelector('.titleWrapper')
    expect(wrapper).not.toHaveClass('light')
  })

  it('renders line and title elements', () => {
    render(<Title>Test Content</Title>)
    expect(screen.getByTestId('line')).toBeInTheDocument()
    expect(screen.getByTestId('titleText')).toBeInTheDocument()
  })
})
