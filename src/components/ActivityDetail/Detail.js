import moment from 'moment'

import { FiPhoneMissed, FiPhone, FiVoicemail, FiCalendar } from 'react-icons/fi'
import {
  BsPeople,
  BsStopwatch,
  BsArrowUpRight,
  BsArrowDownLeft,
  BsBuilding,
} from 'react-icons/bs'

const ActivityDetail = ({ activity }) => {
  return (
    <div className='activity-detail-container'>
      <p>Call # {activity.id}</p>
      <ul className='call-info-container'>
        <li>
          <BsPeople />
          <div className='info-details-container'>
            <p className='from'>{activity.from}</p>
            <p className='to'>
              {activity.call_type === 'missed'
                ? 'tried to call'
                : activity.call_type === 'answered'
                ? 'called'
                : null}{' '}
              <span>{activity.to}</span>
            </p>
          </div>
        </li>

        <hr className='info-divider' />

        <li>
          {activity.call_type === 'missed' ? (
            <FiPhoneMissed className='missed' />
          ) : activity.call_type === 'answered' ? (
            <FiPhone className='answered' />
          ) : (
            <FiVoicemail />
          )}{' '}
          <div className='info-details-container'>
            <p className='heading-1'>Call Type</p>
            <p className='heading-2'>{activity.call_type}</p>
          </div>
        </li>

        <hr className='info-divider' />
        <li>
          <FiCalendar />
          <div className='info-details-container'>
            <p className='heading-1'>Date & Time</p>
            <p className='heading-2'>
              {moment(activity.created_at).format('LLL')}
            </p>
          </div>
        </li>

        <hr className='info-divider' />
        <li>
          <BsStopwatch />
          <div className='info-details-container'>
            <p className='heading-1'>Duration</p>
            <p className='heading-2'>{activity.duration} seconds</p>
          </div>
        </li>

        <hr className='info-divider' />
        <li>
          {activity.direction === 'outbound' ? (
            <BsArrowUpRight />
          ) : (
            <BsArrowDownLeft />
          )}
          <div className='info-details-container'>
            <p className='heading-1'>Direction</p>
            <p className='heading-2'>
              {activity.direction === 'outbound' ? 'Outbound' : 'Inbound'}
            </p>
          </div>
        </li>

        <hr className='info-divider' />
        <li>
          <BsBuilding />
          <div className='info-details-container'>
            <p className='heading-1'>Via</p>
            <p className='heading-2'>{activity.via}</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ActivityDetail
