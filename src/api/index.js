import axios from 'axios'

export const fetchActivities = async () => {
  const { data } = await axios.get(
    'https://aircall-job.herokuapp.com/activities'
  )

  return data
}

export const fetchActivityInfo = async (id) => {
  const { data } = await axios.get(
    `https://aircall-job.herokuapp.com/activities/${id}`
  )

  return data
}

export const archiveActivity = async (id, status) => {
  const { data } = await axios.post(
    `https://aircall-job.herokuapp.com/activities/${id}`,
    {
      is_archived: status,
    }
  )

  return data
}
