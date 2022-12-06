import React, { createContext, useContext, useReducer } from "react";

// prepare datalayer
export const StateContext = createContext();

// wrap our app and data layer is provided
export const StateProvider = ({ reducer, initialState, children }) => {
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>;
};

// pool information from data layer
export const useStateValue = () => useContext(StateContext);
