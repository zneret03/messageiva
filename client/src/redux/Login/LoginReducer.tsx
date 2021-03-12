import { USER_AUTH } from "./LoginTypes";

interface InitialStatetypes {
  fetchUserSuccess: boolean;
  userData: Object;
}

const initialState: InitialStatetypes = {
  fetchUserSuccess: false,
  userData: {},
};

const userData = (state = initialState, action: any) => {
  switch (action.type) {
    case USER_AUTH:
      return {
        fetchUserSuccess: true,
        userData: action.payload,
      };

    default:
      return state;
  }
};

export default userData;
