import React from 'react'

const Notification = ({message, type}) => {
  const styles = {
    error: "bg-red-600 text-white rounded py-1 mb-3",
    resolve: "bg-green-600 text-white rounded py-1 mb-3",
  } 
  return (
    <div className={type === "error" ? styles.error : styles.resolve}>{message}</div>
  )
}

export default Notification