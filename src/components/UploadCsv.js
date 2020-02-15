import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "./form.css";
class UploadCsv extends Component {
  render() {
    return (
      <React.Fragment>
        <Button variant="contained" color="primary" className="button">
          Upload Excel
        </Button>
      </React.Fragment>
    );
  }
}

export default UploadCsv;
