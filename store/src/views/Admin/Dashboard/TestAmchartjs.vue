<template>
    <div id="chartdiv"></div>
</template>

<script>
export default {
    mounted() {
        am5.ready(function () {
            var root = am5.Root.new("chartdiv");
            root.setThemes([
                am5themes_Animated.new(root)
            ]);
            var chart = root.container.children.push(am5percent.PieChart.new(root, {
                layout: root.verticalLayout,
                innerRadius: am5.percent(50)
            }));
            var series = chart.series.push(am5percent.PieSeries.new(root, {
                valueField: "value",
                categoryField: "category",
                alignLabels: false
            }));
            series.labels.template.setAll({
                textType: "circular",
                centerX: 0,
                centerY: 0,
                text: "{category}: {value} đơn"
            });
            series.data.setAll([
                { value: 5, category: "Four" },
                { value: 4, category: "Five" },
                { value: 3, category: "Six" },
                { value: 1, category: "Seven" },
            ]);
            var legend = chart.children.push(am5.Legend.new(root, {
                centerX: am5.percent(50),
                x: am5.percent(50),
                marginTop: 15,
                marginBottom: 15,
            }));
            legend.data.setAll(series.dataItems);
            series.appear(1000, 100);
        });
    }
}
</script>

<style scoped>
#chartdiv {
    width: 100%;
    height: 500px;
}
</style>