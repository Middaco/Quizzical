import './App.css';
import { useState, useEffect } from 'react';
import StartComponent from './components/StartComponent';
import Quizz from './components/Quizz';

function App() {
  const [start, setStart] = useState(false)

  return (
    <div className="main-container">
      {start?
      <Quizz/>
      :
      <StartComponent
        handleClick={() => setStart(oldValue => !oldValue)}
      />
    }
    </div>
  );
}

export default App;
