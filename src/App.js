import React from 'react';
import './App.css';

import Debouncing from './component/debouncing/Debouncing';
import Throttling from './component/throttling/Throttling';

function App() {
  return (
    <div className="App">
      <Throttling />
      <Debouncing />
    </div>
  );
}

export default App;
