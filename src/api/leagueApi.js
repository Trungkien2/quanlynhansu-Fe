import { ROUTE_API } from '../utils/routes'
import API from './axiosClient'
import { convertParams } from '../utils/index'

export const getList = async (params) =>
  await API.get(ROUTE_API.LEAGUE, {
    params: convertParams(params),
  })

export const getOne = async (id, params) =>
  await API.get(`${ROUTE_API.LEAGUE}/${id}`, {
    params: convertParams(params),
  })

export const create = async (body) => await API.post(`${ROUTE_API.LEAGUE}`, body)
export const edit = async (id, body) => await API.put(`${ROUTE_API.LEAGUE}/${id}`, body)
export const Delete = async (id) => await API.delete(`${ROUTE_API.LEAGUE}/${id}`)
