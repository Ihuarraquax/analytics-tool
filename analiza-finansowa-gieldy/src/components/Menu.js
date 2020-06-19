import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import InfoIcon from '@material-ui/icons/Info';
import TimelineIcon from '@material-ui/icons/Timeline';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import WorkIcon from '@material-ui/icons/Work';
import FunctionsIcon from '@material-ui/icons/Functions';
import BuildIcon from '@material-ui/icons/Build';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Menu() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Button className={classes.title} color="inherit" startIcon={<InfoIcon />} size="large"
          component={Link} to="/">
          O projekcie</Button>

        <Button className={classes.title} color="inherit" startIcon={<ShowChartIcon />} size="large"
          component={Link} to="/analiza">
          Analiza</Button>

        <Button className={classes.title} color="inherit" startIcon={<WorkIcon />} size="large"
          component={Link} to="/indeksy">
          Indeksy</Button>

        <Button className={classes.title} color="inherit" startIcon={<FunctionsIcon />} size="large"
          component={Link} to="/wzory">
          Wzory</Button>

        <Button className={classes.title} color="inherit" startIcon={<BuildIcon />} size="large"
          component={Link} to="/narzedzia">
          Narzędzia</Button>
 
        <Button className={classes.title} color="inherit" startIcon={<PermContactCalendarIcon />}  size="large"
          component={Link} to="/kontakt">
          Kontakt</Button>
      </Toolbar>
    </AppBar>
  )
}
