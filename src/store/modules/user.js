import { userMutations } from "../mutations/user";
import { userActions } from "../actions/user";

const user = {
  state: {
    isFetching: false,
    data: {},
    userInfo: {
      loginname: "",
      score: 0
    }
  },
  mutations: userMutations,
  actions: userActions
};
export default user;
