<template lang="html">
  <canvas id="chart-{{uid}}"
    v-bind.width="width"
    v-bind.height="height"></canvas>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default() { return 400; },
    },
    height: {
      type: Number,
      default() { return 400; },
    },
    data: {
      type: Array,
      default() { return [12, 19, 3, 5, 2, 3]; },
    },
  },
  data() {
    return {
      chart: null,
      uid: Math.ceil(Math.random() * Math.random() * 100),
    };
  },
  computed: {},
  components: {},
  methods: {
    createChart() {
      document.getElementById("myChart")
      this.chart = new Chart(
        document.getElementById(`chart${this.uid}`),
        {
          type: 'bar',
          data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
              label: '# of Votes',
              data: this.data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
    },
  },
  mounted() {},
};
</script>

<style lang="stylus">
</style>
