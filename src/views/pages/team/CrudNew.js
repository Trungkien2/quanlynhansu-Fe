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
import * as employeeApi from '../../../api/teamApi'
import * as departmentApi from '../../../api/leagueApi'
import * as leaugeTeamApi from '../../../api/leagueTeamApi'

import { useNavigate, useParams } from 'react-router-dom'
const CrudLeague = () => {
  const [departmentList, setDepartmentList] = useState([])
  const [league_id, setLeague_id] = useState('')
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
      link_logo: '',
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
        name: res.name,
        link_logo: res.link_logo,
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
        name: data.name,
        link_logo: data.link_logo,
      }
      if (id) {
        res = await employeeApi.edit(id, body)
      } else {
        if (!league_id) {
          alert('please choose a leage for the team')
          return
        }
        res = await employeeApi.create(body)
        await leaugeTeamApi.create({
          team_id: res?.id,
          league_id,
        })
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
              <CInputGroup className="mb-3">
                <Controller
                  name="link_logo"
                  control={control}
                  render={({ field }) => (
                    <CFormInput placeholder="logo" autoComplete="username" {...field} />
                  )}
                />
              </CInputGroup>

              <CInputGroup className="mb-4">
                <Controller
                  name="league_id"
                  control={control}
                  render={({ field }) => (
                    <CFormSelect
                      aria-label="Department"
                      options={departmentList}
                      {...field}
                      onChange={(e) => {
                        setLeague_id(e.target.value)
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

export default CrudLeague
