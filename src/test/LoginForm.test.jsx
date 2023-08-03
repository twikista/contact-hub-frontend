import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import LoginForm from '../components/LoginForm'

describe('<LoginForm/>', () => {
  const handleLogin = vi.fn()
  it('render Login form', () => {
    render(<LoginForm handleLogin={handleLogin} />)
    const textInput = screen.getByRole('textbox')
    const passWordInput = screen.getByPlaceholderText('password')

    expect(textInput).toBeInTheDocument()
    expect(passWordInput).toBeInTheDocument()
  })

  it('input values are updated correctly', async () => {
    const user = userEvent.setup()
    render(<LoginForm handleLogin={handleLogin} />)

    const inputElement = screen.getByRole('textbox')
    const passWordInput = screen.getByPlaceholderText('password')
    await user.type(inputElement, 'smith@gmail.com')
    await user.type(passWordInput, '123456')

    expect(inputElement.value).toBe('smith@gmail.com')
    expect(passWordInput.value).toBe('123456')
  })

  it('handleLogin is called on click of Login button', async () => {
    const user = userEvent.setup()
    render(<LoginForm handleLogin={handleLogin} />)

    const loginBtn = screen.getByText('Login')
    await user.click(loginBtn)

    expect(handleLogin).toHaveBeenCalled(1)
  })

  it('form inputs are cleared on click of Login button', async () => {
    const user = userEvent.setup()
    render(<LoginForm handleLogin={handleLogin} />)

    const inputElement = screen.getByRole('textbox')
    const loginBtn = screen.getByText('Login')

    await user.type(inputElement, 'smith@gmail.com')
    await user.click(loginBtn)

    expect(inputElement.value).toBe('')
  })
})
