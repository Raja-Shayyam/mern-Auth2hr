import axios from 'axios'

// npx json-server --watch db.json --port 5000 //!   run it for

export const APIreg = axios.create({
  baseURL: 'http://localhost:3000/registerAuth',
  withCredentials: true
})

export const registr = (data) => {
  return APIreg.post('/registration', data)
}
export const TOLogin = (data) => {
  return APIreg.post('/logins', data)
}
export const TOLogout = () => {
  return APIreg.get('/logout');
};
export const ToProt = () => {
  return APIreg.get('/me/')
}

export const APIProd = axios.create({
  baseURL: 'http://localhost:3000/myproducts',
  withCredentials: true
})

export const Products = () => {
  return (APIProd.get(`/getALLprod/`))
}

export const userProducts = (uID) => {
  return (APIProd.get(`/getIprod/${uID}`))
}

export const aDDProducts = (id ,data) => {
  return (APIProd.post(`/create/${id}`,data))
}

export const UpdateProd = (id, data) => {
  return APIProd.post(`/update/${id}`, data)
  // or API.patch(`/user/${id}`, data)
}

export const Getone = (id) => {
  return API.get(`user/${id}`)
}

export const DeletePost = (id) => {
  return API.delete(`/user/${id}`)
}

