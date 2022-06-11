import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [nota, setNota,] = useState([]);
  const [allNotes, setAllNotes] = useState({});

  return (
    <AppContext.Provider
      value={{
        nota,
        setNota,
        allNotes,
        setAllNotes
      }}
    >
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;