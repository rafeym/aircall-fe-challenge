import React from 'react'
import ArchiveItem from './ArchiveItem/ArchiveItem'

const ArchiveList = ({ activities }) => {
  return (
    <div className='activity-feed-container'>
      <ArchiveItem activities={activities} />
    </div>
  )
}

export default ArchiveList
