import React, { createContext, useMemo, useState } from 'react';

export const Context = createContext();

export default function Provider({ children }) {
  const [orderBy, setOrderBy] = useState('releasedYear');
  const [inpValue, setInputValue] = useState('');

  const initialContext = useMemo(() => ({
    orderBy,
    setOrderBy,
    inpValue,
    setInputValue,
  }), [orderBy,
    setOrderBy,
    inpValue,
    setInputValue,
  ]);

  return (
    <Context.Provider value={ initialContext }>
      { children }
    </Context.Provider>
  );
}