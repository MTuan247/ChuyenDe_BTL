import axios from 'axios'
import { Constant } from '../resources';
import { mask } from "../redux/reducer/contextReducer";
import store from "../redux/store"

const PromiseRequest = {};

PromiseRequest.getServiceUrl = (action, controller) => {
  return `${Constant.Domain.Api}/api/${controller}/${action}`
}

PromiseRequest.send = (url, data, config = { method: "post" },) => {

  let customUrl = url;
  if (config.method.toLowerCase() === "get") {
    let i = 0;
    for(let key in data) {
      if (i === 0) {
        customUrl += '?'
      } else {
        customUrl += '&'
      }
      customUrl += `${key}=${data[key]}`;
      i++;
    }
  }

  let headers = {
    'Authorization': 'Bearer ' + localStorage.getItem("token")
  }

  store.dispatch(mask(true));

  return new Promise((resolve, reject) => {
    axios({
      ...config,
      url: customUrl,
      data: data,
      headers: headers
    }).then((res) => {
      store.dispatch(mask(false));
      resolve(res);
    }).catch(res => {
      store.dispatch(mask(false));
      reject(res);
    })
  })
}

export { PromiseRequest };