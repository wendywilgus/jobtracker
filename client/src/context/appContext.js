import React, { useReducer, useContext, useEffect } from 'react';
import reducer from './reducer';
import { 
    CLEAR_ALERT, 
    DISPLAY_ALERT, 
    REGISTER_USER_BEGIN, 
    REGISTER_USER_ERROR, 
    REGISTER_USER_SUCCESS } from './actions';

const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    user: null,
    token: null,
    userLocation: '',
}

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const displayAlert = () => {
        dispatch({type: DISPLAY_ALERT})
        clearAlert()
    }

    const clearAlert = () => {
        setTimeout(() => { 
        dispatch({ type: CLEAR_ALERT })
    }, 3000 )
    }

const registerUser = async (currentUser) => {
    console.log(currentUser);
}
    return <AppContext.Provider value={{ ...state, displayAlert }}>
        {children}
        </AppContext.Provider>

}

const useAppContext = () => {
    return useContext(AppContext);
}

export { AppProvider, initialState, useAppContext };