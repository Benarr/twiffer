import React, { useState, useCallback } from 'react';

const useinput = () => {
  return (
    <div>useinput</div>
  )
}

export default (initialValue = null) => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, handler, setValue];
}