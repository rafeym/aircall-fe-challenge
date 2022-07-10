import React from 'react'

import ClipLoader from 'react-spinners/ClipLoader'

const Spinner = ({ loading }) => {
  return (
    <div className='spinner'>
      <ClipLoader color={'#3DBA20'} size={40} loading={loading} />
    </div>
  )
}

export default Spinner
