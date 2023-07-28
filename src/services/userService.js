import axios from 'axios'

const baseURL = 'http://localhost:4000/api/users'
const createUser = async (object) => {
  const response = await axios.post(`${baseURL}/signup`, object)
  return response.data
}

const loginUser = async (object) => {
  const response = await axios.post(`${baseURL}/login`, object)
  return response.data
}

export default { createUser, loginUser }
