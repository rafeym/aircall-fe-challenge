import {
  GET_ACTIVITIES_LIST_SUCCESS,
  GET_ACTIVITY_INFO_SUCCESS,
  ARCHIVE_ACTIVITY_SUCCESS,
  RESTORE_ACTIVITY_SUCCESS,
} from '../actions'

const initState = {
  activities: [],
  activity: {},
}

export const activityReducer = (state = initState, action) => {
  const { type, payload } = action

  switch (type) {
    case RESTORE_ACTIVITY_SUCCESS:
      return {
        ...state,
        activities: [
          ...state.activities.map((activity) => {
            if (activity.id !== payload.id) return activity

            return payload
          }),
        ],
      }
    case ARCHIVE_ACTIVITY_SUCCESS:
      return {
        ...state,
        activities: [
          ...state.activities.map((activity) => {
            if (activity.id !== payload.id) return activity

            return payload
          }),
        ],
      }
    case GET_ACTIVITY_INFO_SUCCESS:
      return {
        ...state,
        activity: payload,
      }
    case GET_ACTIVITIES_LIST_SUCCESS:
      return {
        ...state,
        activities: payload,
      }
    default:
      return state
  }
}
