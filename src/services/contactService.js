import axios from 'axios'
const baseURL = 'http://localhost:4000/api/contacts'

let token = null

const setToken = (userToken) => {
  token = `Bearer ${userToken}`
  console.log(token)
}

const setConfig = () => {
  return {
    headers: {
      Authorization: token,
    },
  }
}

const getAll = async () => {
  const config = setConfig()
  const response = await axios.get(baseURL, config)
  return response.data
}

const createContact = async (object) => {
  const config = setConfig()
  const response = await axios.post(baseURL, object, config)
  return response.data
}

const updateContact = async (id, object) => {
  const config = setConfig()
  const response = await axios.post(`${baseURL}/${id}`, object, config)
  return response.data
}

const deleteContact = async (id) => {
  const config = setConfig()
  const response = await axios.delete(`${baseURL}/${id}`, config)
  return response.data
}

export default { getAll, createContact, updateContact, deleteContact, setToken }
