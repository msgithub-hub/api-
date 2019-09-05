import { axios } from 'castle-haozijunqaq-wx-utils'

/**
 * PHP主服务登录并获取token
 * @param params
 * @returns {Promise}
 */
export function login(params) {
  return axios.getData('/api/token', params);
}

/**
 * 完善个人信息
 * @param params
 * @returns {Promise}
 */
export function register(params) {
  return axios.postData('/api/users/userInfo', params);
}

/**
 * 获取个人信息
 * @returns {Promise}
 */
export function getUserInfo() {
  return axios.getData('/api/users/show')
}

/**
 * 修改个人信息
 * @param params
 * @returns {Promise}
 */
export function updateUserInfo(params) {
  return axios.postData('/api/users', params)
}

/**
 * 根据邀请码获取用户信息
 * @param inviteCode 邀请码
 */
export function getUserByInviteCode(inviteCode) {
  return axios.getData('/api/users/getInfo', { invitation_qrcode: inviteCode })
}
