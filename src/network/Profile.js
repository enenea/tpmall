import {request} from "./request.js"

export function getInfo(token){
  return request({
    url:"/profile",
    data:{
      token: token
    },
    method:"post",
  })
}


export function register(params){
  return request({
    url:"/profile/register",
    data:{
      phone: params.phone,
      password: params.password,
    },
    method:"post",
  })
}

export function login(params){
  return request({
    url:"/profile/login",
    data:{
      phone: params.phone,
      password: params.password,
    },
    method:"post",
  })
}

export function logout(){
  return request({
    url:"/profile/logout",
    data:{
    },
    method:"post",
  })
}







