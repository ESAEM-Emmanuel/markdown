import './App.css';
import { Component, Fragment } from 'react';
import { sampleText } from './sampleText';


function App() {
  return (
    <Fragment>
      
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea
            value={sampleText} 
            className = "form-control"
            rows="35"/ >
          </div> 
          <div className="col-sm-6">
            <div> 
              {sampleText} 
            </div>
          </div> 
        </div>
      </div> 
    </Fragment>

  );
}

export default App;
