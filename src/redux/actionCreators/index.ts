import * as actions from '../actionTypes';

export function fetchData(
  longitude: number,
  latitude: number
): actions.GetDataAction {
  return {
    type: actions.GET_DATA,
    longitude,
    latitude
  };
}

export function fetchSuccess(
  data: Array<actions.EventInterface>
): actions.FetchSuccessAction {
  return {
    type: actions.FETCH_SUCCESS,
    data
  };
}

export function fetchFailed(): actions.FetchFailedAction {
  return {
    type: actions.FETCH_FAILED
  };
}
export function setLoading(isLoading: boolean): actions.SetIsLoadingAction {
  return {
    type: actions.SET_IS_LOADING,
    isLoading
  };
}
