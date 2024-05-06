import {
  CButton,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import React, { useEffect, useState } from 'react'
import * as employeeApi from '../../../api/footballMatchApi'
import { useNavigate } from 'react-router-dom'

const NewLeaugeList = () => {
  const [list, setList] = useState([])
  const navigate = useNavigate()
  const getList = async () => {
    try {
      const res = await employeeApi.getList({
        fields: ['$all', { team_a: ['$all'] }, { team_b: ['$all'] }],
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
      >
        <CButton color="primary" onClick={() => navigate('/fooball_match/create')}>
          Add
        </CButton>
      </div>
      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">Team A</CTableHeaderCell>
            <CTableHeaderCell scope="col">score</CTableHeaderCell>
            <CTableHeaderCell scope="col">Team B</CTableHeaderCell>
            <CTableHeaderCell scope="col">Status</CTableHeaderCell>

            <CTableHeaderCell scope="col">Action</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {list &&
            list?.map((item, index) => (
              <CTableRow key={item.id}>
                <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                <CTableDataCell>{item?.team_a.name || '-'}</CTableDataCell>
                <CTableDataCell>
                  {item?.score_team_a + ' ' + '-' + ' ' + item?.score_team_b}
                </CTableDataCell>
                <CTableDataCell>{item?.team_b.name || '-'}</CTableDataCell>
                <CTableDataCell>{item?.status || '-'}</CTableDataCell>

                <CTableDataCell>
                  <CDropdown>
                    <CDropdownToggle color="secondary">Action</CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem onClick={() => navigate(`/fooball_match/${item?.id}`)}>
                        Edit
                      </CDropdownItem>
                      <CDropdownItem onClick={() => handleDelete(item?.id)}>Delete</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CTableDataCell>
              </CTableRow>
            ))}
        </CTableBody>
      </CTable>
    </div>
  )
}

export default NewLeaugeList