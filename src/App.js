import React from 'react';
import { GlobalStyle } from './styles/globalStyle';
import './styles/fontProvider.css';
import Home from './pages'

const App = () => (
    <div className="App">
      <GlobalStyle />
      <Home/>
    </div>
  );

export default App;
