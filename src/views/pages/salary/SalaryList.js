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
import * as departmentApi from '../../../api/salaryApi'
import { useNavigate } from 'react-router-dom'
import { ROLE } from '../../../utils'
import moment from 'moment'

const DepartmentList = () => {
  const [list, setList] = useState([])
  const navigate = useNavigate()
  const loginInfo = sessionStorage.getItem('token')
    ? JSON.parse(sessionStorage.getItem('token'))
    : ''
  const getList = async () => {
    try {
      const res = await departmentApi.getList({
        fields: ['$all', { user: ['name'] }],
      })
      console.log('🚀 ~ getList ~ res:', res)
      setList(res?.rows)
    } catch (error) {
      alert(error.response.data.message)
    }
  }
  const handleDelete = async (id) => {
    try {
      await departmentApi.Delete(id)
      getList()
    } catch (error) {
      alert(error.response.data.message)
    }
  }
  useEffect(() => {
    getList()
    console.log('🚀 ~ DepartmentList ~ loginInfo:', loginInfo)
  }, [])

  return (
    <div>
      {loginInfo?.role === ROLE.ADMIN && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: '10px',
          }}
        >
          <CButton color="primary" onClick={() => navigate('/salary/create')}>
            Add
          </CButton>
        </div>
      )}
      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">Employee Name</CTableHeaderCell>

            <CTableHeaderCell scope="col">Salary Amount</CTableHeaderCell>
            <CTableHeaderCell scope="col">Start At</CTableHeaderCell>
            <CTableHeaderCell scope="col">End At</CTableHeaderCell>
            <CTableHeaderCell scope="col">Action</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {list &&
            list?.map((item, index) => (
              <CTableRow key={item.id}>
                <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                <CTableDataCell>{item?.user?.name}</CTableDataCell>

                <CTableDataCell>{item?.Salary_amount?.toLocaleString()} VND</CTableDataCell>
                <CTableDataCell>
                  {moment(item?.start_at_unix_timestamp).format('DD-MM-YYYY')}
                </CTableDataCell>
                <CTableDataCell>
                  {item?.end_at_unix_timestamp
                    ? moment(item?.end_at_unix_timestamp).format('DD-MM-YYYY')
                    : '-'}
                </CTableDataCell>
                <CTableDataCell>
                  <CDropdown>
                    <CDropdownToggle color="secondary">Action</CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem onClick={() => navigate(`/salary/${item?.id}`)}>
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

export default DepartmentList
