import { IS_TOGGLE } from "./DashboardTypes";

interface initialStateTypes {
  rightSidebar: boolean;
}

const initialState: initialStateTypes = {
  rightSidebar: false,
};

/**Dashboard reducer */
const DashboardReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case IS_TOGGLE:
      return {
        ...state,
        rightSidebar: !state.rightSidebar ? true : false,
      };
    default:
      return state;
  }
};

export default DashboardReducer;
