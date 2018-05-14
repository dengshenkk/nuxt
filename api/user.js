import axios from 'axios'

let baseUrl = 'http://45.62.126.125:8000/api/'

export function getUserList () {
  return axios.get(baseUrl + 'userList')
}
