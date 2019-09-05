import Vue from 'vue'
import resultCode from "./resultCode"
import property from '../property'

export default async function (response) {
  if (response && response.statusCode === 200) {
    switch (response.data.code) {
      case resultCode.SUCCESS.code:
        break;
      case resultCode.USER_IS_NOT_MEET_INVITE_CONDITION.code:
        break;
      case resultCode.TOKEN_IS_EXPIRE.code:
        Vue.prototype.$reLaunch(property.LOGIN_VIEW);
        break;
      case resultCode.TOKEN_IS_NOT_EXIST.code:
        Vue.prototype.$reLaunch(property.LOGIN_VIEW);
        break;
      case resultCode.TODAY_IS_READ.code:
        break;
      case resultCode.TODAY_IS_SIGNED.code:
        break;
      default:
        Vue.prototype.$showToast(response.data.msg, 'none');
    }
  } else {
    Vue.prototype.$showToast(response.statusCode + '错误', 'none');
  }
}
