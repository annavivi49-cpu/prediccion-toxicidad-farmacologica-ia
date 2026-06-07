const ctx = document.getElementById('grafica');

new Chart(ctx, {
    type: 'line',

    data: {
        labels: [3.2, 4.1, 5.0, 6.2, 7.1],

        datasets: [{
            label: 'Toxicidad observada',

            data: [5.1, 6.8, 8.0, 9.5, 11.2],

            borderColor: '#2563eb',

            backgroundColor: '#2563eb',

            borderWidth: 3,

            tension: 0.35,

            fill: false
        }]
    },

    options: {

        responsive: true,

        plugins: {

            title: {
                display: true,
                text: 'Relación entre lipofilia y toxicidad'
            },

            legend: {
                display: true
            }
        },

        scales: {

            x: {
                title: {
                    display: true,
                    text: 'Lipofilia'
                }
            },

            y: {
                title: {
                    display: true,
                    text: 'Toxicidad'
                }
            }

        }
    }
});
