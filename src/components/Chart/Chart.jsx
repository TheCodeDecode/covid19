import { formatMs } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api/index";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

const Chart = ( {data :{ confirmed, recovered,deaths}, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  }, []);

  const lineChart = dailyData &&dailyData.length  ? (
    <Line
      data={{
        // labels:dailyData(({date}) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : (
    "Error"
  );

 
    
  const barChart = (
    confirmed ?
    <Grid container spacing={3} justify="center">
    <Grid item component={Card} xs ={12} md={12}>
    <CardContent>
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [confirmed['value'], recovered['value'],deaths['value']],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />

</CardContent>
        </Grid>
        </Grid>
     : null
  )
  return <div className={styles.container}> {country ? barChart : 'Please Select the Country'}</div>;
};

export default Chart;
