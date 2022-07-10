import React from 'react'

import { HiPhone } from 'react-icons/hi'
import { RiUserLine } from 'react-icons/ri'
import { TbGridDots } from 'react-icons/tb'
import { GoGear } from 'react-icons/go'
import { BiDisc } from 'react-icons/bi'

const Footer = () => {
  return (
    <div className='footer-container'>
      <HiPhone className='phone' />
      <RiUserLine />
      <div className='dial-container'>
        <TbGridDots className='dial-dots' />
      </div>
      <GoGear />
      <BiDisc />
    </div>
  )
}

export default Footer
