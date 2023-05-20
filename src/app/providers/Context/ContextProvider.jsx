import { createContext, useContext, useEffect, useMemo } from 'react';

import { REQUESTS, geUrlParam } from '../../../shared';
import { useFetch, useMethods } from '../../../shared/hooks';
import { Paths } from '../Router';

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
  const { data, error, isLoading } = useFetch({ url: REQUESTS.GET_ALL });

  useEffect(() => {
    methods.setLoading(isLoading);
    methods.setData(data);
    methods.setError(error);
    window.localStorage.setItem('data', JSON.stringify(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error, isLoading]);

  useEffect(() => {
    if (window.location.pathname === Paths.HOME) {
      const param = geUrlParam('page');

      methods.setCurrentPage(param ? +param : 1);
    }
  }, [methods]);

  const value = useMemo(() => ({ state, methods }), [state, methods]);

  return <StateContext.Provider value={value}>{children}</StateContext.Provider>;
};
