import { createContext, useContext, useEffect, useMemo } from 'react';

import { useFetch, useMethods } from '../../../shared/hooks';

import { reducer } from './ContextProvider.utils';

const initialState = {
  data: [],
  product: null,
  currentImage: '',
  currentPrice: 0,
  cart: {},
  totalPrice: 0,
  loading: false,
  error: null,
};

const StateContext = createContext();

export const useGlobalContext = () => useContext(StateContext);

export const ContextProvider = ({ children }) => {
  const [state, methods] = useMethods({ initialState, methods: reducer });
  // const { data, error, isLoading } = useFetch({ url: 'https://fedtest.bylith.com/api/Catalog/GetAll' });

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem('data'));
    methods.setLoading(false);
    methods.setData(data);
    methods.setError(null);
    window.localStorage.setItem('data', JSON.stringify(data));
  }, []);
  // const { data, error, isLoading } = useFetch({ url: 'https://fedtest.bylith.com/api/Catalog/GetAll' });

  // useEffect(() => {
  //   console.log('🚀 => 👍 ==>> ContextProvider ==>> Line #27 ==>> ', { data, error, isLoading });
  //   methods.setLoading(isLoading);
  //   methods.setData(data);
  //   methods.setError(error);
  //   window.localStorage.setItem('data', JSON.stringify(data));
  // }, [data, error, isLoading, methods]);

  const value = useMemo(() => ({ state, methods }), [state, methods]);

  return <StateContext.Provider value={value}>{children}</StateContext.Provider>;
};
