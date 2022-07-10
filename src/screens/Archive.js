import { useSelector } from 'react-redux'
import ArchiveList from '../components/ArchiveList/ArchiveList'

const Archive = () => {
  const { activities } = useSelector((state) => state.activityReducer)
  return <ArchiveList activities={activities} />
}

export default Archive
