import { Email } from './email'
import { User } from './user.entity'

describe('User', () => {
  it('should be able to create a user', () => {
    const user = new User({
      name: 'Diogo Soares',
      email: new Email('dioggosoares35@gmail.com'),
      passwordEnabled: true,
      avatarUrl: 'avatar.png',
      accountType: 'oauth',
    })

    expect(user).toBeTruthy()
  })
})
