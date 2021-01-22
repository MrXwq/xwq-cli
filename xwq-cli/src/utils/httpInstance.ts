/*
 * @LineStart: -------------------------------------------
 * @Organization: Xwq
 * @Description:
 * @LineEnd: ----------------------------------------------
 */
// 引入axios用来封装http请求
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, AxiosInstance } from "axios";
// token失效|禁用跳转登录页
import router from "@/router/index";
// 引入element-ui右侧弹框提示样式，可以根据项目需求改不同形式弹框
import { Notification } from "element-ui";
// 引入vue-store中的http状态码
import store from "@/store/index";
import {
  HTTP_STATUS_MSG_401,
  HTTP_STATUS_MSG_5XX,
  HTTP_STATUS_TITLE_ERROR,
  HTTP_STATUS_TITLE_5XX
} from "../constants/TEXT";
// 停止加载动画
import { PATH_401 } from "@/constants/url";

// 创建axios实例常量配置
const axiosCreate = {
  // 根据环境配置后端api的url
  baseURL: process.env.VUE_APP_API_URL,
  // 请求超时时间
  timeout: 30000,
  // 是否允许后端设置cookie跨域，一般无需改动
  withCredentials: false,
  validateStatus: function (status: number) {
    // 若状态码大于等于500时则Reject 用来统一处理5XX报错走catch方法
    return status < 400;
  }
};

/**
 * 设置post方法的Content-Type
 * 根据后端要求进行application/x-www-form-urlencoded和application/json的替换。
 * 默认application/x-www-form-urlencoded
 * 若是application/json传递，则不需要qs字符串化
 */
// const postHeaders = "application/x-www-form-urlencoded";
const postHeaders = "application/json";

// 创建axios实例
const httpInstance = axios.create(axiosCreate) as AxiosInstance;
httpInstance.defaults.headers.common["Content-Type"] = postHeaders;



/**
 * axios request拦截器
 * 
// adapter: ƒ (e)
// baseURL: "//kpi-api.chengjiukehu.com"
// data: undefined
// headers: {Accept: "application/json, text/plain', Authorization: ""}
// maxContentLength: -1
// method: "get"
// params: {name: "", …}
// timeout: 30000
// transformRequest: [ƒ]
// transformResponse: [ƒ]
// url: "/admin/solution"
// validateStatus: ƒ validateStatus(status)
// withCredentials: false
// xsrfCookieName: "XSRF-TOKEN"
// xsrfHeaderName: "X-XSRF-TOKEN"
 * 要求后端不管成功与否返回数据结构
 * {
 *  data:{    正常来讲就是返回数据
 *   errcode:'1'/'2'/'3'...    极少数err_code用来拓展业务需求特殊处理的情况，结合业务需求前后端协商定义
 *  },
 *  errmsg:'失败后端提示信息'       若http状态码为444，我就弹出err_msg内容
 * }
 */
httpInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.headers["Authorization"] = store.state.userInfo.token
      ? "Bearer " + store.state.userInfo.token
      : "Bearer";
    return config;
  },
  (error: AxiosError) => {
    Promise.reject(error);
  }
);


/**
 * 
// config: {url: "/api/enum", method: "get", params: {…}, headers: {…}, baseURL: "//kpi-api.chengjiukehu.com", …}
// data: {status: 200, code: 0, message: "Success", data: {…}}
// headers: {cache-control: "no-cache, private", content-type: "application/json"}
// request: XMLHttpRequest {_requestID: "e9e2c03c-7d5b-4204-9113-b64cf26bf2e8", _method: "GET", _url: "//kpi-api.chengjiukehu.com/api/enum?cycle_type=1&solution_type=1&solution_status=1", __sentry_xhr__: {…}, onreadystatechange: ƒ, …}
// status: 200
// statusText: "OK"
 * axios response拦截器
 */
httpInstance.interceptors.response.use(
  (config: AxiosResponse) => {
    return config;
  },
  (error: AxiosError) => {
    // * 网络超时处理
    if (error.message.includes("timeout")) {
      Notification({
        type: "error",
        title: HTTP_STATUS_TITLE_ERROR,
        message: "网络超时",
        duration: 3000
      })
      return;
    }
    // 操作无权限
    if (error.response?.status === 400) {
      Notification({
        type: "error",
        title: HTTP_STATUS_TITLE_ERROR,
        message: '操作无权限',
        duration: 3000
      })
    }
    // 用户登陆无权限
    else if (error.response?.status === 401) {
      Notification({
        type: "error",
        title: HTTP_STATUS_TITLE_ERROR,
        message: HTTP_STATUS_MSG_401,
        duration: 3000
      })
      router.push(PATH_401);
    } else {
      // 基于axiosCreate中validateStatus配置的区间判断此时状态码>=500 或者 浏览器直接报错(比如跨域) 走此弹框。
      Notification({
        type: 'error',
        title: HTTP_STATUS_TITLE_5XX,
        message: HTTP_STATUS_MSG_5XX,
        duration: 3000
      })
      return Promise.reject(error.response);
    }
  }
);

export default httpInstance;
