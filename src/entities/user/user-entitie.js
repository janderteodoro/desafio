const buildUser = (userValidate) => (userInfo = {}) => {
  const userIsValid = userValidate.validateAll(userInfo)

  if (!userIsValid) {
    return {
      error: {
        message: 'some propertye is missing or is wrong',
        statudCode: 400
      }
    }
  }

  return Object.freeze({
    getUserName: () => userInfo.userName,
    getUserSurname: () => userInfo.userSurname,
    getUserFullName: () => `${userInfo.userName} ${userInfo.userSurname}`,
    getUserDocumentNumber: () => userInfo.userDocumentNumber,
    getUserBirthDate: () => userInfo.userBirthDate,
    getUserAddress: () => userInfo.userAddress
  })
}

module.exports = buildUser
