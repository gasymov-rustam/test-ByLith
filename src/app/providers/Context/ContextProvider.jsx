import { createContext, useContext, useMemo } from 'react';

import { useMethods } from '../../../shared/hooks';

import { reducer } from './ContextProvider.utils';

const initialState = {
  data: [],
  product: null,
  labels: {},
  variant: null,
  cart: JSON.parse(window.localStorage.getItem('cart')) ?? [],
  productCount: 1,
  currentPage: 1,
  loading: false,
  error: null,
};

const StateContext = createContext();

export const useGlobalContext = () => useContext(StateContext);

export const ContextProvider = ({ children }) => {
  const [state, methods] = useMethods({ initialState, methods: reducer });

  const value = useMemo(() => ({ state, methods }), [state, methods]);

  return <StateContext.Provider value={value}>{children}</StateContext.Provider>;
};
