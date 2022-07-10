import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux/'
import { restoreActivityAction } from '../../../store/actions/activityActions'

import { FiPhoneMissed, FiPhone, FiVoicemail } from 'react-icons/fi'
import { MdRestore } from 'react-icons/md'
import { BsThreeDotsVertical } from 'react-icons/bs'

import Info from '../../Info/Info'

const ArchiveItem = ({ activities }) => {
  const isArchived = activities.filter((act) => act.is_archived === true)
  const dispatch = useDispatch()
  return (
    <div className='activity'>
      {isArchived.length !== 0 ? (
        <>
          {' '}
          {activities.map((act) => (
            <React.Fragment key={act.id}>
              {act.is_archived === true ? (
                <>
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
                    <MdRestore
                      className='restore-icon'
                      onClick={() =>
                        dispatch(
                          restoreActivityAction(act.id, !act.is_archived)
                        )
                      }
                    />
                  </div>
                </>
              ) : null}
            </React.Fragment>
          ))}
        </>
      ) : (
        <Info subheading='No archived calls' />
      )}
    </div>
  )
}

export default ArchiveItem
