import React from 'react'

const ErrorForm = ({error}) => {
  return (
    <p className="text-red-500 text-xs italic">{error}</p>
  )
}

export default ErrorForm