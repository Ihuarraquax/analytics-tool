import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MathJax from 'react-mathjax2'
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
  underline: {
    textDecoration: "underline"
  }

}));

const formula = text =>
  <MathJax.Context input='ascii'>
    <MathJax.Node inline>{text}</MathJax.Node>
  </MathJax.Context>

export default function Formulas() {
  const classes = useStyles();
  const roc = 'ROC=(x_n/x_(n-k) -1)*100'
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
            <Typography variant="h4" color="primary" gutterBottom>
              Średnia ruchoma (średnia krocząca)
      </Typography>
           jest metodą statystyczną używaną do analizy szeregów czasowych, czyli ciągów informacji uporządkowanych w czasie, których pomiary wykonywane są z dokładnym krokiem czasowym.
Prosta średnia ruchoma (SMA) to zwykła średnia arytmetyczna wartości z ostatnich n okresów.
<Typography className={classes.underline} gutterBottom>
              Wzór na prostą średnią ruchomą:
      </Typography>

Jeśli przez p0 oznaczymy ostatnią wartość, to wtedy:
<div><img src="/formulas/sma.png" /></div>


            <Typography variant="h4" color="primary" gutterBottom>
              Wskaźnik zmiany ROC (ang. Rate of change)
      </Typography>
      jeden z popularniejszych wskaźników giełdowej analizy technicznej. Oznacza procentową zmianę ceny z obecnej sesji do ceny sprzed k sesji. Często podawana wartość parametru k to 10 dla inwestycji średnioterminowych, zaś 5 dla krótkoterminowych. Jest pierwszym sygnałem zmiany siły trendu.
Chcąc zmierzyć tempo zmian na giełdzie, bada się stosunek ostatniej ceny zamknięcia do jakiejś ceny sprzed określonej liczby dni.

<div>      {formula(roc)}      </div>
gdzie:
<p>ROC – wskaźnik szybkości zmiany w okresie n,</p>
            <p>{formula("x_n")} – cena akcji na n-tej sesji,</p>
            <p>{formula("x_(n-k)")} – cena akcji na sesji o k wcześniejszej od n,</p>

            <Typography variant="h6" gutterBottom>
              Zasady potrzebne do interpretacji wskaźnika zmiany ROC:
      </Typography>
            <ul>
              <li>Trend rosnący, gdy cena i wskaźnik równocześnie osiągają maksimum;</li>
              <li>Trend malejący, gdy cena i wskaźnik osiągają równocześnie minimum;</li>
              <li>Zmiana trendu na przeciwny, gdy wskaźnik rośnie (spada) i jednocześnie cena osiąga minimum (maksimum);</li>
              <li>Zmiana trendu, gdy wskaźnik ROC pozostaje długo w jednym miejscu;</li>
            </ul>

            <Typography variant="h4" color="primary" gutterBottom>
              Wskaźnik relatywnej siły RSI
      </Typography>
            <Typography variant="subtitle1">
              (z ang. RelativeStrength Index)
      </Typography>
            <div>
              jest jednym z najpopularniejszych indykatorów używanych przez traderów. Jak sama nazwa wskazuje, RSI dostarcza informacji o sile ruchu ceny na twoim wykresie.
              RSI porównuje średni zysk i średnią stratę, a także analizuje hosse i bessę patrząc na ostatnie 14 świec.
</div>
            <Typography variant="h6" gutterBottom>
              Wskaźnik obliczany jest ze wzoru:
      </Typography>

            {formula("RSI=100-(100/(1+U/D))")}
            <p>{formula("U")} – suma dodatnich zmian ceny z n sesji (lub średnia z dodatnich zmian cen z n sesji);</p>
            <p>{formula("D")} – suma ujemnych zmian ceny z n sesji (lub średnia z ujemnych zmian cen z n sesji);</p>



            <Typography variant="h4" color="primary" gutterBottom>
              Wskaźnik MACD
      </Typography>
      sygnalizuje kupno lub sprzedaż:
            <Typography variant="h6" gutterBottom>
              Sygnał do kupna:
      </Typography>
            <ul>
              <li>Silny sygnał do kupna pojawia się wtedy, gdy linia MACD wychodzi powyżej linii sygnalnej i obie linie znajdują się poniżej poziomu 0;</li>
              <li>Słaby sygnał do kupna pojawia się wtedy gdy linia MACD wychodzi powyżej linii sygnalnej, ale obie linie znajdują się powyżej poziomu 0.</li>
            </ul>
            <Typography variant="h6" gutterBottom>
              Sygnał do sprzedaży:
      </Typography>
            <ul>
              <li>Silny sygnał do sprzedaży pojawia się wtedy gdy linia MACD spada poniżej linii sygnalnej i obie linie znajdują się powyżej poziomu 0.</li>
              <li>Słaby sygnał do sprzedaży pojawia się wtedy gdy linia MACD spada poniżej linii sygnalnej i obie linie znajdują się poniżej poziomu 0.</li>
            </ul>

            <Typography variant="h4" color="primary" gutterBottom>
              Mediana
      </Typography>
<p>Uporządkowanego ciągu rosnąco, np. 12345569, w tym przypadku wynosi {formula("(4+5)/2 = 4.5")}</p>
<p>A w tym przypadku 12348, wynosi 3</p>




          </Typography>
        </Paper>
      </Grid>
      <Grid item xs>

      </Grid>
    </Grid>
  )
}
