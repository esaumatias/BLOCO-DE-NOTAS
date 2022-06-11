import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [nota, setNota,] = useState([]);

  return (
    <AppContext.Provider
      value={{
        nota,
        setNota,
      }}
    >
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;