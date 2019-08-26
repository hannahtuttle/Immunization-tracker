import React, {useReducer} from 'react';

import {UserReducer, initialState} from './reducers/index.js'
import {UserContext} from './contexts/UserContext.js'
import PatientOnBoarding from './components/PatientOnboarding/index.js'
import './App.css';

function App() {

  const [state, dispatch] = useReducer(UserReducer, initialState)

  return (
    <UserContext.Provider value={''}>
    <div className="App">
      <header className="App-header">
       <h1>Immunization App</h1>
      <PatientOnBoarding/>
      </header>
    </div>
    </UserContext.Provider>
  );
}

export default App;
