import React from 'react';
import Rotas from './Rotas/Rotas';
import AppProvider from './Context/AppProvider';


function App() {
  
  return (
    <AppProvider>
     <Rotas />
    </AppProvider>
  );
}

export default App;