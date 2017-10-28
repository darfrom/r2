import React, { Component } from "react";
import axios from "axios";
import Customer from "./customer"
import Supplier from "./supplier"
import { FlatButton, Paper, TextField } from "material-ui";
// import { Router, Route, Switch } from 'react-router'
 


class App extends Component {
  render() {
   <FlatButton
            onClick={() => {              
              console.log(this.state)
            }}
            primary={true}
            label="<--->"
          />
    return (
      <div> 
          <div style={{ margin: "auto", display: "flex", justifyContent: "flex-first", alignItems: "flex-first ", height: 500 }}>
            <Customer />
            <Supplier />     
          </div>
      </div>
    );
  }
}

export default App;