import axios from 'axios'
import { Constant } from '../resources';

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

  return new Promise((resolve, reject) => {
    axios({
      ...config,
      url: customUrl,
      data: data,
      headers: headers
    }).then((res) => {
      resolve(res);
    }).catch(res => {
      reject(res);
    })
  })
}

export { PromiseRequest };