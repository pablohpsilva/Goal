<style lang="stylus">
  @import "../../assets/styles/variables"
  .Goal
    padding 0 25px

  +prefix-classes('Goal__')
    .Title
      color $trd-color
      font 600 21px $rubik
      margin-top 0

    .Status
      display flex
      justify-content space-between
      align-items center

      &-Title
        color $trd-color
        font 400 18px $rubik
        width 70%

      &-Graphic
        width 30%

    .SubGoals
      list-style none
      margin 0
      padding 0

    .SubGoal
      display flex
      justify-content space-between
      align-items center
      padding-left 75px
      position relative

      &::before
        background rgba($primary-color, .5)
        border-radius 50%
        content ""
        display block
        height 16px
        left 0
        position absolute
        top calc(50% - 8px)
        width 16px

      &::after
        background-color $trd-color
        content ""
        display block
        height 1px
        left 26px
        position absolute
        top calc(50%)
        width 38px

      &:not(:last-child)
        margin-bottom 30px

      &-Description
        color $trd-color
        font 600 21px $rubik

        &--complete
          @extend .Goal__SubGoal-Description
          color $sec-color

      &-Value
        color $trd-color
        display block
        font 400 17px $rubik

      &-Percentage
        color $trd-color
        font 400 17px $rubik

        &--complete
          @extend .Goal__SubGoal-Percentage
          color $sec-color

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
        height 50vh
        width 100%

        &--complete
          @extend .Goal__Bar-intern
          background $sec-color
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
        <span class="Goal__SubGoal-Description--complete">
          Passport
          <span class="Goal__SubGoal-Value">$ 200.00</span>
        </span>
        <span class="Goal__SubGoal-Percentage--complete">100%</span>
      </li>
      <li class="Goal__SubGoal">
        <span class="Goal__SubGoal-Description">
          Tickets
          <span class="Goal__SubGoal-Value">$ 3,000.00</span>
        </span>
        <span class="Goal__SubGoal-Percentage">75%</span>
      </li>
      <li class="Goal__SubGoal">
        <span class="Goal__SubGoal-Description">
          Hotel
          <span class="Goal__SubGoal-Value">$ 1,000.00</span>
        </span>
        <span class="Goal__SubGoal-Percentage">45%</span>
      </li>
    </ul>

    <div class="Goal__Bar">
      <div class="Goal__Bar-intern--complete" style="height: 75vh"></div>
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
