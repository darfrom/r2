import React, { Component } from "react";
import axios from "axios";

import { FlatButton, Paper, TextField } from "material-ui";

class Supplier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: "",
      releaseDate: ""
    };
  }

  render() {
    const { price, releaseDate } = this.state;

    return (
        <Paper style={{ margin: 100, padding: 10, width: 350, height: 400 }}>
          <p>Поставщик</p>

          <TextField
            value={price}
            onChange={(event, newValue) => {
              this.setState({ 
                price: newValue,
              });
            }}
            hintText="Цена"
          />

          <TextField            
            value={releaseDate}
            onChange={(event, newValue) => {
              this.setState({
                releaseDate: newValue,
              });
            }}
            hintText="Вермя  доставки"
          />

          
          <FlatButton
            onClick={() => {
              console.log(this.state);
            }}
            primary={true}
            label="Отправить"
          />
        </Paper>
      );
  }
}

export default Supplier;