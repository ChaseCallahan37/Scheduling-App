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

  sendData = async () => {};

  render() {
    return (
      <div>
        <ResourceTag />
        <div className="d-md-flex justify-content-md-end">
          <button className="button" onClick={this.sendData}>
            Make Schedule
          </button>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  }
}

export default HomeTable;
