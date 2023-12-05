<template>
    <canvas id="myChart2" style="background-color:white;"></canvas>
</template>

<script>
import Chart from 'chart.js/auto';
import axios from 'axios';
export default {
    data() {
        return {
            data: []
        }
    },
    methods: {
        getSoluongTheoTrangThaiDonHang() {
            axios.get('http://localhost:5224/api/DashBoard/getSoLuongDonHangTheoTrangThai').then(rs => {
                this.data = rs.data
                this.setAmChartjs(this.data)
            }).catch(erro => {
                this.$store.commit('setLoginError', {
                    show: true,
                    icon: '$error',
                    content: erro.message,
                    color: 'error'
                });
                setTimeout(() => {
                    this.$store.commit('clearLoginError');
                }, 3000);
            })
        },
        setAmChartjs(dulieu) {
            var xValues = dulieu.map(item => item.TenTrangThai);;
            var yValues = dulieu.map(item => item.Value);;
            var barColors = [
                "#b91d47",
                "#00aba9",
                "#2b5797",
                "#e8c3b9",
                "#1e7145"
            ];


            new Chart("myChart2", {
                type: "pie",
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
    },
    created() {
        this.getSoluongTheoTrangThaiDonHang()
    },
}
</script>

<style scoped>
#chartdiv {
    width: 100%;
    height: 500px;
}
</style>