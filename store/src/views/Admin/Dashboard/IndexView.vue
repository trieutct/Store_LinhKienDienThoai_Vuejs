<template>
    <v-container>
        <canvas id="myChart" style="width:100%"></canvas>
    </v-container>
</template>

<script>
export default {
    mounted() {
        const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
        const yValues = [55, 49, 44, 24, 15];
        const barColors = [
            "#b91d47",
            "#00aba9",
            "#2b5797",
            "#e8c3b9",
            "#1e7145"
        ];

        new Chart("myChart", {
            type: "doughnut",
            data: {
                labels: xValues,
                datasets: [{
                    backgroundColor: barColors,
                    data: yValues
                }]
            },
            options: {
                title: {
                    display: true,
                    text: "World Wide Wine Production 2018"
                }
            }
        });
    }
}
</script>


<style></style>