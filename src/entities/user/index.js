const buildUser = require('./user-entitie')
const userValidate = require('./validates')

const makeUser = buildUser(userValidate)

module.exports = makeUser
