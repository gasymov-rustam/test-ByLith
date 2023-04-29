import axios, { isAxiosError } from 'axios';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

import { useIsMounted } from '../useIsMounted';

export const useFetch = ({
  url,
  method = 'GET',
  headers = { 'Content-Type': 'application/json' },
  body = null,
  deps = [],
  transformResponse = (data) => data,
}) => {
  const [response, setResponse] = useState({ error: null, isLoading: true, data: null });
  const isFetchingRef = useRef(true);
  const isMountedRef = useIsMounted();

  useEffect(() => {
    const fetchData = async () => {
      if (!(isMountedRef.current && isFetchingRef.current)) {
        return;
      }

      isFetchingRef.current = false;

      try {
        const response = await axios(url, {
          method,
          headers,
          data: body,
          params: method === 'GET' ? body : undefined,
        });
        if (response.data) {
          setResponse((prev) => ({ ...prev, data: transformResponse(response.data) }));
          toast.success('Data loaded successfully!');
        }
      } catch (error) {
        if (isAxiosError(error)) {
          console.warn('There are some errors during executing request!', error.response?.data);
          setResponse((prev) => ({ ...prev, error: error.response?.data }));
        }
        toast.error('Something went wrong!');
      } finally {
        isFetchingRef.current = true;
        setResponse((prev) => ({ ...prev, isLoading: false }));
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return response;
};