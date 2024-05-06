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
import * as employeeApi from '../../../api/footballMatchApi'
import * as departmentApi from '../../../api/teamApi'

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
      score_team_a: 0,
      score_team_b: 0,
      status: 'WAITING',
      team_a_id: '',
      team_a_id: '',
      start_time: '',
    },
  })

  const getListLeague = async () => {
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
        score_team_a: +res.score_team_a,
        score_team_b: +res.score_team_b,
        status: res.status,
        team_a_id: res.team_a_id,
        team_b_id: res.team_b_id,
        start_time: res.start_time,
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
    getListLeague()
  }, [])

  function onError(errors) {}
  async function onSubmit(data) {
    try {
      let res
      const body = {
        score_team_a: +data.score_team_a,
        score_team_b: +data.score_team_b,
        status: data.status,
        team_a_id: data.team_a_id,
        team_b_id: data.team_b_id,
        start_time: data.start_time,
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
                  name="score_team_a"
                  control={control}
                  render={({ field }) => (
                    <CFormInput placeholder="score team a" autoComplete="username" {...field} />
                  )}
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <Controller
                  name="score_team_b"
                  control={control}
                  render={({ field }) => (
                    <CFormInput placeholder="score team b" autoComplete="username" {...field} />
                  )}
                />
              </CInputGroup>

              <CInputGroup className="mb-4">
                <Controller
                  name="team_a_id"
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

              <CInputGroup className="mb-4">
                <Controller
                  name="team_b_id"
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

              <CInputGroup className="mb-4">
                <Controller
                  name="status"
                  control={control}
                  render={({ field }) => (
                    <CFormSelect
                      aria-label="Department"
                      options={[
                        { value: 'IN_PROGESS', label: 'IN PROGESS' },
                        { value: 'WAITING', label: 'IN WAITING' },
                        { value: 'CANCEL', label: 'CANCEL' },
                      ]}
                      {...field}
                      onChange={(e) => {
                        field.onChange(e.target.value)
                      }}
                    />
                  )}
                />
              </CInputGroup>

              <CInputGroup className="mb-3">
                <Controller
                  name="start_time"
                  control={control}
                  render={({ field }) => (
                    <CFormInput placeholder="Start time" autoComplete="username" {...field} />
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
