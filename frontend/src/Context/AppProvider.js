import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [allNotes, setAllNotes] = useState({});
  const [addSubmitted, setAddSubmitted] = useState(false);
  const [nota, setNota] = useState({
    text: '',
    collor: 'primary'
  });

  return (
    <AppContext.Provider
      value={{
        allNotes,
        setAllNotes,
        addSubmitted,
        setAddSubmitted,
        nota,
        setNota
      }}
    >
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;