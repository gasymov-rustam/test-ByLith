import { useState } from 'react';
import { useEvent } from '../useEvent';

export const getSearchParam = (search, param) => {
  const searchParams = new URLSearchParams(search);

  return searchParams.get(param);
};

export const setSearchParam = (search, param, value) => {
  const searchParams = new URLSearchParams(search);
  searchParams.set(param, value);

  return searchParams.toString();
};


export const useSearchParamsState = ({ name, serialize = (v) => v, deserialize = (v) => v }) => {
  const [value, setValue] = useState(() => {
    const initialValue = deserialize(getSearchParam(document.location.search, name));

    return initialValue;
  });

  const updateValue = useEvent((newValue) => {
    const search = window.location.search;
    const actualNewValue = typeof newValue === 'function' ? newValue(value) : newValue;

    setValue(actualNewValue);

    const newSearch = setSearchParam(search, name, serialize(actualNewValue));

    window.history.pushState(null, '', `?${newSearch}`);
  });

  return [value, updateValue];
};