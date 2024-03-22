import { ROUTE_API } from '../utils/routes'
import API from './axiosClient'
import { convertParams } from '../utils/index'

export const login = async (body) => await API.post(`${ROUTE_API.AUTH}/login`, body)
export const register = async (body) => await API.post(`${ROUTE_API.AUTH}/register`, body)
