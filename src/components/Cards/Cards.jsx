import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from 'classnames';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading';
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs ={12} md={3} className={cx(styles.card,styles.infected)}>
          <CardContent>
            <p className={styles.title}>
              Infected
            </p>
            <Typography variant="h5" >
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <p className={styles.date}>
              {" "}
              {new Date(lastUpdate).toDateString()}{" "}
            </p>
            <span clsss={styles.textDescription}>
              {" "}
              Number of Active cases of Covid-19
            </span>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs ={12} md={3} className={cx(styles.card,styles.recovered)}>
          <CardContent>
          <p className={styles.title}>
              Recovered
            </p>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <p className={styles.date}>
              {" "}
              {new Date(lastUpdate).toDateString()}{" "}
            </p>
            <span clsss={styles.textDescription}>
              {" "}
              Number of recovery cases of Covid-19
            </span>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs ={12} md={3} className={cx(styles.card,styles.deaths)}>
          <CardContent>
          <p className={styles.title}>
              Deaths
            </p>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <p className={styles.date}>
              {" "}
              {new Date(lastUpdate).toDateString()}{" "}
            </p>
            <span clsss={styles.textDescription}>
              {" "}
              Number of death caused by Covid-19
            </span>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
