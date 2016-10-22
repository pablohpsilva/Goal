<style lang="stylus">
  @import "../../assets/styles/variables"
  @import "../../assets/styles/mixins"

  +prefix-classes('Goal__')
    .Header
      flex()
      flex-justify(space-between)
      flex-align-items(center)
      margin-bottom 30px
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
      display flex
      justify-content space-between
      align-items center
      padding-left 75px
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
        width 38px

      &:not(:last-child)
        margin-bottom 30px

      &--complete
        @extend .Goal__SubGoal

        &::before
          background-image url("../../assets/icons/IconGrow.svg")

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
            top -9px
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
        height 50vh
        width 100%

        &--complete
          @extend .Goal__Bar-intern
          background $sec-color
</style>

<template lang="html">
  <div class="Goal">
    <action-bar></action-bar>
    <div class="Goal__Header">
      <router-link class="Goal__Btn--back"
                   :to="{ name: 'dash' }">
                   <i class="icon-left Goal__Icon--back"></i>
      </router-link>

      <h1 class="Goal__Title">
        <i class="icon-worldtrip"></i>
        New York Trip
      </h1>
    </div>

    <div class="Goal__Status">
      <h3 class="Goal__Status-Title">Faltam $ 1.999,00 para atingir sua meta</h3>
      <div class="Goal__Status-Graphic">Gráfico</div>
    </div>

    <ul class="Goal__SubGoals">
      <li class="Goal__SubGoal--complete">
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
      <div class="Goal__Bar-intern" style="height: 75vh"></div>
    </div>
  </div>
</template>

<script>
import ActionBar from '../../shared-components/ActionBar';

export default {
  props: {},
  vuex: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  components: {
    ActionBar,
  },
  methods: {},
  mounted() {},
};
</script>
