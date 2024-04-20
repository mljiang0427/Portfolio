"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Sample dataset
  const data = {
    labels: ["Constrution & Real Estate", "Manufacturing & Mining", "Retail & Transportation", 
    "Healthcare & Leisure", "Other Services", "Goverment"],
    values: [2.7, 0.7, 0.6, 3.4, 1.1, 3.2],
  };

  // Doughnut chart
  var doughnutCtx = document.getElementById("doughnutChart").getContext("2d");
  new Chart(doughnutCtx, {
    type: "doughnut",
    data: {
      labels: data.labels,
      datasets: [
        {
          label: "Growth (%)",
          data: data.values,
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(153, 102, 255, 0.5)",
            "rgba(208, 123, 197, 0.8)",
          ],
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: 'Employment by Industry Group, % Growth (Annualized), Dec 2023 - Feb 2024'
      }
    }
  });

  // Horizontal bar chart
  var horizontalBarCtx = document.getElementById("horizontalBarChart").getContext("2d");
  new Chart(horizontalBarCtx, {
    type: "horizontalBar",
    data: {
      labels: data.labels,
      datasets: [
        {
          label: "Growth (%)",
          data: data.values,
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(153, 102, 255, 0.5)",
            "rgba(208, 123, 197, 0.8)",
          ],
        },
      ],
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Employment by Industry Group, % Growth (Annualized), Dec 2023 - Feb 2024'
      }
    }
  });
});
