import React from 'react';
import './App.css';
import getData from "./data/getData";

function App() {
  return (
      <div className={"wrapper _button"}>
          {getData}
      </div>
  );
}

export default App;
