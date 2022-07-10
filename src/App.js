import { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { fetchActivitiesAction } from './store/actions/activityActions'

import Screens from './screens'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Spinner from './components/Spinner/Spinner'

const App = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    async function getActivities() {
      await dispatch(fetchActivitiesAction())
      setLoading(false)
    }
    getActivities()
  }, [dispatch])

  return (
    <div className='container'>
      <Header />
      <div className='container-view'>
        {loading ? <Spinner loading={loading} /> : <Screens />}
      </div>
      <Footer />
    </div>
  )
}

export default App
