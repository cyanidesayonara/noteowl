import axios from 'axios'
const baseUrl = '/notes'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = (note) => {
  const request = axios.post(baseUrl, note)
  return request.then(response => response.data)
}

const update = (note) => {
  const request = axios.put(`${baseUrl}/${note.id}`, note)
  return request.then(response => response.data)
}

const remove = (note) => {
  const request = axios.delete(`${baseUrl}/${note.id}`)
  return request.then(response => response.data)
}

export default { getAll, create, update, remove }