import React from 'react'
import Navbar from './navbar/Navbar'
import Hero from './hero/Hero'
import Scrollbar from './scrollbar/Scrollbar'
import './css/index.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Scrollbar />
    </div>
  );
}

export default App;
