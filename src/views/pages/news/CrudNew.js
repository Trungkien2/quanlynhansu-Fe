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
import * as employeeApi from '../../../api/newsApi'
import { useNavigate, useParams } from 'react-router-dom'
const CrudNew = () => {
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
      title: '',
      description: '',
      link_url: '',
    },
  })

  const getOne = async (id) => {
    try {
      const res = await employeeApi.getOne(id, {
        fields: ['$all'],
      })
      console.log('🚀 ~ getOne ~ res:', res)
      const fieldData = {
        title: res.title,
        description: res.description,
        link_url: res.link_url,
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

  function onError(errors) {}
  async function onSubmit(data) {
    try {
      let res
      const body = {
        title: data.title,
        description: data.description,
        link_url: data.link_url,
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
                  name="title"
                  control={control}
                  render={({ field }) => (
                    <CFormInput placeholder="Title" autoComplete="username" {...field} />
                  )}
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <CFormInput placeholder="Description" autoComplete="username" {...field} />
                  )}
                />
              </CInputGroup>
              <CInputGroup className="mb-4">
                <Controller
                  name="link_url"
                  control={control}
                  render={({ field }) => (
                    <CFormInput placeholder="Link Image" autoComplete="username" {...field} />
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

export default CrudNew
