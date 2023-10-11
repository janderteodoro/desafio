const { states } = require('./constants')

class UserValidator {
  static validateUserName (name, surname) {
    return name.length >= 2 && surname.length > 0
  }

  static validateUserDocumentNumber (cpf) {
    const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
    return regexCPF.test(cpf)
  }

  static validateUserBirthDate (birthDate) {
    const regexDataNascimento = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/
    return regexDataNascimento.test(birthDate)
  }

  static validateUserAddress (address) {
    if (address.street.length < 3) return false

    const regexZipCode = /^\d{5}-\d{3}$/
    const isZipCodeValid = regexZipCode.test(address.zipCode)

    if (!isZipCodeValid) return false

    if (!states.includes(address.state)) return false

    return true
  }

  static validateAll (userInfo) {
    const isUserNameValid = this.validateUserName(userInfo.userName, userInfo.userSurname)
    const isDocumentNumberValid = this.validateUserDocumentNumber(userInfo.userDocumentNumber)
    const isBirthDateValid = this.validateUserBirthDate(userInfo.userBirthDate)
    const isAddressValid = this.validateUserAddress(userInfo.userAddress)

    return isUserNameValid && isDocumentNumberValid && isBirthDateValid && isAddressValid
  }
}

module.exports = UserValidator
