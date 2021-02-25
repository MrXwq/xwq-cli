import { State } from "./types";
export function initialState(): State {
  return {
    userInfo: {
      name: "",
      age: 0,
      token: ""
    }
  };
}
const state: State = initialState();

export default state;
