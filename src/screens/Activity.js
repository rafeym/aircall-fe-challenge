import { useSelector } from 'react-redux'

import ActivityFeed from '../components/ActivityFeed/ActivityFeed'

const Activity = () => {
  const { activities } = useSelector((state) => state.activityReducer)

  return <ActivityFeed activities={activities} />
}

export default Activity
