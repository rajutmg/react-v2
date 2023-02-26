import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Header from "./header";
const ErrorPage = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container className="secGap">
        <Typography component="div">
          <h1>Error</h1>
        </Typography>
      </Container>
    </>
  );
};

export default ErrorPage;
