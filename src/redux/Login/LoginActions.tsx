import { USER_AUTH } from "./LoginTypes";
import { app } from "../../config/firebase";

export function LOGIN_USER(user: any) {
  return {
    type: USER_AUTH,
    payload: user,
  };
}

export const auth_user = () => {
  return (dispatch: any) => {
    app.auth().onAuthStateChanged((user: any) => {
      dispatch(LOGIN_USER(user));
    });
  };
};
