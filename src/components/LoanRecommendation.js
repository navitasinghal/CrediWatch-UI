import React, { useState } from "react";
import {
  Button,
  Grid,
  InputLabel,
  Paper,
  Typography,
  InputBase,
  Select,
  MenuItem
} from "@material-ui/core";
import "./form.css";
import { Grades, LoanStatus } from "../shared/Select";
import Plot from "react-plotly.js";
import { POST_DATA } from "../shared/urls";
import axios from "axios";

function LoanRecommendation() {
  const [state, setState] = useState({
    loan_amnt: "",
    term: "",
    grade: "",
    annual_inc: "",
    loan_status: "",
    int_rate: ""
  });
  const [result, setResult] = useState("");
  const inputHandler = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = () => {
    axios.post(POST_DATA, state).then(res => {
      console.log(res.data);
      setResult(res.data);
    });
  };

  const ShowResults = () => {
    if (result === "") {
      return "";
    } else {
      return (
        <Plot
          data={[
            {
              x: [1, 2, 3],
              y: [2, 6, 3],
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "red" }
            },
            { type: "bar", x: [1, 2, 3], y: [2, 5, 3] }
          ]}
          layout={{ width: 600, height: 440, title: "A Fancy Plot" }}
        />
      );
    }
  };

  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom className="heading">
        Please fill in your details for Loan Recommendation
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <InputLabel>Loan Amount</InputLabel>
          <Paper className="inputBox" elevation={3}>
            <InputBase
              required
              id="loan_amnt"
              name="loan_amnt"
              type="number"
              fullWidth
              autoComplete="loan_amnt"
              value={state.loan_amnt}
              onChange={inputHandler}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputLabel>Term (in Months)</InputLabel>
          <Paper className="inputBox" elevation={3}>
            <InputBase
              required
              id="term"
              name="term"
              fullWidth
              type="number"
              autoComplete="term"
              value={state.term}
              onChange={inputHandler}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputLabel>Grade (Credit Rating)</InputLabel>
          <Paper className="inputBox" elevation={3}>
            <Select
              displayEmpty
              name="grade"
              placeholder="grade"
              onChange={inputHandler}
              value={state.grade || ""}
              fullWidth={true}
            >
              {Grades.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputLabel>Annual Income</InputLabel>
          <Paper className="inputBox" elevation={3}>
            <InputBase
              required
              name="annual_inc"
              fullWidth
              type="number"
              autoComplete="annual_inc"
              value={state.annual_inc}
              onChange={inputHandler}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputLabel>Interest Rate</InputLabel>
          <Paper className="inputBox" elevation={3}>
            <InputBase
              required
              id="int_rate"
              name="int_rate"
              fullWidth
              type="number"
              autoComplete="int_rate"
              value={state.int_rate}
              onChange={inputHandler}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputLabel>Loan Status</InputLabel>
          <Paper className="inputBox" elevation={3}>
            <Select
              displayEmpty
              name="loan_status"
              placeholder="loan_status"
              onChange={inputHandler}
              value={state.loan_status || ""}
              fullWidth={true}
            >
              {LoanStatus.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </Paper>
        </Grid>
      </Grid>

      <Button
        variant="contained"
        color="primary"
        className="button"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </React.Fragment>
  );
}

export default LoanRecommendation;
