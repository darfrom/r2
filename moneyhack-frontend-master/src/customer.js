import React, { Component } from "react";


import { FlatButton, Paper, TextField } from "material-ui";

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: "",
      nomber: "",
      date: "",
      maxPrice: ""      
    };
  }

  render() {
    const { article, nomber,date,maxPrice } = this.state;

    return (
      <Paper style={{ margin: 100,alignItems:"center", padding: 10, width: 350, height: 400 }}>
        <p>Заказчик</p>

          <TextField
            value={article}
            onChange={(event, newValue) => {
              this.setState({
                article: newValue,
              });
            }}
            hintText="Наименование"
          />

          <TextField
            value={nomber}
            onChange={(event, newValue) => {
              this.setState({
                nomber: newValue,
              });
            }}
            hintText="Количество"
          />

          <TextField
            
            value={date}
            onChange={(event, newValue) => {
              this.setState({
                date: newValue,
              });
            }}
            hintText="Вермя доставки"
          />

          <TextField
            value={maxPrice}
            onChange={(event, newValue) => {
              this.setState({
                maxPrice: newValue,
              });
            }}
            hintText="Максималная цена"
          />

          <FlatButton
            onClick={() => {              
              console.log(this.state)
            }}
            primary={true}
            label="Отправить"
          />
        </Paper>
      );
  }
}

export default Customer;