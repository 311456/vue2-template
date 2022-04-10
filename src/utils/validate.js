// 工具函数

/**
 * 验证用户名称
 * @param {string} str
 * @returns {Boolean}
 */
 export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

/**
 * 验证邮箱
 * @param {string} email
 * @returns {Boolean}
 */
 export function validEmail(email) {
  const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}

/**
 * 验证是否是小写
 * @param {string} str
 * @returns {Boolean}
 */
 export function validLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/**
 * 验证是否是大写
 * @param {string} str
 * @returns {Boolean}
 */
 export function validUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}