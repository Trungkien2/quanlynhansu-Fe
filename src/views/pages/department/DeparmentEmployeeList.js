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
import * as API from '../../../api/employeeApi'
import { useNavigate, useParams } from 'react-router-dom'

const DepartmentEmployeeList = () => {
  const [list, setList] = useState([])
  const navigate = useNavigate()
  let { department_id } = useParams()

  const getList = async () => {
    try {
      const res = await API.getList({
        fields: ['$all', { department: ['name'] }],
        where: { department_id },
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
            <CTableHeaderCell scope="col">Email</CTableHeaderCell>
            <CTableHeaderCell scope="col">name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
            <CTableHeaderCell scope="col">Department Name</CTableHeaderCell>
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
              </CTableRow>
            ))}
        </CTableBody>
      </CTable>
    </div>
  )
}

export default DepartmentEmployeeList
