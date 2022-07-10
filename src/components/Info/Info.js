import React from 'react'

import { AiOutlineInfoCircle } from 'react-icons/ai'

const Info = ({ heading, subheading }) => {
  return (
    <div className='info-container'>
      <AiOutlineInfoCircle />
      <div className='text-area-container'>
        <p className='subheading'>{subheading}</p>
      </div>
    </div>
  )
}

export default Info
