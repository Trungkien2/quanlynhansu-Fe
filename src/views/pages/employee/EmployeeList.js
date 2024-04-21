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
import * as employeeApi from '../../../api/employeeApi'
import { useNavigate } from 'react-router-dom'

const EmployeeList = () => {
  const [list, setList] = useState([])
  const navigate = useNavigate()
  const getList = async () => {
    try {
      const res = await employeeApi.getList({
        fields: ['$all', { department: ['name'] }],
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
        <CButton color="primary" onClick={() => navigate('/employee/create')}>
          Add
        </CButton>
      </div>
      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">Email</CTableHeaderCell>
            <CTableHeaderCell scope="col">name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
            <CTableHeaderCell scope="col">Department Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">view Salary</CTableHeaderCell>
            <CTableHeaderCell scope="col">Action</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {list &&
            list?.map((item, index) => (
              <CTableRow key={item.id}>
                <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                <CTableDataCell>{item?.email}</CTableDataCell>
                <CTableDataCell>{item?.name}</CTableDataCell>
                <CTableDataCell>{item?.phone || '-'}</CTableDataCell>
                <CTableDataCell>{item?.department?.name || '-'}</CTableDataCell>
                <CTableDataCell>
                  <CButton color="primary" onClick={() => navigate(`/salary/user/${item?.id}`)}>
                    View{' '}
                  </CButton>
                </CTableDataCell>
                <CTableDataCell>
                  <CDropdown>
                    <CDropdownToggle color="secondary">Action</CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem onClick={() => navigate(`/employee/${item?.id}`)}>
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

export default EmployeeList
