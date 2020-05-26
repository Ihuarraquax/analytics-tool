import React, { useEffect, useState } from 'react'
import * as d3 from "d3";
import { Line, Bar } from 'react-chartjs-2'



export default function Analyze() {

  const [data, setData] = useState([]);

  useEffect(() => {
    d3.csv("wig20_d.csv").then(data => {
      const filteredData = filterData(data)
      setData(filteredData)
      console.log(filteredData)
    })
  }, [])

  const filterData = (data) => {
    return data.slice(data.length - 30, data.length);
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
        },{
          data: data.map((day) => day.Zamkniecie),
          label: 'Zamkniecie',
          borderColor: '#58508d',
          backgroundColor: 'rgba(127, 174, 0, 0.2)',
          fill: false,
          lineTension: '0',
        },{
          data: data.map((day) => day.Najwyzszy),
          label: 'Najwyzszy',
          borderColor: '#bc5090',
          backgroundColor: 'rgba(195, 172, 0, 0.2)',
          fill: false,
          lineTension: '0',
        },{
          data: data.map((day) => day.Najnizszy),
          label: 'Najnizszy',
          borderColor: '#ff6361',
          backgroundColor: 'rgba(255, 166, 0, 0.2)',
          fill: false,
          lineTension: '0',
        }],
      }} />) : null
  )


  return (
    <div>
      {lineChart}
    </div>
  )
}
