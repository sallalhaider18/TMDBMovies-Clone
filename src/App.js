import Home from './Components/Home';
import Login  from './Components/Login';
import { useEffect, useState } from 'react';
import fetchDataFromApi from './Utilities/api'
import './App.css';

function App() {

  useEffect(() => {
    response();
  }, [])

  const response = () => {
    fetchDataFromApi("movie/popular")
    .then((res) => {
      console.log(res);
    })
  }
  
  return (
    <div className="App">
    </div>
  );
}

export default App;
