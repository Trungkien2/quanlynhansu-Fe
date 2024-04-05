/* eslint-disable react/react-in-jsx-scope */
import { CAlert } from '@coreui/react'
import { createContext, useEffect, useState } from 'react'

const ToastContext = createContext({
  toast: {},
  setToast: () => null,
})

// eslint-disable-next-line react/prop-types
const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({
    isOpen: false,
    message: '',
  })
  useEffect(() => {
    const id = setTimeout(() => {
      setToast({
        ...toast,
        isOpen: false,
      })
    }, 5000)

    return () => {
      clearTimeout(id)
    }
  }, [toast])

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <>
      <CAlert
        color="primary"
        dismissible
        visible={toast.isOpen}
        onClose={() =>
          setToast({
            ...toast,
            isOpen: false,
          })
        }
        style={{
          zIndex: 9999,
        }}
      >
        {toast.message}
      </CAlert>
      <ToastContext.Provider value={{ toast, setToast }}>{children}</ToastContext.Provider>
    </>
  )
}
export { ToastContext, ToastProvider }
