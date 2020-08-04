import React, { useRef, useEffect } from "react";
import Chart from "chart.js";
import PropTypes from "prop-types";

const LineChart = (props) => {
  const {
    labels,
    label,
    datas,
    fill,
    backgroundColor,
    pointRadius,
    borderColor,
    borderWidth,
    lineTension,
    max,
    min,
  } = props.data;

  const canvasRef = useRef();

  const config = {
    type: props.type,
    options: {
      maintainAspectRatio: true,
      scales: {
        yAxes: [
          {
            ticks: {
              min: min,
              max: max,
            },
            gridLines: {
              display: true,
              color: "#cccccc2a",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              display: true,
              color: "#cccccc2a",
            },
          },
        ],
      },
    },
    data: {
      labels: labels,
      datasets: [
        {
          fill: fill,
          pointRadius: pointRadius,
          borderWidth: borderWidth,
          lineTension: lineTension,
          borderColor: borderColor,
          label: label,
          data: datas,
          backgroundColor: backgroundColor,
          borderDash: [5, 5],
          pointBackgroundColor: backgroundColor,
          pointBorderColor: backgroundColor,
          pointHoverBackgroundColor: backgroundColor,
          pointHoverBorderColor: backgroundColor,
        },
      ],
    },
  };

  useEffect(() => {
    const myChart = new Chart(canvasRef.current, config);
    myChart.options.scales.yAxes[0].ticks.max = props.data.max;
    myChart.options.scales.yAxes[0].ticks.min = props.data.min;
    myChart.data.labels = props.data.labels;
    myChart.data.datasets[0].data = props.data.datas;
    myChart.update();
  }, [
    props.data.max,
    props.data.min,
    props.data.labels,
    props.data.datas,
    config,
  ]);
  return <canvas ref={canvasRef} />;
};

LineChart.propTypes = {
  data: PropTypes.object,
  type: PropTypes.string,
};

export default LineChart;
