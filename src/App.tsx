import React from 'react';

import './App.css';
import { Chart } from './Chart/Chart';

const App = (): React.JSX.Element => {
  return (
    <div className="App">
      <h1>Baker&apos;s Percentages</h1>
      <Chart />
    </div>
  );
};

export default App;
