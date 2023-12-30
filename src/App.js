import logo from './logo.svg';
import './App.css';
import { useState, useId } from 'react';
import AddDefaultRow  from './components/Rows';
import AddNewRow from './components/Rows';
import smilie from './Smilie.png'


function App() {
  
  return (
    <div className="App">
      <div className="div1">
       
       <h1>
        "Star Performer for Last Sprint"
          <img src={smilie} alt="this is smilie image"></img>
       </h1>

       <button className="addbutton " onClick = { () => AddNewRow("Aradhana", false, 0) }>
          Add Row
       </button> 
       
       <AddDefaultRow/>

      </div>

    </div>
  );
}

export default App;
