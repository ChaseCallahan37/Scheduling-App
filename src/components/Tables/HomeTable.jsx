import React, { Component, useEffect, useState } from "react";
import Card from "../common/Card";
import ResourceTag from "../common/ResourceTag";

class HomeTable extends Component {
  state = {
    courses: [],
    ta: "",
    teachers: "",
    resources: [],
  };

  render() {
    return (
<<<<<<< HEAD
      <div className="d-md-flex justify-content-md-end">
        <br></br>
        <br></br>
=======
      <div>
        <ResourceTag />
        <div className="d-md-flex justify-content-md-end">
          <button className="button" onClick={this.sendData}>
            Make Schedule
          </button>
          <br></br>
          <br></br>
        </div>
>>>>>>> dfa22f1ab53a194d93526d63fa0957af7400b144
      </div>
    );
  }
}

export default HomeTable;
