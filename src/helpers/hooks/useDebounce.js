import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState('');
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounceValue;
}

export default useDebounce;
