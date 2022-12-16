import React from 'react';
import Container from './Components/Container/Container';
import { DarkModeProvider } from './Components/DarkModeContext/DarkModeContext';


import './App.css';

function App() {
  return (
    <div className='App'>
    <DarkModeProvider>
   <Container/>
   </DarkModeProvider>
   </div>
  );
}

export default App;
