import React, { Component } from "react";
import "./App.css";
import ListOfCounters from "./components/ListOfCounters";
import Reset from "./components/Reset";
import Nav from "./components/Nav";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Count: [
        { id: 0, value: 0 },
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
      ],
    };
  }
  render() {
    return (
      <main role="main" className="container">
        <Nav
          numActCounters={
            this.state.Count.filter((item) => item.value > 0).length
          }
        />
        <Reset Reset={this.reset} />
        <ListOfCounters
          CountData={this.state.Count}
          Increment={this.onIncrement}
          Delete={this.onDelete}
          Decrement={this.onDecrement}
        />
      </main>
    );
  }
  onIncrement = (counterId) => {
    const Count = this.state.Count.map((item) => {
      if (item.id === counterId) item.value++;
      return item;
    });
    this.setState({ Count });
  };
  onDelete = (counterId) => {
    const Count = this.state.Count.filter((item) => item.id !== counterId);
    this.setState({ Count });
  };
  onDecrement = (counterId) => {
    const Count = this.state.Count.map((item) => {
      if (item.id === counterId && item.value !== 0) item.value--;
      return item;
    });
    this.setState({ Count });
  };
  reset = () => {
    const Count = this.state.Count.map((item) => {
      item.value = 0;
      return item;
    });
    this.setState({ Count });
  };
}

export default App;
