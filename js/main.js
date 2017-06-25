function start() {
    const ctx = document.getElementById("myChart");
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49"],
            datasets: [
                {
                    label: 'search data',
                    backgroundColor: 'rgba(41, 148, 255, 0.5)',
                    data: []
                }
            ]
        },
        option: {
            layout: {
                padding: {
                    left: 20,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            legend: {
                position: 'right'
            }
        }
    });
}

function update(ans) {
    myChart.data.datasets[0].data = ans;
    myChart.update();
}

function addData(chart, label, color, data, times) {
    chart.data.datasets.push({
        label: label,
        backgroundColor: color,
        data: data
    });
    chart.update();
}
    

