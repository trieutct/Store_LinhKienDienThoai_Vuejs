<template>
    <canvas id="myChart" style="background-color:white;"></canvas>
</template>

<script>
import Chart from 'chart.js/auto';
export default {
    mounted() {
        const ctx = document.getElementById('myChart');

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [100, 150, 30, 520, 223, 300],
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
    }
}
</script>

<style></style>