import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as employeeApi from '../../../api/leagueTeamApi'

const NewLeaugeTeamList = () => {
  const [list, setList] = useState([])
  const navigate = useNavigate()
  let { id } = useParams()

  const getList = async () => {
    try {
      const res = await employeeApi.getList({
        fields: ['$all', { team: ['$all'] }],
        where: {
          league_id: id,
        },
      })
      console.log('🚀 ~ getList ~ res:', res)
      setList(res?.rows)
    } catch (error) {
      alert(error.response.data.message)
    }
  }
  const handleDelete = async (id) => {
    try {
      await employeeApi.Delete(id)
      getList()
    } catch (error) {
      alert(error.response.data.message)
    }
  }
  useEffect(() => {
    getList()
  }, [])

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: '10px',
        }}
      ></div>
      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">name</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {list &&
            list?.map((item, index) => (
              <CTableRow key={item.id}>
                <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                <CTableDataCell>{item?.team?.name || '-'}</CTableDataCell>
              </CTableRow>
            ))}
        </CTableBody>
      </CTable>
    </div>
  )
}

export default NewLeaugeTeamList
