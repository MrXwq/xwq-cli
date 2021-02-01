import * as types from "./mutations.types";
import { MutationTree } from "vuex";
import { State } from "./types";

const mutations: MutationTree<State> = {
  [types.SET_USER_INFO](state, payload) {
    state.userInfo = payload;
  }
};

export default mutations;
