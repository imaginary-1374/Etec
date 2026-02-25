import { useState, useEffect } from "react";

export default function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Update debounced value after a specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // clean the timeout if value changes (or on unmount)
    // This is the core of debouncing: resetting the timer on each new input
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Only re-run if value or delay changes

  return debouncedValue;
}
