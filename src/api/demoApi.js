import { ROUTE_API } from '../utils/routes'
import API from './axiosClient'
import { convertParams, exportResults } from 'utils'

export const getList = async (params) =>
  exportResults(
    await API.get(ROUTE_API.DEMO, {
      params: convertParams(params),
    }),
  )
