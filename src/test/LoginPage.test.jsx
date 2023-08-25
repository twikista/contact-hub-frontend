import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import LoginPage from '../pages/LoginPage'
import { BrowserRouter } from 'react-router-dom'

describe('<LoginPage/>', () => {
  it('is correctly rendered', () => {
    const { container } = render(<LoginPage />, { wrapper: BrowserRouter })
    const form = container.querySelector('form')
    const h2 = screen.getByRole('heading')

    expect(h2).toBeInTheDocument()
    expect(form).toBeInTheDocument()
  })

  it('is not rendered if user exist', () => {
    const user = { user: 'user' }
    const { container } = render(<LoginPage user={user} />, {
      wrapper: BrowserRouter,
    })

    const h2 = screen.queryByRole('heading')
    const form = container.querySelector('form')

    expect(h2).toBeNull()
    expect(form).toBeNull()
  })
})
