import React, { useContext, useEffect, useState } from 'react'
import Clock from '../../../components/Clock'
import { CButton } from '@coreui/react'
import * as timeKeepingApi from '../../../api/timeKeepingApi'
import moment from 'moment'
import { ToastContext } from '../../../context/ToastContext'

const TimeKeepingUser = () => {
  const loginInfo = sessionStorage.getItem('token')
    ? JSON.parse(sessionStorage.getItem('token'))
    : ''
  const [checkInProcess, setcheckInProcess] = useState(null)
  const { setToast } = useContext(ToastContext)
  const checkIn = async () => {
    try {
      await timeKeepingApi.create({
        start_at_unix_timestamp: moment().valueOf(),
        user_id: loginInfo?.id,
      })
      alert('check in succes')
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  const checkout = async () => {
    // Tính toán thời điểm bắt đầu + 8 giờ
    const startAt = moment(checkInProcess?.start_at_unix_timestamp) // start_at_unix_timestamp là timestamp tính bằng milliseconds
    const eightHoursLater = startAt.clone().add(8, 'hours')
    // Lấy thời gian hiện tại
    const currentTime = moment()

    // So sánh
    if (currentTime.isAfter(eightHoursLater)) {
      try {
        await timeKeepingApi.edit(checkInProcess?.id, {
          end_at_unix_timestamp: moment().valueOf(),
          Status: 'APPROVED',
        })
        setToast({
          isOpen: true,
          message: 'Check out success',
        })
        findCheckinOnDate()
      } catch (error) {
        alert(error.response.data.message)
      }
      console.log('Hiện tại đã qua 8 giờ sau thời điểm start_at_unix_timestamp')
    } else {
      setToast({
        isOpen: true,
        message: 'Hiện tại chưa đủ 8 giờ sau thời điểm start_at_unix_timestamp',
      })
      console.log('Hiện tại chưa đủ 8 giờ sau thời điểm start_at_unix_timestamp')
    }
  }

  const findCheckinOnDate = async () => {
    try {
      const res = await timeKeepingApi.getList({
        fields: ['$all'],
        where: {
          user_id: loginInfo?.id,
          Status: 'PENDING',
        },
        limit: 1,
        order: [['CreatedAt', 'desc']],
      })

      setcheckInProcess(res?.rows?.[0])
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  useEffect(() => {
    findCheckinOnDate()
  }, [])

  return (
    <div>
      <p>TimeKeeping</p>
      <Clock />

      <CButton
        color="primary"
        onClick={() => (checkInProcess?.Status === 'PENDING' ? checkout() : checkIn())}
      >
        {checkInProcess?.Status === 'PENDING' ? 'Check out' : ' Check In'}
      </CButton>
    </div>
  )
}

export default TimeKeepingUser
