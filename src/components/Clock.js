import React, { useState, useEffect } from 'react'

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    // Hàm này sẽ được gọi mỗi giây
    const timerID = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    // Phải return một hàm để clean up sau khi component bị unmount
    return () => clearInterval(timerID)
  }, []) // [] đảm bảo useEffect chỉ chạy một lần sau khi component được render

  const formattedTime = currentTime.toLocaleTimeString()

  return (
    <div>
      <h1>Current Time:</h1>
      <h2>{formattedTime}</h2>
    </div>
  )
}

export default Clock
