import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

// Global variable
// reducer listen to any action for the data layer
// initialState is the current value of the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Access the data on the data layer
export const useStateValue = () => useContext(StateContext);