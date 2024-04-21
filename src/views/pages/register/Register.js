import React, { useRef, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CToast,
  CToastBody,
  CToastHeader,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import * as authApi from '../../../api/authApi'
import { useNavigate } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'

const Register = () => {
  const navigate = useNavigate()
  const [toast, addToast] = useState(0)
  const toaster = useRef()
  const exampleToast = (
    <CToast title="CoreUI for React.js">
      <CToastHeader closeButton>
        <svg
          className="rounded me-2"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="100%" fill="#007aff"></rect>
        </svg>
        <strong className="me-auto">Register</strong>
      </CToastHeader>
      <CToastBody>Register Success.</CToastBody>
    </CToast>
  )
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })
  function onError(errors) {}
  async function onSubmit(data) {
    try {
      const res = await authApi.register({
        name: data.name,
        email: data?.email,
        password: data?.password,
      })
      if (res?.user) {
        addToast(exampleToast)
        setTimeout(() => {
          navigate('/login')
        }, 2000)
      }
    } catch (error) {
      alert(error.response.data.message)
    }
  }
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit(onSubmit, onError)}>
                  <h1>Register</h1>
                  <p className="text-body-secondary">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <Controller
                      name="name"
                      control={control}
                      render={({ field }) => (
                        <CFormInput placeholder="Username" autoComplete="username" {...field} />
                      )}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <CFormInput placeholder="email" autoComplete="username" {...field} />
                      )}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
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

                  <div className="d-grid">
                    <CButton color="success" type="submit">
                      Create Account
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
