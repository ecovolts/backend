import { InMemoryUsersRepository } from '@test/repositories/in-memory-user-repository'
import { FindAllUsers } from './get-all.use-case'

describe('Find All Users', () => {
  it('should be able to find all users', async () => {
    const usersRepository = new InMemoryUsersRepository()
    const findAllUsers = new FindAllUsers(usersRepository)

    const users = await findAllUsers.execute(1)

    expect(Array.isArray(users)).toBeTruthy()
  })
})
