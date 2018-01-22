import * as types from '../constants/types'

export const userMutations = {
  [types.FETCH_USER_SUC](state, action) {
    state.userInfo = action.data
    state.isFetching = false;
  }
}
