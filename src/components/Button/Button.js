import React from 'react'
import { useDispatch } from 'react-redux'
import { FiArchive } from 'react-icons/fi'
import { archiveActivityAction } from '../../store/actions/activityActions'

const Button = ({ text, activities }) => {
  const dispatch = useDispatch()
  return (
    <div
      className='button-container'
      onClick={() =>
        activities.map((activity) =>
          dispatch(archiveActivityAction(activity.id, !activity.status))
        )
      }
    >
      <FiArchive />
      <p>{text}</p>
    </div>
  )
}

export default Button
