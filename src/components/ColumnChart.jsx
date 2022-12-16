import React from 'react'
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

const ColumnChart = (cData) => {
  return (
    <>
        <Bar data={cData}/>
    </>
  )
}

export default ColumnChart