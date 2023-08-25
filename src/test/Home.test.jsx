import '@testing-library/jest-dom'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'

describe('<Home/>', () => {
  it('render 2 link elements', () => {
    render(<Home />, { wrapper: BrowserRouter })
    const linkElements = screen.getAllByRole('link')

    expect(linkElements).toHaveLength(2)
  })

  it('', async () => {
    const user = userEvent.setup()
    render(<Home />, { wrapper: BrowserRouter })
    const loginLink = screen.getByText('Login')

    const login = vi.spyOn(user, 'click')
    await user.click(loginLink)

    expect(login).toHaveBeenCalled(1)
  })
})
