import * as types from "./mutations.types";
import { ActionTree } from "vuex";
import { login } from "@/constants/api";
import { State } from "./types";
const actions: ActionTree<State, State> = {
  async loginActions({ commit }, payload) {
    const res = await login(payload)
    commit(types.SET_USER_INFO, res)
  }
};

export default actions;
