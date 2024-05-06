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
import * as employeeApi from '../../../api/leagueApi'
import { useNavigate, useParams } from 'react-router-dom'
const CrudLeague = () => {
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
      name: '',
    },
  })

  const getOne = async (id) => {
    try {
      const res = await employeeApi.getOne(id, {
        fields: ['$all'],
      })
      console.log('🚀 ~ getOne ~ res:', res)
      const fieldData = {
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

  function onError(errors) {}
  async function onSubmit(data) {
    try {
      let res
      const body = {
        name: data.name,
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
                    <CFormInput placeholder="name" autoComplete="username" {...field} />
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

export default CrudLeague
