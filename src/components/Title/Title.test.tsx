import { render, screen } from '@testing-library/react'
import { Title } from './index'

// Mock GSAP
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

  it('applies dark theme by default', () => {
    const { container } = render(<Title>Test Title</Title>)
    const wrapper = container.querySelector('.titleWrapper')
    expect(wrapper).not.toHaveClass('light')
  })

  it('applies light theme when specified', () => {
    const { container } = render(<Title theme="light">Test Title</Title>)
    const wrapper = container.querySelector('.titleWrapper')
    expect(wrapper).toHaveClass('light')
  })

  it('renders line element', () => {
    render(<Title>Test Title</Title>)
    expect(screen.getByTestId('line')).toBeInTheDocument()
  })

  it('renders title text in a span', () => {
    render(<Title>Test Title</Title>)
    const titleText = screen.getByTestId('titleText')
    expect(titleText).toBeInTheDocument()
    expect(titleText.tagName).toBe('SPAN')
  })
})
