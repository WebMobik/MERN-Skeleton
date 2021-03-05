import { MongoClient } from 'mongodb'
import config from '../../config/config'

describe('test to get users list', () => {
  let connection
  let db

  beforeAll(async () => {
    connection = await MongoClient.connect(config.mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    db = await connection.db(config.dbName)
  })

  afterAll(async () => {
    await connection.close()
    await db.close()
  })

  it('should insert a doc into collection', async () => {
    const users = db.collection('users')

    const findUser = await users.findOne({ name: 'Mobik' })
    expect(findUser.name).toEqual('Mobik')
  })
})
