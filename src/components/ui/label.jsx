import React from 'react'

const Label = ({props,children}) => {
  return (
    <label {...props} className="block text-white ">{children}</label>
  )
}

export default Label