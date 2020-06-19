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

export default function About() {
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
            <img className={classes.logoBaner} src="https://jzo.uph.edu.pl/images/szablon/logotypy_2.jpg"></img>
            <div className={classes.headText}>
              <div ><span><strong>Nr projektu:</strong>&nbsp;<strong>POWR.03.01.00-00-U086/17-00</strong></span></div>
              <div><span ><strong>Numer i nazwa Osi priorytetowej:</strong>&nbsp;III. Szkolnictwo wyższe dla gospodarki i rozwoju</span></div>
              <div><span ><strong>Numer i nazwa Działania:</strong>&nbsp;3.1 Kompetencje w szkolnictwie wyższym</span></div>
              <div><span >OTRZYMANE DOFINANSOWANIE: 468 807,50 PLN&nbsp;</span></div>
              <div><span >(Wkład Europejskiego Funduszu Społecznego: 395 110,96 PLN)</span></div>
              <div><span ><strong>GŁÓWNY CEL PROJEKTU</strong></span></div>
              <p><span>Nabycie przez 576 uczniów szkół podstawowych w latach 2018 - 2020 kompetencji odpowiadających potrzebom rynku pracy i społeczeństwa.</span></p>
OPIS PROJEKTU
</div>
            <p><span >Projekt przewiduje realizację działań dotyczących kształtowania/podniesienia kompetencji uczniów klasy IV oraz VII 4 szkół podstawowych z terenu Miasta Siedlce jak również 7 szkół podstawowych z terenu gminy Siedlce.</span></p>
            <p><span >Wsparciem zostaną objęci uczniowie z następujących szkół podstawowych:</span></p>
            <p><span >- z terenu Miasta Siedlce: SP nr 4; SP nr 10 oraz SP nr 12;</span></p>
            <p><span >- z terenu gminy Siedlce: SP w Białkach; SP w Golicach, SP w Nowych Iganiach, SP w Pruszynie, SP w Stoku Lackim, SP w Strzale oraz SP w Żelkowie Kolonii.</span></p>
            <p><span >Projekt przewiduje opracowanie programów kształcenia z zakresu/dziedzin: chemii, fizyki, matematyki oraz informatyki i realizację działań dydaktycznych z jednostkami samorządu terytorialnego dla dzieci i młodzieży w wieku średnio 10 i 13 lat.</span></p>
            <p><span >Uczestnicy poprzez udział w zajęciach z:</span></p>
            <ul>
              <li><span>- chemii,</span></li>
              <li><span>- fizyki,</span></li>
              <li><span>- matematyki,</span></li>
              <li><span>- informatyki</span></li>
            </ul>
            <p><span >rozwiną swoje kompetencje pozwalające na: rozbudzanie ciekawości poznawczej, inspirowanie do twórczego myślenia i rozwijania zainteresowań i pasji, zapoznanie ze środowiskiem akademickim i uczelnią jako miejscem naukowego oglądu rzeczywistości, stymulowanie intelektualnego, aksjologicznego i społecznego rozwoju młodego pokolenia jak również integrację lokalnej społeczności wokół ośrodków akademickich poprzez stworzenie warunków do prowadzenia zorganizowanych, pozaszkolnych zajęć edukacyjnych, popularyzatorskich, a także do wsparcia działalności i podwyższenia jakości już prowadzonych zajęć</span></p>
            <p><span >Osoby objęte wsparciem nabędą dodatkowe umiejętności kluczowe na obecnym rynku pracy i oczekiwane przez społeczeństwo. Poprzez uczestnictwo w zaproponowanych formach wsparcia uczniowie nabędą nowe lub rozwiną posiadane kompetencje kluczowe i umiejętności uniwersalne takie jak: kreatywność, umiejętność rozwiązywania problemów, uczenia się, umiejętność pracy zespołowej w kontekście środowiska pracy, umiejętności matematyczno-przyrodnicze jak również ICT</span></p>
            <p className={classes.headText}><span ><strong>UZASADNIENIE POTRZEBY REALIZACJI PROJEKTU</strong></span></p>
            <p><span >Do głównych potrzeb/oczekiwań uczniów zaliczyć można m.in.:</span></p>
            <p><span >-zwiększenie oferty zajęć dodatkowych w zakresie wzmacniania kompetencji (np. w ramach szkoleń/warsztatów), prowadzonych w sposób praktyczny, atrakcyjny, ciekawy;</span></p>
            <p><span >-możliwość rozwijania kompetencji kluczowych dzieci i młodzieży poprzez aktywną pracę zespołową.</span></p>
            <p><span >Działania projektowe (nieodpłatne, praktyczne zajęcia) mają za zadanie zainteresować uczniów, rozbudzić w nich ciekawość i potrzebę poznania oraz zlikwidować bariery:</span></p>
            <p><span >-ekonomiczną: wysokie koszty zajęć dodatkowych,</span></p>
            <p><span >-organizacyjną: brak zdefiniowanych zasad współpracy pomiędzy Uczelnią a poszczególnymi szkołami, brak oferty ciekawych zajęć praktycznych skierowanych do młodzieży,</span></p>
            <p><span >-mentalną: przełamanie niechęci do zajęć dodatkowych, rozbudzenie zainteresowań i chęci poznania.</span></p>
            <br /><br />
            <div><span>Zajęcia w ramach projektu odbywają się w budynku Wydziału Nauk Ścisłych i Przyrodniczych,<br /> Uniwersytetu Przyrodniczo-Humanistycznego w Siedlcach</span><span>przy ul. 3 Maja 54.</span></div>
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs>

      </Grid>
    </Grid>
  )
}
