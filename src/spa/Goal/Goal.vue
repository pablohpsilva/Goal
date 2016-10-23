<style lang="stylus">
  @import "../../assets/styles/variables"
  @import "../../assets/styles/mixins"

  +prefix-classes('Goal__')
    .Header
      flex()
      flex-justify(space-between)
      flex-align-items(center)
      margin 5px 0 15px
      padding 0 25px

    .Btn--back
      background none
      border none
      color $trd-color
      text-decoration none

    .Icon--back
      color $primary-color
      font-size 44px

    .Title
      color $trd-color
      font 600 21px $rubik
      margin-top 0

    .Status
      flex()
      flex-justify(space-between)
      flex-align-items(center)
      margin-bottom 30px
      padding 0 25px

      &-Title
        color $trd-color
        font 400 18px $rubik
        width 70%

      &-Graphic
        width 30%

    .SubGoals
      list-style none
      margin 0
      padding 0 25px

    .SubGoal
      padding-left 55px
      position relative

      &::before
        background url("../../assets/icons/IconGrowBlue.svg") no-repeat
        background-size 18px
        content ""
        display block
        height 18px
        left 0
        position absolute
        top calc(50% - 8px)
        width 18px

      &::after
        background-color $trd-color
        content ""
        display block
        height 1px
        left 26px
        position absolute
        top calc(50%)
        width 23px

      &:not(:last-child)
        margin-bottom 30px

      &--complete
        @extend .Goal__SubGoal

        &::before
          background-image url("../../assets/icons/IconGrow.svg")

      &-Description
        color $trd-color
        display block
        font 400 20px $rubik
        margin-bottom 5px
        width 100%

        &--complete
          @extend .Goal__SubGoal-Description
          color $sec-color

      &-Value
        color $trd-color
        display block
        flex()
        flex-justify(space-between)
        font 300 17px $rubik
        width 100%

      &-Percentage
        color $trd-color
        font 300 17px $rubik
        padding-right 28px
        position relative

        &--complete
          @extend .Goal__SubGoal-Percentage
          color $sec-color

          &::before
            background url("../../assets/icons/Heart.svg") no-repeat
            background-size 25px
            content ""
            display block
            height 25px
            position absolute
            right 0
            top -4px
            width 25px

    .Bar
      align-items flex-end
      display flex
      height 100vh
      position fixed
      right 0
      top 0
      width 8px
      background-color $primary-color

      &-intern
        background-color $sec-color
        background-image -webkit-linear-gradient(bottom, $sec-color 67%, $sec-color 89%, $primary-color 100%)
        background-image linear-gradient(to top, $sec-color 67%, $sec-color 89%, $primary-color 100%)
        height 0
        width 100%
        transition height 1.5s ease-in-out

        &--complete
          @extend .Goal__Bar-intern
          background $sec-color
</style>

<template lang="html">
  <div class="Goal">
    <div class="Goal__Header">
      <router-link class="Goal__Btn--back"
                 :to="{ name: 'dash' }">
                   <i class="icon-left Goal__Icon--back"></i>
      </router-link>

      <h1 class="Goal__Title">
        {{ goalName }}
      </h1>
    </div>

    <action-bar></action-bar>

    <div class="Goal__Status">
      <h3 class="Goal__Status-Title">You're $ {{ remainingValue().toFixed(0) }} to reach your goal. Keep it up.</h3>
      <div class="Goal__Status-Graphic">
        <chart v-bind:chart-data="chartData" v-bind:options="chartOptions"></chart>
      </div>
    </div>

    <ul class="Goal__SubGoals">
      <li v-bind:class="(calcPercentage(subgoal.value, subgoal.reservedBalance) === 100) ?
          'Goal__SubGoal--complete' : 'Goal__SubGoal'"
          v-for="subgoal in subgoalList">
        <span v-bind:class="(calcPercentage(subgoal.value, subgoal.reservedBalance) === 100) ?
              'Goal__SubGoal-Description--complete' : 'Goal__SubGoal-Description'">
              {{ subgoal.name }}
        </span>
        <span class="Goal__SubGoal-Value">
          {{ '$ ' + subgoal.value.toFixed(2) }}
          <span v-bind:class="(calcPercentage(subgoal.value, subgoal.reservedBalance) === 100) ?
                'Goal__SubGoal-Percentage--complete' : 'Goal__SubGoal-Percentage'">
                {{ calcPercentage(subgoal.value, subgoal.reservedBalance) }}%</span>
        </span>
      </li>
    </ul>

    <div class="Goal__Bar">
      <div v-bind:class="(totalPercentage() === 100) ?
           'Goal__Bar-intern--complete' : 'Goal__Bar-intern'"
           v-bind:style="{ height: totalPercentage() + 'vh' }"></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import Chart from '../../shared-components/Chart';
import ActionBar from '../../shared-components/ActionBar';

import {
  subGoalsResource,
 } from '../../vuex/resources';

export default {
  props: {},
  vuex: {},
  data() {
    return {
      goalName: '',
      subGoalsResource: subGoalsResource(this.$resource),
      subgoalList: [],
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Agost', 'September', 'October', 'November', 'December'],
        datasets: [{
          label: 'My First dataset',
          fill: false,
          lineTension: 0.4,
          backgroundColor: 'rgba(75,192,192,0)',
          borderWidth: 2,
          borderColor: 'rgba(66, 196, 230, 1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,0)',
          pointBackgroundColor: 'rgba(0,0,0,0)',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 0,
          pointHitRadius: 10,
          data: [0, 50, 30, -40, 60, -10, 50, -5, 30],
          spanGaps: false,
        }],
      },
      chartOptions: {
        animation: {
          duration: 2000,
          easing: 'easeInOutSine',
        },
        scales: {
          xAxes: [{
            display: false,
          }],
          yAxes: [{
            display: false,
          }],
        },
      },
    };
  },
  computed: {},
  watch: {},
  components: {
    Chart,
    ActionBar,
  },
  methods: {
    ...mapActions([
      'setLoader',
    ]),
    requestSubgoalList() {
      const id = 24;
      this.setLoader(true);
      this.subGoalsResource.getSubGoals({ id })
        .then((doc) => {
          this.goalName = doc.data.goalName;
          this.subgoalList = doc.data.subGoals;
          this.setLoader(false);
        })
        .catch(() => {
          this.subgoalList = [];
          this.setLoader(false);
        });
    },
    calcPercentage(amount, payment) {
      return +(((payment * 100) / amount).toFixed(0));
    },
    remainingValue() {
      const total = this.subgoalList.reduce((att, el) =>
        att + +(+el.value - +el.reservedBalance), 0);
      return total;
    },
    totalPercentage() {
      const total = this.subgoalList.reduce((att, el) =>
        att + this.calcPercentage(el.value, el.reservedBalance), 0);
      return total / this.subgoalList.length;
    },
  },
  mounted() {
    this.requestSubgoalList();
  },
};
</script>
