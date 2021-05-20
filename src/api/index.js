import request from '@/assets/request'

export function getList (params) {
  return request({
    url: 'https://api.apiopen.top/getJoke',
    method: 'get',
    params: params
  })
}

export function getVideoTypeList (params) {
  return request({
    url: 'https://api.apiopen.top/videoCategoryDetails',
    method: 'get',
    params: params
  })
}