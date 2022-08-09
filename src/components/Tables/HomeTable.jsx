import React, { Component, useEffect, useState } from "react";
import Card from "../common/Card";

class HomeTable extends Component {
  state = {
    courses: [],
    ta: "",
    teachers: "",
    resources: [],
  };

  sendData = async () => {};

  render() {
    return (
      <div className="d-md-flex justify-content-md-end">
        <button className="button" onClick={this.sendData}>
          Make Schedule
        </button>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default HomeTable;
