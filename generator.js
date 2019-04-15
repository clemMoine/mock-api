// Libraries
const faker = require('faker')

// Faker change locale
faker.locale = 'fr'

// Dynamic database
const database = {
  monitor: { status: 'ok' },
  profile: {
    id: faker.random.number(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName()
  },
  logout: { status: 'ok' }
}

require('fs').writeFileSync(
  `${__dirname}/db.json`,
  JSON.stringify(database, null, 2),
  'utf-8'
)
