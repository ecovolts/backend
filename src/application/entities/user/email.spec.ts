import { Email } from './email'

describe('User Email', () => {
  it('should be able to create a user email', () => {
    const email = new Email('dioggosoares35@gmail.com')

    expect(email).toBeTruthy()
  })

  it('should not be able to create a invalid user email', () => {
    expect(() => new Email('dioggosoares35gmail.com')).toThrow()
  })
})
