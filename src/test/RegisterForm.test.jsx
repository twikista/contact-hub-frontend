import { describe, it, expect, vi } from 'vitest'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'
import NewUserForm from '../components/NewUserForm'

describe('<NewUserForm/>', () => {
  it('is corrently rendered', () => {
    const { container } = render(<NewUserForm />)

    const form = container.querySelector('form')
    const inputElements = container.querySelectorAll('input')

    expect(form).toBeInTheDocument()
    expect(inputElements).toHaveLength(4)
  })

  it('input fileds are updated correctly', async () => {
    const user = UserEvent.setup()

    render(<NewUserForm />)
    const firstNameInput = screen.getByPlaceholderText('first name')
    const email = screen.getByPlaceholderText('email')

    await user.type(firstNameInput, 'john')
    await user.type(email, 'john@mail.com')

    expect(firstNameInput.value).toBe('john')
    expect(email.value).toBe('john@mail.com')
  })

  it('handleRegistration callback is called on form submit', async () => {
    const user = UserEvent.setup()
    const handleRegistration = vi.fn()

    render(<NewUserForm handleRegistration={handleRegistration} />)
    const submitBtn = screen.getByRole('button')
    await user.click(submitBtn)

    expect(handleRegistration).toHaveBeenCalled(1)
  })
})
