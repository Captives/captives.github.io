<template>
    <div ref="chart" class="chart-view"></div>
</template>
<script>
export default {
    name: "Chart2",
    mounted() {
        const chart = this.$echarts.init(this.$refs.chart);

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: "天气情况统计",
                subtext: "虚构数据",
                left: "center",
            },
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)",
            },
            legend: {
                // orient: 'vertical',
                // top: 'middle',
                bottom: 10,
                left: "center",
                data: ["西凉", "益州", "兖州", "荆州", "幽州"],
            },
            series: [
                {
                    type: "pie",
                    radius: "65%",
                    center: ["50%", "50%"],
                    selectedMode: "single",
                    data: [
                        {
                            value: 1548,
                            name: "幽州",
                            label: {
                                normal: {
                                    formatter: ["{title|{b}}{abg|}", "  {weatherHead|天气}{valueHead|天数}{rateHead|占比}", "{hr|}", "  {Sunny|}{value|202}{rate|55.3%}", "  {Cloudy|}{value|142}{rate|38.9%}", "  {Showers|}{value|21}{rate|5.8%}"].join("\n"),
                                    backgroundColor: "#eee",
                                    borderColor: "#777",
                                    borderWidth: 1,
                                    borderRadius: 4,
                                    rich: {
                                        title: {
                                            color: "#eee",
                                            align: "center",
                                        },
                                        abg: {
                                            backgroundColor: "#333",
                                            width: "100%",
                                            align: "right",
                                            height: 25,
                                            borderRadius: [4, 4, 0, 0],
                                        },
                                        Sunny: {
                                            height: 30,
                                            align: "left",
                                            backgroundColor: {
                                                // image: Sunny
                                            },
                                        },
                                        Cloudy: {
                                            height: 30,
                                            align: "left",
                                            backgroundColor: {
                                                // image: Cloudy
                                            },
                                        },
                                        Showers: {
                                            height: 30,
                                            align: "left",
                                            backgroundColor: {
                                                // image: Showers
                                            },
                                        },
                                        weatherHead: {
                                            color: "#333",
                                            height: 24,
                                            align: "left",
                                        },
                                        hr: {
                                            borderColor: "#777",
                                            width: "100%",
                                            borderWidth: 0.5,
                                            height: 0,
                                        },
                                        value: {
                                            width: 20,
                                            padding: [0, 20, 0, 30],
                                            align: "left",
                                        },
                                        valueHead: {
                                            color: "#333",
                                            width: 20,
                                            padding: [0, 20, 0, 30],
                                            align: "center",
                                        },
                                        rate: {
                                            width: 40,
                                            align: "right",
                                            padding: [0, 10, 0, 0],
                                        },
                                        rateHead: {
                                            color: "#333",
                                            width: 40,
                                            align: "center",
                                            padding: [0, 10, 0, 0],
                                        },
                                    },
                                },
                            },
                        },
                        { value: 535, name: "荆州" },
                        { value: 510, name: "兖州" },
                        { value: 634, name: "益州" },
                        { value: 735, name: "西凉" },
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: "rgba(0, 0, 0, 0.5)",
                        },
                    },
                },
            ],
        };

        setInterval(() => {
            option.series[0].data.map((item) => {
                item.value = Math.floor(Math.random() * 1000);
            });

            chart.setOption(option);
        }, 3000);

        chart.setOption(option);
        window.onresize = chart.resize;
    },
};
</script>
