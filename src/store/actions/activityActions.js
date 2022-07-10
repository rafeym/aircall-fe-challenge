import { archiveActivity, fetchActivities, fetchActivityInfo } from '../../api'

import {
  GET_ACTIVITIES_LIST,
  GET_ACTIVITIES_LIST_SUCCESS,
  GET_ACTIVITIES_LIST_FAIL,
  GET_ACTIVITY_INFO,
  GET_ACTIVITY_INFO_FAIL,
  GET_ACTIVITY_INFO_SUCCESS,
  ARCHIVE_ACTIVITY,
  ARCHIVE_ACTIVITY_SUCCESS,
  ARCHIVE_ACTIVITY_FAIL,
  RESTORE_ACTIVITY,
  RESTORE_ACTIVITY_SUCCESS,
  RESTORE_ACTIVITY_FAIL,
} from './index'

export const fetchActivitiesAction = () => async (dispatch) => {
  dispatch({
    type: GET_ACTIVITIES_LIST,
  })

  try {
    const activities = await fetchActivities()

    dispatch({
      type: GET_ACTIVITIES_LIST_SUCCESS,
      payload: activities,
    })
  } catch (error) {
    dispatch({
      type: GET_ACTIVITIES_LIST_FAIL,
    })
  }
}

export const fetchActivityDetailsAction = (id) => async (dispatch) => {
  dispatch({
    type: GET_ACTIVITY_INFO,
  })

  try {
    const activity = await fetchActivityInfo(id)

    dispatch({
      type: GET_ACTIVITY_INFO_SUCCESS,
      payload: activity,
    })
  } catch (error) {
    dispatch({
      type: GET_ACTIVITY_INFO_FAIL,
    })
  }
}

export const archiveActivityAction = (id, status) => async (dispatch) => {
  dispatch({
    type: ARCHIVE_ACTIVITY,
  })

  try {
    const activity = await archiveActivity(id, status)

    dispatch({
      type: ARCHIVE_ACTIVITY_SUCCESS,
      payload: activity,
    })
  } catch (error) {
    dispatch({
      type: ARCHIVE_ACTIVITY_FAIL,
    })
  }
}

export const restoreActivityAction = (id, status) => async (dispatch) => {
  dispatch({
    type: RESTORE_ACTIVITY,
  })

  try {
    const activity = await archiveActivity(id, status)

    dispatch({
      type: RESTORE_ACTIVITY_SUCCESS,
      payload: activity,
    })
  } catch (error) {
    dispatch({
      type: RESTORE_ACTIVITY_FAIL,
    })
  }
}
