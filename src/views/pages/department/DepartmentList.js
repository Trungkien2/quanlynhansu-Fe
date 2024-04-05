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
import * as departmentApi from '../../../api/departmentApi'
import { useNavigate } from 'react-router-dom'

const DepartmentList = () => {
  const [list, setList] = useState([])
  const navigate = useNavigate()
  const loginInfo = sessionStorage.getItem('token')
    ? JSON.parse(sessionStorage.getItem('token'))
    : ''
  const getList = async () => {
    try {
      const res = await departmentApi.getList({
        fields: ['$all'],
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: '10px',
        }}
      >
        <CButton color="primary" onClick={() => navigate('/department/create')}>
          Add
        </CButton>
      </div>
      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">name</CTableHeaderCell>
            <CTableHeaderCell scope="col">View Employee</CTableHeaderCell>
            <CTableHeaderCell scope="col">Action</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {list &&
            list?.map((item, index) => (
              <CTableRow key={item.id}>
                <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                <CTableDataCell>{item?.name}</CTableDataCell>
                <CTableDataCell>
                  <CButton
                    color="primary"
                    onClick={() => navigate(`/department/list_employee/${item?.id}`)}
                  >
                    View{' '}
                  </CButton>
                </CTableDataCell>
                <CTableDataCell>
                  <CDropdown>
                    <CDropdownToggle color="secondary">Action</CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem onClick={() => navigate(`/department/${item?.id}`)}>
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
