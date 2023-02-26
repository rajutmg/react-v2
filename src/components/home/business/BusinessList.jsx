import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Cards from "./Cards";
import Bdata from "./Bdata";

const useStyles = makeStyles((theme) => ({
  secTitle: {
    textAlign: "center",
  },
}));

const BusinessList = () => {
  const classes = useStyles();
  return (
    <>
      <section id="businessList" class="secGap">
        <Container>
          <Grid container spacing={3}>
            <Grid item lg={12}>
              <Typography className={classes.secTitle}>
                <h1>Local businesses</h1>
              </Typography>
            </Grid>
            {Bdata.map((val, index) => {
              return (
                <Cards
                  key={val.id}
                  s
                  imgsrc={val.imgsrc}
                  title={val.title}
                  sname={val.sname}
                  link={val.link}
                />
              );
            })}
            ;
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default BusinessList;
