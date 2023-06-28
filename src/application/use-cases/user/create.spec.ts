import { InMemoryUsersRepository } from '@test/repositories/in-memory-user-repository'
import { CreateUser } from './create.use-case'

describe('Create User', () => {
  it('should be able to create a user', async () => {
    const usersRepository = new InMemoryUsersRepository()
    const createUser = new CreateUser(usersRepository)

    const { user } = await createUser.execute({
      name: 'Diogo Soares',
      email: 'dioggosoares@gmail.com',
      passwordEnabled: true,
      accountType: 'owner',
      avatarUrl: 'avatar.png',
    })

    expect(usersRepository.users).toHaveLength(1)
    expect(usersRepository.users[0]).toEqual(user)
  })
})
