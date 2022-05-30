import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
          
            <Header />
            <Homepage />
            <Routes>
                <Route path='/' element={ <Homepage />}/>
              
                    
            </Routes>
            <Footer />

        
       
          
      </div>
);
}

export default App;
