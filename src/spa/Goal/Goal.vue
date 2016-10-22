<style lang="stylus">
  +prefix-classes('Goal__')
    .Title
      &-Icon
        &--trip

    .Status
      &-Title
      &-Graphic

    .SubGoals
    .SubGoal
      &-description
        &--complete

      &-value

      &-percentage
        &--complete

    .Bar
      height 100vh
      width 8px

      &--intern
        background-color $sec-color
        height 50vh
</style>

<template lang="html">
  <div class="Goal">
    <h1 class="Goal__Title">
      <i class="Goal__Title-Icon--trip"></i>
      New York Trip
    </h1>

    <div class="Goal__Status">
      <h3 class="Goal__Status-Title">Faltam $ 1.999,00 para atingir sua meta</h3>
      <div class="Goal__Status-Graphic">Gráfico</div>
    </div>

    <ul class="Goal__SubGoals">
      <li class="Goal__SubGoal">
        <span class="Goal__SubGoal-description--complete">Passport</span>
        <span class="Goal__SubGoal-value">$ 200.00</span>
        <span class="Goal__SubGoal-percentage--complete">100%</span>
      </li>
      <li class="Goal__SubGoal">
        <span class="Goal__SubGoal-description">Tickets</span>
        <span class="Goal__SubGoal-value">$ 3,000.00</span>
        <span class="Goal__SubGoal-percentage">75%</span>
      </li>
      <li class="Goal__SubGoal">
        <span class="Goal__SubGoal-description">Hotel</span>
        <span class="Goal__SubGoal-value">$ 1,000.00</span>
        <span class="Goal__SubGoal-percentage">45%</span>
      </li>
    </ul>

    <div class="Goal__Bar">
      <div class="Goal__Bar-intern" style="height: 75vh"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  vuex: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  components: {},
  methods: {},
  mounted() {},
};
</script>
