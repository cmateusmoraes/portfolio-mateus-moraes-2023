import { render } from '@testing-library/react'
import { ButtonArrow } from './index'

describe('ButtonArrow', () => {
  it('renders without crashing', () => {
    const { container } = render(<ButtonArrow />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('renders with correct role', () => {
    const { container } = render(<ButtonArrow />)
    const button = container.querySelector('[role="presentation"]')
    expect(button).toBeInTheDocument()
  })

  it('renders an image with correct attributes', () => {
    const { container } = render(<ButtonArrow />)
    const image = container.querySelector('img')
    expect(image).toHaveAttribute('alt', 'Seguir')
    expect(image).toHaveAttribute('width', '20')
    expect(image).toHaveAttribute('height', '20')
  })

  it('has the correct className', () => {
    const { container } = render(<ButtonArrow />)
    expect(container.firstChild).toHaveClass('buttonArrow')
  })
})
