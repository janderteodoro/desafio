const buildUser = require('./src/entities/user')

const user1 = buildUser({
  userName: 'Jander',
  userSurname: 'Teodoro',
  userDocumentNumber: '123.123.123-12',
  userBirthDate: '19/02/1999',
  userAddress: {
    street: 'Alameda Alameda',
    number: '12',
    district: 'Bairro dos Pedrosos',
    city: 'Jundiaí',
    zipCode: '13260-000',
    state: 'SP'
  }
})

console.log(user1)
