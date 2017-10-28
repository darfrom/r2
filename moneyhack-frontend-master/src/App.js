import React, { Component } from "react";
import axios from "axios";
import Customer from "./customer"
import Supplier from "./supplier"
import { FlatButton, Paper, TextField } from "material-ui";
import { Router, Route, Switch } from 'react-router'
 


class App extends Component {
  render() {


    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center ", height: 500 }}>

        <div id="who">
          <Customer />
        </div>

        <FlatButton
            onClick={() => {              
              console.log(this.state)
            }}
            primary={true}
            label="<--->"
          />

      </div>
    );
  }
}

export default App;