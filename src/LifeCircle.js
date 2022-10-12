import React, { Component } from "react";
import SubLifeCircle from "./SubLifeCircle";

export default class LifeCircle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      makanan: "bakso",
      data: {},
      tampilhalamanSub: false,
    };
  }

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((response) => response.json())
  //     .then((json) =>
  //       // console.log(json)
  //       this.setState({
  //         data: json
  //       }),
  //     );
  // }

  ubahMakanan(value) {
    this.state({
      makanan: value,
    });
  }

  render() {
    // console.log("data", this.state.data);
    return (
      <div>
        LifeCircle
        {/* <h2>{this.state.data.title}</h2> */}
        <h2>{this.state.makanan}</h2>
        {this.state.tampilhalamanSub && (
          <SubLifeCircle
            ubahMakanan={(value) => {
              return this.makanan(value);
            }}
          />
        )}
        <button
          onClick={() =>
            this.setState({
              tampilhalamanSub: !this.state.tampilhalamanSub,
            })
          }
        >
          ubah{" "}
        </button>
      </div>
    );
  }
}
