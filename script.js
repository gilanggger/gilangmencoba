// Bar Chart for Pengeluaran per Departemen
const ctxBar = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['Departemen A', 'Departemen B', 'Departemen C'],
        datasets: [{
            label: 'Pengeluaran',
            data: [12000000, 15000000, 18000000],
            backgroundColor: ['rgba(75, 192, 192, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Line Chart for Tren Pengeluaran Bulanan
const ctxLine = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(ctxLine, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
        datasets: [{
            label: 'Pengeluaran',
            data: [10000000, 11000000, 12000000, 13000000, 14000000, 15000000],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Pie Chart for Pengeluaran per Departemen
const ctxPieDept = document.getElementById('pieChartDept').getContext('2d');
const pieChartDept = new Chart(ctxPieDept, {
    type: 'pie',
    data: {
        labels: ['Departemen A', 'Departemen B', 'Departemen C'],
        datasets: [{
            data: [30000000, 50000000, 20000000],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
            borderWidth: 1
        }]
    }
});

// Bar Chart for Pengeluaran per Departemen (Comparison)
const ctxBarDept = document.getElementById('barChartDept').getContext('2d');
const barChartDept = new Chart(ctxBarDept, {
    type: 'bar',
    data: {
        labels: ['Departemen A', 'Departemen B', 'Departemen C'],
        datasets: [{
            label: 'Pengeluaran',
            data: [12000000, 15000000, 18000000],
            backgroundColor: ['rgba(75, 192, 192, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Pie Chart for Pengeluaran per Kategori
const ctxPieKategori = document.getElementById('pieChartKategori').getContext('2d');
const pieChartKategori = new Chart(ctxPieKategori, {
    type: 'pie',
    data: {
        labels: ['Operasional', 'Marketing', 'R&D'],
        datasets: [{
            data: [50000000, 30000000, 20000000],
            backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
            borderColor: ['rgba(255, 159, 64, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
            borderWidth: 1
        }]
    }
});

// Bar Chart for Pengeluaran per Kategori (Comparison)
const ctxBarKategori = document.getElementById('barChartKategori').getContext('2d');
const barChartKategori = new Chart(ctxBarKategori, {
    type: 'bar',
    data: {
        labels: ['Operasional', 'Marketing', 'R&D'],
        datasets: [{
            label: 'Pengeluaran',
            data: [50000000, 30000000, 20000000],
            backgroundColor: ['rgba(153, 102, 255, 0.2)'],
            borderColor: ['rgba(153, 102, 255, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
