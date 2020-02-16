import React, { useState } from "react";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";
import {POST_CUSTOMER_DATA} from "../shared/urls";
import {
  Typography,
  InputBase,
  InputLabel,
  Grid,
  Paper,
  Select,
  MenuItem,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText
} from "@material-ui/core";
import "./form.css";
import {
  States,
  CompanyStatus,
  Category,
  Class,
  CompanyType,
  ActivityDescription
} from "../shared/Select";

function CustomerForm() {
  const [state, setState] = useState({
    cin: "12387960",
    company_name: "CrediWatch",
    date_of_registration: new Date(),
    state: "Karnataka",
    roc: "Karnataka",
    company_status: "",
    category: "",
    class: "",
    company_type: "",
    authorized_capital: "",
    paidup_capital: "",
    activity_code: "",
    activity_description: "",
    registred_office_address: "jayanagar, bangalore",
    email: ""
  });
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState("");
 
  const inputHandler = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
    console.log("Input value: ", event.target.value);
  };

  const handleSubmit = () => {
    setOpen(true);
  };

  const SubmitData = () => {
    setOpen(false);

    axios.post(POST_CUSTOMER_DATA, state).then(res => {
      console.log("Reached here", res);
      var result = res.data;
      setResult(result);
    });
  };

  const ShowResult = () => {
    if (result === "") {
      return (
        <Alert className="alert" severity="info">
          {" "}
          Check it out!
        </Alert>
      );
    }
    if (result === " YES") {
      return (
        <Alert className="alert" severity="success">
          {result} , You are Eligible for a loan!
        </Alert>
      );
    } else {
      return (
        <Alert className="alert" severity="error">
          {result} , You are not Eligible for a loan
        </Alert>
      );
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom className="heading">
        Please fill in your details for Loan Prediction
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <InputLabel>Unique Corporate Identification Number (CIN)</InputLabel>
          <Paper className="inputBox" elevation={3}>
            <InputBase
              required
              id="cin"
              name="cin"
              fullWidth
              autoComplete="cin"
              value={state.cin}
              onChange={inputHandler}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputLabel>Company Name</InputLabel>
          <Paper className="inputBox" elevation={3}>
            <InputBase
              required
              id="company_name"
              name="company_name"
              fullWidth
              autoComplete="company_name"
              value={state.company_name}
              onChange={inputHandler}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputLabel>Date of Registration</InputLabel>
          <Paper className="inputBox" elevation={3}>
            <InputBase
              type="date"
              id="date_of_registration"
              name="date_of_registration"
              value={state.date_of_registration}
              onChange={inputHandler}
              fullWidth
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputLabel>State</InputLabel>
          <Paper className="inputBox" elevation={3}>
            <Select
              displayEmpty
              name="state"
              placeholder="state"
              onChange={inputHandler}
              value={state.state || ""}
              fullWidth={true}
            >
              {States.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputLabel>Registrar Of Companies</InputLabel>
          <Paper className="inputBox" elevation={3}>
            <Select
              name="roc"
              placeholder="roc"
              onChange={inputHandler}
              value={state.roc || ""}
              fullWidth={true}
            >
              {States.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputLabel>Company Status</InputLabel>
          <Paper className="inputBox" elevation={3}>
            <Select
              name="company_status"
              placeholder="company_status"
              onChange={inputHandler}
              value={state.company_status || ""}
              fullWidth={true}
            >
              {CompanyStatus.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputLabel>Company Category</InputLabel>
          <Paper className="inputBox" elevation={3}>
            <Select
              name="category"
              placeholder="category"
              onChange={inputHandler}
              value={state.category || ""}
              fullWidth={true}
            >
              {Category.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputLabel>Company Class</InputLabel>
          <Paper className="inputBox" elevation={3}>
            <Select
              name="class"
              placeholder="class"
              onChange={inputHandler}
              value={state.class || ""}
              fullWidth={true}
            >
              {Class.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputLabel>Company Type</InputLabel>
          <Paper className="inputBox" elevation={3}>
            <Select
              name="company_type"
              placeholder="company_type"
              onChange={inputHandler}
              value={state.company_type || ""}
              fullWidth={true}
            >
              {CompanyType.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputLabel>Authorized Capital</InputLabel>
          <Paper className="inputBox" elevation={3}>
            <InputBase
              required
              id="authorized_capital"
              name="authorized_capital"
              type="number"
              fullWidth
              autoComplete="authorized_capital"
              value={state.authorized_capital}
              onChange={inputHandler}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputLabel>Paid-Up Capital</InputLabel>
          <Paper className="inputBox" elevation={3}>
            <InputBase
              required
              id="paidup_capital"
              name="paidup_capital"
              type="number"
              fullWidth
              autoComplete="paidup_capital"
              value={state.paidup_capital}
              onChange={inputHandler}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputLabel>Activity Description</InputLabel>
          <Paper className="inputBox" elevation={3}>
            <Select
              name="activity_description"
              placeholder="activity_description"
              onChange={inputHandler}
              value={state.activity_description || ""}
              fullWidth={true}
            >
              {ActivityDescription.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputLabel>Email ID</InputLabel>
          <Paper className="inputBox" elevation={3}>
            <InputBase
              required
              id="email"
              name="email"
              fullWidth
              autoComplete="email"
              value={state.email}
              onChange={inputHandler}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputLabel>Activity Code</InputLabel>
          <Paper className="inputBox" elevation={3}>
            <InputBase
              required
              id="activity_code"
              name="activity_code"
              type="number"
              fullWidth
              autoComplete="activity_code"
              value={state.activity_code}
              onChange={inputHandler}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <InputLabel>Registered Office Address</InputLabel>
          <Paper className="inputBox" elevation={3}>
            <InputBase
              required
              id="registred_office_address"
              name="registred_office_address"
              type="textarea"
              rowsMax={4}
              fullWidth
              autoComplete="registred_office_address"
              value={state.registred_office_address}
              onChange={inputHandler}
              multiline
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid className="button">
        <Button
          variant="contained"
          color="primary"
          className="button"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Grid>
      <ShowResult />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Data Protection Disclaimer and Agreement"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You agree that if we transfer ownership or management of the data
            collected to a third party oraginsation for better credit risk
            evaluation we may also transfer your Personal Information and any
            other data or information you have provided to us to such third
            party, provided such third party agrees to observe this Privacy
            Policy.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={SubmitData} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default CustomerForm;
