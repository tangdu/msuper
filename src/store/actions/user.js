import axios from "axios";
import * as types from '../constants/types'

export const userActions = {
  /**
   *
   * @param {accesstoken} [String]
   * @param {isRefresh} [Boolean]
   */
  fetchUserAction({ commit, state, dispatch }, params) {
    
    state.isFetching = true
    commit(types.FETCH_USER_SUC, { data: { loginname: "唐杜", score: 100 } })
  }
}
