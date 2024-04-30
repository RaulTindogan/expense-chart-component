let allData = [];

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    dataChart(data)
  })

function dataChart (data) {
  const ctx = document.getElementById('myChart');
  
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: data.map(days=>(days.day)),
    datasets: [
      {
        label: 'Spending -Last 7 days',
        data: data.map(days=>(days.amount)),
        borderWidth: 1,
        borderRadius: 5,
        barPercentage: 1.1,
        backgroundColor: [
                'hsl(10, 79%, 65%)', // Original color for all bars
                'hsl(10, 79%, 65%)', // Blue
                'hsl(186, 34%, 60%)', // Yellow
                'hsl(10, 79%, 65%)', // Green
                'hsl(10, 79%, 65%)', // Purple
                'hsl(10, 79%, 65%)', // Purple
                'hsl(10, 79%, 65%)', // Purple
        ],
      },    
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          grid: {
            display: false
          },  
          display: false
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
  }
 
});
}
