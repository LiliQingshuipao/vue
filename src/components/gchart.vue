<template>
    <div class="g-chart-box"></div>
</template>
<style >
    .g-chart-box{
        width:100%;
        height: 100%;
    }
</style>

<script>
var echarts = require('echarts');
export default {
    name: "gchart",
    mounted(){
        console.log(this)
        var myChart = echarts.init(this.$el);
        // 绘制图表
        myChart.setOption({
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }
}
</script>
