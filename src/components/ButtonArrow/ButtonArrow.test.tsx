import { render, screen } from '@testing-library/react'
import { ButtonArrow } from './index'

describe('ButtonArrow', () => {
  it('renders arrow image with alt text', () => {
    render(<ButtonArrow />)
    const image = screen.getByAltText('Seguir')
    expect(image).toBeInTheDocument()
  })

  it('has presentation role', () => {
    const { container } = render(<ButtonArrow />)
    const wrapper = container.querySelector('[role="presentation"]')
    expect(wrapper).toBeInTheDocument()
  })
})
