import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { fetchActivityDetailsAction } from '../store/actions/activityActions'

import Detail from '../components/ActivityDetail/Detail'
import Spinner from '../components/Spinner/Spinner'

const ActivityDetail = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  const { id } = useParams()

  useEffect(() => {
    async function getActivity() {
      await dispatch(fetchActivityDetailsAction(Number(id)))
      setLoading(false)
    }
    getActivity()
  }, [id, dispatch])

  const { activity } = useSelector((state) => state.activityReducer)
  return (
    <>
      {loading ? <Spinner loading={loading} /> : <Detail activity={activity} />}
    </>
  )
}

export default ActivityDetail
