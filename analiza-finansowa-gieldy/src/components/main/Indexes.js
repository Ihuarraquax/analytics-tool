import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  headText: {
    textAlign: "center",
    fontSize: "20px"
  },
  body: {
    padding: "20px",
    marginTop: "10px"
  },
  logoBaner: {
    width: "100%",
    display: "block",
  },

}));

export default function Indexes() {
  const classes = useStyles();
  return (
    <Grid container
      direction="row"
      justify="center"
      alignItems="stretch" spacing={3}>
      <Grid item xs>

      </Grid>
      <Grid item xs={6}>
        <Paper >
          <Typography className={classes.body}>
            <Typography variant="h4" color="primary">WIG – (Warszawski Indeks Giełgowy)</Typography>
            <p>Najdłużej notowany na Giełdzie Papierów Watrościowych w Warszawie, czyli od początku istnienia giełdy. Obejmuje podstawowe akcje spółek notowanych na rynku. Jest indeksem typu dochodowego, bo przy jego obliczaniu zwraca się uwagę na ceny zawartych w nim akcji oraz dochody z dywident (nagród wypłacanych właścicielom za udzielenie kapitału) i praw poboru (przywilej pierwszeństwa przy zakupie nowych akcji przez jej akcjonariuszy).</p>


            <Typography variant="h4" color="primary">WIG20</Typography>
            <p>Indeks giełdowy 20 największych spółek akcyjnych notowanych na warszawskiej Giełdzie Papierów Wartościowych, to indeks typu cenowego (przy jego obliczaniu bierze się jedynie ceny zawartych w nim transakcji).</p>

            <Typography variant="h4" color="primary">MWIG40</Typography>
            <p>Indeks typu cenowego (przy obliczaniu wartości bierze się pod uwagę jedynie ceny zawartych w nim transakcji, nie uwzględnia się zaś dochodów z akcji (dywidend, praw poboru).  W jego skład wchodzi 40 spółek.</p>
            
            <Typography variant="h4" color="primary">SWIG80</Typography>
             indeks giełdow małych spółek notowanych na giełdzie warszawskiej. Jak sama nazwa sugieruje wszystkich spółek jest 80. SWIG80 zastąpił WIRR w 2007roku.
            <p></p>
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs>

      </Grid>
    </Grid>
  )
}
