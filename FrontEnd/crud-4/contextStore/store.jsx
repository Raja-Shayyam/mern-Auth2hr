import { useContext, createContext, useState, useReducer } from "react";
import { registr, TOLogin, TOLogout, ToProt } from "../Axious/axiousApi";
import React from "react";
import { useEffect } from "react";
// import { LogOut } from "../../../BackEnd/controller/authcont";


const Reducer = (Grandstate, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...Grandstate, Loading: action.payload };
    case 'SET_ERROR':
      return { ...Grandstate, error: action.payload, loading: false };
    case 'SET_LOGIN':
      localStorage.setItem('token', action.payload.token);
      // localStorage.setItem('refreshToken', action.payload.refreshToken);
      return {
        ...Grandstate,
        // user: action.payload.user,
        gToken: action.payload.tkn,
        isAuthenticated: action.payload.isAuthenticated,
        // refreshToken: action.payload.refreshToken,
        Loading: false,
        error: null,
      };
    case 'SET_REGETR':
      return {
        ...Grandstate,
        user: action.payload.user,
        Loading: false,
        error: null,
      };
    case 'LOAD_USER':
      return {
        ...Grandstate,
        user: action.payload,
        isAuthenticated: true,
        Loading: false,
      };
    // case 'SET_TOKENS_FROM_STORAGE':
    //   return {
    //     ...Grandstate,
    //     gToken: action.payload.token,
    //     refreshToken: action.payload.refreshToken,
    //     isAuthenticated: !!action.payload.token,
    //   };
    case 'SET_LOGOUT':
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      return {
        ...Grandstate,
        user: null,
        token: null,
        refreshToken: null,
        loading: false,
      };
    case 'CLEAR_ERROR':
      return { ...Grandstate, error: null };
    default:
      return Grandstate;
  }
};
const initialState = {
  user: null,
  gToken: null,
  refreshToken: null,
  isAuthenticated: false,
  Loading: true,
  error: null,
}

export const Store = createContext();

export const Context = ({ children }) => {

  const [Grandstate, dispatch] = useReducer(Reducer, initialState);

  const register = async (data) => {

    try {
      dispatch({
        type: 'SET_LOADING',
        loading: true
      })
      const resp = await registr(data)
      if (resp) {
        dispatch({ type: 'SET_REGETR', payload: resp.data.user })
      }
      console.log(resp);

      return resp.data.sucess;
    } catch (error) {
      console.error('>', error);

    }

  }

  const login = async (data) => {
    try {
      dispatch({ type: 'SET_LOADING', loading: true })
      const resp = await TOLogin(data)
      console.log(resp);

      // const getTokan = await ToProt()
      // console.log('getToken ', getTokan);
      // const t = getTokan.data.user.id

      dispatch({
        type: 'SET_LOGIN',
        payload: {
          tkn :resp.data,
          isAuthenticated : true
        }

      })

      console.log('grand :' ,Grandstate.user);
      

      return resp.data;
    } catch (error) {
      console.error('there is error ', error);

    }
  }

  const ProtMe = async () => {
    // const getTokan = await ToProt()
    // console.log('getToken ', getTokan);
    // const t = getTokan.data.user.id
    // dispatch({ type: 'L' })

  }

  const logout = async (dark) => {
    console.log('loutout');
    const lo = await TOLogout(dark)

    console.log('Logout successful:', lo);
    window.location.href = '/';

    lo ? dispatch({ type: 'SET_LOGOUT' }) : ''
  }

  const [editUid, seteditUid] = useState({})

  const value = {
    user: Grandstate.user,
    gToken: Grandstate.gToken,
    loading: Grandstate.Loading,
    error: Grandstate.error,
    isAuthenticated : Grandstate.isAuthenticated,
    editUid,
    seteditUid,
    register,
    login,
    logout,
    ProtMe
  }

  // useEffect(() => {
  //   const initializeAuth = async () => {
  //     try {
  //       const token = localStorage.getItem('token');
  //       const refreshToken = localStorage.getItem('refreshToken');

  //       console.log('🔑 Initializing auth - Token found:', token);

  //       if (token) {
  //         // Set tokens in state
  //         dispatch({
  //           type: 'SET_TOKENS_FROM_STORAGE',
  //           payload: { token, refreshToken }
  //         });

  //         // Try to load user data
  //         await loadUserData();
  //       } else {
  //         dispatch({ type: 'SET_LOADING', payload: false });
  //       }
  //     } catch (error) {
  //       console.error('❌ Auth initialization error:', error);
  //       dispatch({ type: 'LOGOUT' });
  //     }
  //   };

  //   initializeAuth();
  // }, []);

  useEffect(() => {
    loadUserData()
  }, [Grandstate.gToken])

  // Load user data using token
  const loadUserData = async () => {
    try {
      // dispatch({ type: 'SET_LOADING', payload: true });

      const response = await ToProt(); // Your protected route call
      console.log('👤 User data loaded:', response.data);

      if (response.data && response.data.user) {
        dispatch({
          type: 'LOAD_USER',
          payload: response.data.user
        });
      }else{
        dispatch({ type: 'SET_LOADING', payload: false });
      }
      console.log('is Authentecated ',Grandstate.isAuthenticated ,value.isAuthenticated);
      
    } catch (error) {
      console.error('❌ Failed to load user data:', error);

      // If token is invalid, logout
      if (error.response?.status === 401) {
        dispatch({ type: 'SET_LOADING', payload: false });
        // dispatch({ type: 'LOGOUT' });
      } else {
      }
    }
  };
  console.log('is Authentecated ',Grandstate.isAuthenticated , value.isAuthenticated);

  return (
    <Store.Provider value={value} edit={{seteditUid,editUid}}>
      {children}
    </Store.Provider>
  )
}

export const GloablHook = () => {
  return useContext(Store);
}