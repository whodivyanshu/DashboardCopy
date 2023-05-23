const ctx = document.getElementById("chart1");
const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
    datasets: [
      {
        label: false,
        data: [10, 50, 20, 10, 60, 10],
        borderColor: "rgb(102, 108, 255)",
        backgroundColor: 'rgba(255, 255, 255)',
        pointStyle: 'circle',
        pointRadius: 1,
        pointHoverRadius: 15
      }
    ]
  };

new Chart(ctx, {
  type: "line",
  data: data,
  options: {
    responsive: true,
    scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        }
      },
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      }
    },
    tooltips: {
        display: false,
    },
  }
});

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

const table1 = document.getElementById("table1");
const table2 = document.getElementById("table2");
const table3 = document.getElementById("table3");

btn1.addEventListener("click", function() {
  table1.style.display = "table";
  table2.style.display = "none";
  table3.style.display = "none";
});

btn2.addEventListener("click", function() {
  table2.style.display = "table";
  table1.style.display = "none";
  table3.style.display = "none";
});

btn3.addEventListener("click", function() {
  table3.style.display = "table";
  table1.style.display = "none";
  table2.style.display = "none";
});
