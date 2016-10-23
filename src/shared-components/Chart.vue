<style lang="less">
</style>

<template lang="html">
    <div>
        <canvas class="myChart" width="100" height="55" v-bind:id="uniqueID"></canvas>
    </div>
</template>

<script type="text/babel">
import ChartJS from 'chart.js';

export default {
  props: {
    type: {
      type: String,
      default() { return 'line'; },
    },
    chartData: {
      type: Object,
      default() { return {}; },
    },
    options: {
      type: Object,
      default() {
        return {
          scales: {
            xAxes: [{
              stacked: true,
            }],
            yAxes: [{
              stacked: true,
            }],
          },
          hover: {
            mode: 'label',
          },
          animation: false,
        };
      },
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  computed: {
    uniqueID() {
      return `chart-${Math.ceil(Math.random() * Math.random() * 1000)}`;
    },
  },
  watch: {
    chartData() {
      this.render();
    },
  },
  methods: {
    setChartGlobals() {
      const hide = {
        display: false,
      };
      ChartJS.defaults.global.title = hide;
      ChartJS.defaults.global.legend = hide;
      ChartJS.defaults.global.tooltips = { enabled: false };
    },
    render() {
      /* eslint-disable no-undef */
      const canvas = window.document.getElementById(this.uniqueID);
      if (canvas && this.chartData) {
        this.chart = new ChartJS(
          canvas.getContext('2d'), {
            type: this.type,
            data: this.chartData,
            options: this.options,
          }
        );
        this.chart.generateLegend();
      }
    },
  },
  mounted() {
    this.setChartGlobals();
    this.render();
  },
};
</script>
