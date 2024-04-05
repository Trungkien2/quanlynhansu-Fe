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
import * as salaryApi from '../../../api/salaryApi'
import { useNavigate, useParams } from 'react-router-dom'
import DateTimePicker from 'react-datetime-picker'
import 'react-datetime-picker/dist/DateTimePicker.css'
import 'react-calendar/dist/Calendar.css'
import 'react-clock/dist/Clock.css'
import * as employeeApi from '../../../api/employeeApi'
import { ROLE } from '../../../utils'
import moment from 'moment'

const CrudSalary = () => {
  const [value, onChange] = useState(new Date())
  const [userList, setUserList] = useState([])

  const getListEmployee = async () => {
    try {
      const res = await employeeApi.getList({
        fields: ['name', 'id'],
        where: {
          role: ROLE.USER,
        },
      })
      console.log('🚀 ~ getListDepartment ~ res:', res)
      setUserList(res?.rows?.map((item) => ({ value: item?.id, label: item?.name })))
    } catch (error) {
      alert(error.response.data.message)
    }
  }

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
      start_at_unix_timestamp: '',
      Salary_amount: 0,
      user_id: '',
    },
  })

  const getOne = async (id) => {
    try {
      const res = await salaryApi.getOne(id, {
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
    getListEmployee()
  }, [])

  useEffect(() => {
    if (id) {
      getOne(id)
    }
  }, [id])

  function onError(errors) {}
  async function onSubmit(data) {
    console.log(data)
    try {
      let res
      const body = {
        start_at_unix_timestamp: moment().valueOf(data.start_at_unix_timestamp),
        Salary_amount: +data.Salary_amount,
        user_id: data.user_id,
      }
      if (id) {
        res = await salaryApi.edit(id, body)
      } else {
        res = await salaryApi.create(body)
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
              <p>Start at</p>
              <CInputGroup className="mb-3">
                <Controller
                  name="start_at_unix_timestamp"
                  control={control}
                  render={({ field }) => (
                    <DateTimePicker
                      onChange={(value) => {
                        onchange(value), field.onChange(value)
                      }}
                      value={value}
                    />
                  )}
                />
              </CInputGroup>
              <p>Salary Amountt</p>
              <CInputGroup className="mb-3">
                <Controller
                  name="Salary_amount"
                  control={control}
                  render={({ field }) => (
                    <CFormInput placeholder="Salary Amount" type="number" {...field} />
                  )}
                />
              </CInputGroup>
              {!id && (
                <>
                  <p>Employee</p>
                  <CInputGroup className="mb-4">
                    <Controller
                      name="user_id"
                      control={control}
                      render={({ field }) => (
                        <CFormSelect
                          aria-label="Employee"
                          options={userList}
                          {...field}
                          onChange={(e) => {
                            field.onChange(e.target.value)
                          }}
                        />
                      )}
                    />
                  </CInputGroup>
                </>
              )}

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

export default CrudSalary
