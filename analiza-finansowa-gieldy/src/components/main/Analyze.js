import React, { useEffect, useState } from 'react'
import * as d3 from "d3";
import { Chart, Line, Bar } from 'react-chartjs-2'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField'
import Indicator from '../small/Indicator'
import { Button, LinearProgress, Select, MenuItem, InputLabel } from '@material-ui/core';
import macd from 'macd';
import Stock from '../../Stock';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    borderColor: theme.palette.primary.light,
  },
  container: {
    padding: '10px',
    width: '100%'
  },
  loadingBar: {
    width: '100%',
    height: 10,
    marginTop: 10,
  },
  macdChart: {
    height: "30vh",
  },
  formGroup: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  select: {
    width: "92%",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  selectLabel: {
    fontSize: 12
  }
}));
const indexes = ["wig20", "wig", "mwig40", "swig80", "wig20eur", "wig20usd", "wig30"];
export default function Analyze() {
  const classes = useStyles();
  Chart.defaults.global.tooltips = false
  Chart.defaults.global.pointRadius = 0
  const [data, setData] = useState([]);
  const [maxCsvLength, setMaxCsvLength] = useState(0);
  const [macdData, setMacdData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [range, setRange] = useState(30);
  const [offset, setOffset] = useState(0);
  const [index, setIndex] = useState("wig20");

  const [rangeTextFieldValue, setRangeTextFieldValue] = useState(30);
  const [offsetTextFieldValue, setOffsetTextFieldValue] = useState(0);
  const [indexSelectValue, setIndexSelectValue] = useState("wig20");
  useEffect(() => {
    const url = window.location.origin + "/api?index=" + index;

    axios.get(url)
      .then(res => {
        const csvObj = res.data
        setMaxCsvLength(csvObj.length);
        const filteredData = filterData(csvObj)
        setData(filteredData)
        setMacdData(macd(filteredData.map((day) => Number(day.Zamkniecie))))
        setLoading(false);
      })
  }, [loading])

  const filterData = (data) => {
    return data.slice(data.length - (range + offset), data.length - offset);
  }

  const lineChart = (
    data[0] ? (<Line
      data={{
        labels: data.map((day) => day.Data),
        datasets: [{
          data: data.map((day) => day.Otwarcie),
          label: 'Otwarcie',
          borderColor: '#003f5c',
          backgroundColor: 'rgba(0, 170, 16, 0.2)',
          fill: false,
          lineTension: '0',
          pointRadius: 0,
        }, {
          data: data.map((day) => day.Zamkniecie),
          label: 'Zamkniecie',
          borderColor: '#58508d',
          backgroundColor: 'rgba(127, 174, 0, 0.2)',
          fill: false,
          lineTension: '0',
          pointRadius: 0,
        }, {
          data: data.map((day) => day.Najwyzszy),
          label: 'Najwyzszy',
          borderColor: '#bc5090',
          backgroundColor: 'rgba(195, 172, 0, 0.2)',
          fill: false,
          lineTension: '0',
          pointRadius: 0,
        }, {
          data: data.map((day) => day.Najnizszy),
          label: 'Najnizszy',
          borderColor: '#ff6361',
          backgroundColor: 'rgba(255, 166, 0, 0.2)',
          fill: false,
          lineTension: '0',
          pointRadius: 0,
        }],
      }
      }
    />) : null
  )

  const lineChartMacd = (
    data[0] ? (<Line
      data={{
        labels: data.map((day) => day.Data),
        datasets: [{
          data: macdData.MACD,
          label: 'MACD',
          borderColor: '#003f5c',
          backgroundColor: 'rgba(0, 170, 16, 0.2)',
          fill: false,
          lineTension: '1',
          pointRadius: 0,
        }, {
          data: macdData.histogram,
          label: 'Histogram',
          borderColor: '#58508d',
          backgroundColor: 'rgba(127, 174, 0, 0.8)',
          fill: true,
          lineTension: '0',
          type: 'bar'
        }, {
          data: macdData.signal,
          label: 'Signal',
          borderColor: '#bc5090',
          backgroundColor: 'rgba(195, 172, 0, 0.2)',
          fill: false,
          lineTension: '0',
          pointRadius: 0,
        }],
      }} />) : null
  )

  const handleChangeRange = (event) => {
    var value = event.target.value;
    setRangeTextFieldValue(value);
  }
  const handleSave = () => {
    var value = Number(rangeTextFieldValue);
    if (value < 30) value = 30;
    if (value > maxCsvLength) value = maxCsvLength;
    console.log("range:" + value)
    setRangeTextFieldValue(value)
    setRange(value);

    value = Number(offsetTextFieldValue);
    if (value < 0) value = 0;
    if (value > maxCsvLength - range) value = maxCsvLength - range;
    console.log("offset:" + value)
    setOffsetTextFieldValue(value)
    setOffset(value);

    setIndex(indexSelectValue)

    setLoading(true);
  }

  const handleChangeOffset = (event) => {
    var value = event.target.value;
    setOffsetTextFieldValue(value);
  }
  const handleChangeIndex = (event) => {
    var value = event.target.value;
    setIndexSelectValue(value);
  }

  if (!loading)
    return (

      <Grid container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2} className={classes.container}>

        <Grid container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={2}
          xs={12}>
          <Grid item container spacing={2} xs={12} md={4}>
            <Paper elevation={10} className={classes.paper}>
              <form className={classes.formGroup} noValidate autoComplete="off">
                <Grid
                  container
                  direction="column"
                  justify="flex-start"
                  alignItems="stretch"
                >
                  <Grid item xs={12}>
                    <InputLabel className={[classes.select, classes.selectLabel]} id="index-label">Indeks</InputLabel>
                    <Select className={classes.select}
                      labelId="index-label"
                      value={indexSelectValue}
                      onChange={handleChangeIndex}
                    >
                      {indexes.map(i => <MenuItem value={i}>{i.toUpperCase()}</MenuItem>)}
                    </Select>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Zakres"
                      value={rangeTextFieldValue}
                      onChange={handleChangeRange}
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Offset"
                      value={offsetTextFieldValue}
                      onChange={handleChangeOffset}
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                </Grid>



                <br></br>
                <Button variant="contained" color="primary" onClick={handleSave}>Zapisz</Button>
              </form>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={10} className={classes.paper}>
              <Grid container
                justify="center"
                alignItems="flex-start"
                spacing={3}>
                <Grid item ><Indicator name="śr OTW" value={Stock.average(data, "Otwarcie")} /></Grid>
                <Grid item ><Indicator name="śr ZMK" value={Stock.average(data, "Zamkniecie")} /></Grid>
                <Grid item ><Indicator name="śr NAJWYŻ" value={Stock.average(data, "Najwyzszy")} /></Grid>
                <Grid item ><Indicator name="śr NAJNIŻ" value={Stock.average(data, "Najnizszy")} /></Grid>
                <Grid item ><Indicator name="Zmiana" value={Stock.zmiana(data, range)} colorValue={true} /></Grid>
                <Grid item ><Indicator name="Zmiana%" value={Stock.zmianaProc(data, range) + "%"} colorValue={true} /></Grid>
                <Grid item ><Indicator name="MACD" value={Stock.mcad(macdData, range)} /></Grid>
                <Grid item ><Indicator name="ROC-5n" value={Stock.roc5(data, range) + "%"} colorValue={true} /></Grid>
                <Grid item ><Indicator name="ROC-10n" value={Stock.roc10(data, range) + "%"} colorValue={true} /></Grid>
                <Grid item ><Indicator name="mediana" value={Stock.median(data)} /></Grid>
                <Grid item ><Indicator name="RSI" value={Stock.rsi(data)} /></Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>



        <Grid item xs={12} md={6}>
          <h1>{index.toUpperCase()}</h1>
          <Paper elevation={10} className={classes.paper}>{lineChart}</Paper>
        </Grid>

        <Grid item xs={12} md={6} >
          <h1>MACD</h1>
          <Paper elevation={10} className={classes.paper}>{lineChartMacd}</Paper>
        </Grid>
      </Grid>
    )
  else return <LinearProgress size={100} className={classes.loadingBar} />
}
