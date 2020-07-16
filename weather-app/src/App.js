import React from 'react';
import './App.css';
import Weather from './components/Weather'
import {Provider} from 'react-redux';
import  store from './store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Weather />
        <p className='author'>&#xa9; Created by Diana Maduan</p>
      </div>
    </Provider>
  );
}

export default App;
