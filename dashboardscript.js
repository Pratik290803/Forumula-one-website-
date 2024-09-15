document.addEventListener('DOMContentLoaded', function() {
    fetch('F1_2023.json')
        .then(response => response.json())
        .then(data => {
            populateTables(data);
            renderCharts(data);
        })
        .catch(error => console.error('Error fetching data:', error));

    const driversNav = document.getElementById('driversNav');
    const driversSection = document.getElementById('drivers');

    driversNav.addEventListener('click', () => {
        // Hide other sections and show the drivers section
        document.querySelectorAll('main section').forEach(section => section.classList.add('hidden'));
        driversSection.classList.remove('hidden');
        loadDrivers();
    });
});

function populateTables(data) {
    const topDriversTable = document.getElementById('topDriversTable').getElementsByTagName('tbody')[0];
    const topConstructorsTable = document.getElementById('topConstructorsTable').getElementsByTagName('tbody')[0];
    const allDriversTable = document.getElementById('allDriversTable').getElementsByTagName('tbody')[0];

    const driverPoints = {};
    const constructorPoints = {};

    data.forEach(record => {
        const driver = record.Driver;
        const constructor = record.Constructor;
        const totalPoints = Object.values(record).slice(2).reduce((acc, points) => acc + points, 0);

        driverPoints[driver] = (driverPoints[driver] || 0) + totalPoints;
        constructorPoints[constructor] = (constructorPoints[constructor] || 0) + totalPoints;
    });

    const topDrivers = Object.entries(driverPoints).sort((a, b) => b[1] - a[1]).slice(0, 5);
    const topConstructors = Object.entries(constructorPoints).sort((a, b) => b[1] - a[1]).slice(0, 5);

    topDrivers.forEach(([driver, points]) => {
        const row = topDriversTable.insertRow();
        row.insertCell(0).textContent = driver;
        row.insertCell(1).textContent = points;
    });

    topConstructors.forEach(([constructor, points]) => {
        const row = topConstructorsTable.insertRow();
        row.insertCell(0).textContent = constructor;
        row.insertCell(1).textContent = points;
    });

    data.forEach(record => {
        const row = allDriversTable.insertRow();
        row.insertCell(0).textContent = record.Driver;
        row.insertCell(1).textContent = record.Constructor;

        Object.values(record).slice(2).forEach(points => {
            const cell = row.insertCell();
            cell.textContent = points;
        });

        const totalPoints = Object.values(record).slice(2).reduce((acc, points) => acc + points, 0);
        row.insertCell(-1).textContent = totalPoints;
    });
}

function renderCharts(data) {
    const driverPoints = {};
    const constructorPoints = {};

    data.forEach(record => {
        const driver = record.Driver;
        const constructor = record.Constructor;
        const totalPoints = Object.values(record).slice(2).reduce((acc, points) => acc + points, 0);

        driverPoints[driver] = (driverPoints[driver] || 0) + totalPoints;
        constructorPoints[constructor] = (constructorPoints[constructor] || 0) + totalPoints;
    });

    const topDrivers = Object.entries(driverPoints).sort((a, b) => b[1] - a[1]).slice(0, 5);
    const topConstructors = Object.entries(constructorPoints).sort((a, b) => b[1] - a[1]).slice(0, 5);

    const topDriversChart = new Chart(document.getElementById('topDriversChart').getContext('2d'), {
        // type: 'bar',
        // data: {
        //     labels: topDrivers.map(([driver]) => driver),
        //     datasets: [{
        //         label: 'Points',
        //         data: topDrivers.map(([, points]) => points),
        //         backgroundColor: 'rgba(227, 165, 199, 0.7)',
        //         borderColor: 'rgba(227, 165, 199, 1)',
        //         borderWidth: 1
              

                

        //     }]
        // },
        // options: {
        //     responsive: true,
        //     scales: {
        //         y: {
        //             beginAtZero: true
        //         }
        //     }
        // }
        
    

    type: 'bar',
                data: {
                    labels: topDrivers.map(([driver]) => driver),
                    datasets: [{
                        label: 'Points',
                        data: topDrivers.map(([, points]) => points),
                        backgroundColor: 'rgba(227, 165, 199, 0.7)',
                        borderColor: 'rgba(227, 165, 199, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                color: '#ffffff' // Y-axis labels color
                            }
                        },
                        x: {
                            ticks: {
                                color: '#ffffff' // X-axis labels color
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            labels: {
                                color: '#ffffff' // Legend text color
                            }
                        },
                        tooltip: {
                            titleColor: '#ffffff', // Tooltip title color
                            bodyColor: '#ffffff'  // Tooltip body color
                        }
                    }
                }
            });


    const topConstructorsChart = new Chart(document.getElementById('topConstructorsChart').getContext('2d'), {
        type: 'bar',
        data: {
            labels: topConstructors.map(([constructor]) => constructor),
            datasets: [{
                label: 'Points',
                data: topConstructors.map(([, points]) => points),
                backgroundColor: 'rgba(182, 146, 194, 0.7)',
                borderColor: 'rgba(182, 146, 194, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#ffffff' // Y-axis labels color
                    }
                },
                x: {
                    ticks: {
                        color: '#ffffff' // X-axis labels color
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff' // Legend text color
                    }
                },
                tooltip: {
                    titleColor: '#ffffff', // Tooltip title color
                    bodyColor: '#ffffff'  // Tooltip body color
                }
            }
        }    
    });
}

function loadDrivers() {
    fetch('F1_2023.json')
        .then(response => response.json())
        .then(data => {
            const driversList = document.querySelector('.drivers-list');
            driversList.innerHTML = ''; // Clear existing content

            data.forEach(driver => {
                const driverCard = document.createElement('div');
                driverCard.classList.add('driver-card');

                const driverName = document.createElement('span');
                driverName.textContent = `${driver.Driver}`;

                const driverIndicator = document.createElement('span');
                driverIndicator.textContent = '>';
                driverIndicator.style.color = driver.teamColor; // Assume teamColor is available in JSON

                driverCard.appendChild(driverName);
                driverCard.appendChild(driverIndicator);

                driversList.appendChild(driverCard);
            });
        })
        .catch(error => console.error('Error loading drivers:', error));
}

function showHomePage() {
    document.getElementById('home-page').style.display = 'block';
    document.getElementById('dashboard').style.display = 'none';
}

function showDashboard() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
}