import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { archiveActivityAction } from '../../../store/actions/activityActions'

import { FiPhoneMissed, FiPhone, FiArchive, FiVoicemail } from 'react-icons/fi'
import { BsThreeDotsVertical } from 'react-icons/bs'

import Info from '../../Info/Info'
import Button from '../../Button/Button'
import { archiveAll } from '../../../api'

const Activity = ({ activities }) => {
  const isInbox = activities.filter((act) => act.is_archived === false)

  const dispatch = useDispatch()
  return (
    <div className='activity'>
      {isInbox.length !== 0 ? (
        <>
          <Button text='Archive all calls' activities={activities} />{' '}
          {activities.map((act) => (
            <React.Fragment key={act.id}>
              {act.is_archived === true ? null : (
                <>
                  {' '}
                  <div className='date-container'>
                    <hr className='seperator' />
                    <p>{moment(act.created_at).format('LLL')}</p>
                    <hr className='seperator-1' />
                  </div>
                  <div className='activity-card'>
                    {act.call_type === 'missed' ? (
                      <FiPhoneMissed className='missed' />
                    ) : act.call_type === 'answered' ? (
                      <FiPhone className='answered' />
                    ) : (
                      <FiVoicemail className='voice' />
                    )}
                    <div className='call-info'>
                      <p className='name'>{act.from}</p>
                      <p className='name-info'>
                        {act.call_type === 'missed'
                          ? 'tried to call'
                          : act.call_type === 'answered'
                          ? 'called'
                          : ''}{' '}
                        <span>{act.to}</span>
                      </p>
                    </div>
                    <Link to={`/call-detail/${act.id}`}>
                      <BsThreeDotsVertical className='call-info-icon' />
                    </Link>
                    <FiArchive
                      className='archive-icon'
                      onClick={() =>
                        dispatch(
                          archiveActivityAction(act.id, !act.is_archived)
                        )
                      }
                    />
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </>
      ) : (
        <Info heading='Empty' subheading='No calls in inbox' />
      )}
    </div>
  )
}

export default Activity
