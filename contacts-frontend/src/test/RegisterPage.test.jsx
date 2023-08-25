import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import RegisterPage from '../pages/RegisterPage'

describe('<RegisterPage/>', () => {
  it('renders correctly', () => {
    const { container } = render(<RegisterPage />, { wrapper: BrowserRouter })

    const h2 = screen.getByRole('heading')
    const form = container.querySelector('form')

    expect(h2).toBeInTheDocument()
    expect(form).toBeInTheDocument()
  })

  it('is not rendered if user exist', () => {
    const user = { user: 'user' }
    const { container } = render(<RegisterPage user={user} />, {
      wrapper: BrowserRouter,
    })

    const h2 = screen.queryByRole('heading')
    const form = container.querySelector('form')

    expect(h2).toBeNull()
    expect(form).not.toBeInTheDocument()
  })
})
