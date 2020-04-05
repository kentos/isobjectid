const r = new RegExp(/^(?=.*[0-9])(?=.*[a-z])([a-z0-9]+)$/)

module.exports = (str) => r.test(str)