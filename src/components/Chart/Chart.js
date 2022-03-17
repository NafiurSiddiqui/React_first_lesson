import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

function Chart(props) {
 //map the dataPoint values from the props,which is the chartDataPoints
 const dataPointValues = props.dataPoints.map((dataPoints) => dataPoints.value);
 //get the max value from the the mapped datapoints
 const totalMaximum = Math.max(...dataPointValues);
 //  👆 note`we had to destructure it in order to get the value out of arrays since Math.Max only expects numbers from low to high
 return (
  <div className="chart">
   {/* rather than defining handcoded 12 months bar
        we render it dynamically based on any value.
        which we expect to be an array.hence, the use of dataPoints.map
      */}
   {props.dataPoints.map((dataPoints) => (
    <ChartBar
     // we expect a value from the data
     //we wanna define a max value
     //we need a label..e.g. Jan, Feb etc.
     //since it is a list, we need a key for proper indexing
     key={dataPoints.label}
     value={dataPoints.value}
     maxValue={totalMaximum}
     label={dataPoints.label}
    />
   ))}
  </div>
 );
}

export default Chart;
