/*
 * @LineStart: -------------------------------------------
 * @Organization: Xwq
 * @Description:
 * @LineEnd: ----------------------------------------------
 */
import axios from "axios"; //引入axios
import httpInstance from "./httpInstance"; //导入http
/**
 * Get请求
 * @param { String } url
 * @param { Object } params
 */
export function sendGet(url: string, params: object = {}) {
  return new Promise(async (resolve, _) => {
    const res = await httpInstance.get(url, { params });
    if (res) {
      resolve(res.data);
    }
  });
}

/**
 * Post 请求
 * @param { String } url
 * @param { Object } data
 */
export function sendPost(url: string, data?: object) {
  return new Promise(async (resolve, _) => {
    const res = await httpInstance.post(url, data);
    if (res) {
      resolve(res.data);
    }
  });
}

/**
 * Put 请求
 * @param { String } url
 * @param { Object } data
 */
export function sendPut(url: string, data: object) {
  return new Promise(async (resolve, _) => {
    const res = await httpInstance.put(url, data);

    if (res) {
      resolve(res.data);
    }
  });
}

/**
 * Delete请求
 * @param { String } url
 * @param { Object } params
 */
export function sendDelete(url: string, params: object = {}) {
  return new Promise(async (resolve, _) => {
    const res = await httpInstance.delete(url, { params });
    if (res) {
      resolve(res.data);
    }
  });
}

/**
 * All 请求
 * @param iterable 是一个可以迭代的参数如数组等
 * @param callback 要等到所有请求都完成才会执行
 */
export function sendAll(iterable: any[], callback: (value: any[]) => any) {
  return new Promise(async (resolve, _) => {
    const res: any[] = await axios.all(iterable).then(axios.spread(callback));
    if (res.every(i => !!i)) {
      resolve(res.map(r => r.data));
    }
  });
}
