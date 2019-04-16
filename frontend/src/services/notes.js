import axios from 'axios'

const baseUrl = '/api/notes/'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const removeToken = () => {
  token = null
}

const getAll = async () => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  const response = await axios.get(baseUrl, config)
  return response.data
}

const create = async note => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  const response = await axios.post(baseUrl, note, config)
  return response.data
}

const update = async note => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  const response = await axios.put(`${baseUrl}${note.id}`, note, config)
  return response.data
}

const remove = async note => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  const response = await axios.delete(`${baseUrl}${note.id}`, config)
  return response.data
}

export default {
  setToken,
  removeToken,
  getAll,
  create,
  update,
  remove
}
