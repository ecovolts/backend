import { InMemoryUsersRepository } from '@test/repositories/in-memory-user-repository'
import { FindUserById } from './get-by-id.use-case'

describe('Find User By Id', () => {
  it('should not be able to find a user by id', async () => {
    const usersRepository = new InMemoryUsersRepository()
    const findUserById = new FindUserById(usersRepository)

    const user = await findUserById.execute('1')

    expect(user).toBeNull()
  })
})
