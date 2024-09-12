const xValues = [0,5,10,15,20,25,30,35,40,45];
const yvalues = [5000,]

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [0,1000,1055,1060,1100,1110,1330,2210,2400,3300],
      borderColor: "red",
      fill: false
    }, { 
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "green",
      fill: true
    },]
  },
  options: {
    legend: {display: false}
  }
});
