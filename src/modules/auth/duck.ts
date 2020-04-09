import { Actions, AuthModuleState, AuthModuleAction } from './types';

const INITIAL_STATE: AuthModuleState = {
  isSignedin: false,
  isSigningOut: false
};

// Reducer
export default function reducer(
  state = INITIAL_STATE,
  action: AuthModuleAction
) {
  switch (action.type) {
    case Actions.SIGNIN:
      return {
        ...state,
        isSignedin: true,
        isSigningOut: false
      };
    case Actions.SIGNOUT:
      return {
        ...state,
        isSignedin: false,
        isSigningOut: true
      };
    default:
      return state;
  }
}

// Action Creators
export function signin() {
  return {
    type: Actions.SIGNIN
  };
}

export function signout() {
  return {
    type: Actions.SIGNOUT
  };
}
