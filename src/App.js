import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Container, Grid, Button } from "@material-ui/core";
import CustomerForm from "./components/CustomerForm";
import LoanRecommendation from "./components/LoanRecommendation";

function App() {
  const [toggle, setToggle] = useState(true);

  const handleToggle1 = () => {
    setToggle(true);
  };
  const handleToggle2 = () => {
    setToggle(false);
  };

  function ButtonHandle() {
    if (toggle) {
      return <CustomerForm />;
    }
    return <LoanRecommendation/>;
  }
  return (
    <React.Fragment>
      <NavBar />
      <Container>
        <Grid container spacing={3} className="buttonGroup">
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color="primary"
              className="btn"
              onClick={handleToggle1}
            >
              Loan Prediction
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color="primary"
              className="btn"
              onClick={handleToggle2}
            >
              Loan Prediction With Tenure
            </Button>
          </Grid>
        </Grid>
        <ButtonHandle />
      </Container>
    </React.Fragment>
  );
}

export default App;
