// @ts-expect-error TS(2591): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
const axios = require('axios');

import config from '../config/configBookstore'

const client = axios.create({
  baseURL: config.baseURL,
  validateStatus: () => true
})

const getUser = async ({
  userId,
  token
}: any) => {
  const response = await client.get(`/Account/v1/User/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return {
    headers: response.headers,
    status: response.status,
    data: response.data
  }
}

const createUser = async ({
  userName,
  password
}: any) => {
  const response = await client.post(`/Account/v1/User`, {
    userName,
    password
  })

  return {
    headers: response.headers,
    status: response.status,
    data: response.data
  }
}

const removeUser = async ({
  userId,
  token
}: any) => {
  const response = await client.delete(`/Account/v1/User/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return {
    headers: response.headers,
    status: response.status,
    data: response.data
  }
}

export default {
  get: getUser,
  create: createUser,
  remove: removeUser
}