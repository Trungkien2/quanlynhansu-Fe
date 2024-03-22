import CIcon from '@coreui/icons-react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CForm,
  CFormInput,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as departmentApi from '../../../api/departmentApi'
import * as employeeApi from '../../../api/employeeApi'
import { useNavigate, useParams } from 'react-router-dom'
const CrudEmployee = () => {
  const [departmentList, setDepartmentList] = useState([])
  const navigate = useNavigate()
  let { id } = useParams()
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
      phone: '',
      department_id: '',
      name: '',
    },
  })

  const getListDepartment = async () => {
    try {
      const res = await departmentApi.getList({
        fields: ['name', 'id'],
      })
      console.log('🚀 ~ getListDepartment ~ res:', res)
      setDepartmentList(res?.rows?.map((item) => ({ value: item?.id, label: item?.name })))
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  const getOne = async (id) => {
    try {
      const res = await employeeApi.getOne(id, {
        fields: ['$all'],
      })
      console.log('🚀 ~ getOne ~ res:', res)
      const fieldData = {
        email: res.email,
        password: res.password,
        phone: res.phone,
        department_id: res.department_id,
        name: res.name,
      }
      Object.entries(fieldData).forEach(([fieldName, value]) => {
        setValue(fieldName, value)
      })
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  useEffect(() => {
    if (id) {
      getOne(id)
    }
  }, [id])
  useEffect(() => {
    getListDepartment()
  }, [])

  function onError(errors) {}
  async function onSubmit(data) {
    try {
      let res
      const body = {
        name: data.name,
        department_id: data.department_id,
        password: data.password,
        phone: data.phone,
        email: data.email,
      }
      if (id) {
        res = await employeeApi.edit(id, body)
      } else {
        res = await employeeApi.create(body)
      }
      navigate(-1)
    } catch (error) {
      alert(error.response.data.message)
    }
  }
  return (
    <div>
      {' '}
      <CCardGroup>
        <CCard className="p-4">
          <CCardBody>
            <CForm onSubmit={handleSubmit(onSubmit, onError)}>
              <h1>Create</h1>
              <CInputGroup className="mb-3">
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <CFormInput placeholder="User name" autoComplete="username" {...field} />
                  )}
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <CFormInput placeholder="Email" autoComplete="username" {...field} />
                  )}
                />
              </CInputGroup>
              <CInputGroup className="mb-4">
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="current-password"
                      {...field}
                    />
                  )}
                />
              </CInputGroup>
              <CInputGroup className="mb-4">
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => <CFormInput type="text" placeholder="Phone" {...field} />}
                />
              </CInputGroup>
              <CInputGroup className="mb-4">
                <Controller
                  name="department_id"
                  control={control}
                  render={({ field }) => (
                    <CFormSelect
                      aria-label="Department"
                      options={departmentList}
                      {...field}
                      onChange={(e) => {
                        field.onChange(e.target.value)
                      }}
                    />
                  )}
                />
              </CInputGroup>
              <CRow>
                <CCol xs={6}>
                  <CButton type="submit" color="primary" className="px-4">
                    {id ? 'Edit' : 'Create'}
                  </CButton>
                </CCol>
              </CRow>
            </CForm>
          </CCardBody>
        </CCard>
      </CCardGroup>
    </div>
  )
}

export default CrudEmployee
