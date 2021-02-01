/*
 * @LineStart: -------------------------------------------
 * @Organization: Xwq
 * @Description:
 * @LineEnd: ----------------------------------------------
 */

import store from "@/store/index";
import {
  sendPost,
  sendGet
  // sendDelete,
  // sendPut
} from "@/utils/apiFn";
const base = process.env.VUE_APP_API_URL;
const prefix = "";

export const login = (params: Record<string, any>) =>
  sendPost(`${prefix}/login`, params);

export const usersExport = (id: string, params: object) =>
  sendGet(`${base}/api/${id}?token=${store.state.userInfo?.token}`, params);
