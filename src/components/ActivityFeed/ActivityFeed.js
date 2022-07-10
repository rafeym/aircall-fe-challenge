import React from 'react'

import Activity from './Activity/Activity'

const ActivityFeed = ({ activities }) => {
  return (
    <>
      <div className='activity-feed-container'>
        <Activity activities={activities} />
      </div>
    </>
  )
}

export default ActivityFeed
