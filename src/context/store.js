import React, {createContext, useReducer} from 'react';

const initialState = {
  isOpen: false,
};

const actions = {
  IS_OPEN: "IS_OPEN"
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case actions.IS_OPEN:
        return { ...state, isOpen: action.value != null ? action.value : !state.isOpen };
      default:
        throw new Error();
    }
    ;
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }