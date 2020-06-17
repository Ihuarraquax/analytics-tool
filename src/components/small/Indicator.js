import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';




export default function Indicator(props) {
  const theme = useTheme();
  var fontColor = theme.palette.grey[900];
  var floatValue = parseFloat((props.value).replace(/,/g, ''));
  if(props.colorValue){
    if(floatValue>0){
      fontColor = theme.palette.success.main
    }
    if(floatValue<0){
      fontColor = theme.palette.error.main
    }
  }
  const useStyles = makeStyles({
    container: {
      borderBottom: `2px solid ${theme.palette.primary.light}`,
      borderRadius: '16',
      width: '100px',
    },
    name: {
      color: theme.palette.grey[700],
      width: '100px',
      margin: 0,
      paddingTop: 10,
      lineHeight: 1,
      textAlign: 'left',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
    value: {
      fontWeight: 'bold',
      textAlign: "center",
      color: fontColor
    }
  });
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="overline" overflow="hidden" className={classes.name} >
        {props.name}
      </Typography>

      <Typography variant="h6" className={classes.value}>
        {props.value}
      </Typography>
    </div>
  )
}
