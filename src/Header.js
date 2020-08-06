import React from 'react';
import './App.css';

function Header(props) {
    return (
        <header className="header">
            <h1>{props.appTitle}</h1> 
        </header>
    );
  }
  
  export default Header;