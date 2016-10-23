<style lang="stylus">
  @import "../assets/styles/variables"
  @import "../assets/styles/mixins"

  .Split
    position relative
    flex()
    flex-justify(space-between)
    margin-bottom 5px
    font 10px/1.5 OpenSans

  +prefix-classes('Split__')
    .Title
      width 100px
      padding 5px 0
      padding-left 0
      font-size 1.3em
      color #000

    .Wrapper
      position relative
      width 100%
      padding 8px 0

    .Bar
      border-radius 50px
      width 96%
      height 2px
      margin 4px auto 0
      background-color #fff

    .BarInner
      border-radius 50px
      position relative
      width 60%
      height 100%
      background-color #fff

      &--danger
        background-color #e74c3c !important

      &::after
        content ""
        position absolute
        top -7px
        right -7px
        width 15px
        height 15px
        cursor pointer
        border 1px solid #fff
        border-radius 50%
        background #FFF
        box-shadow none

    .Range
      position absolute
      top 4px
      left 0
      height 30px
      width 100%
      opacity 0

      &:disabled + .BarInner::after
        cursor default

    .Value
      width 55px
      height 30px
      padding 5px
      font-size 1.3em
      text-align center
      color #000
      border none
      background-color #EAEAEA
      box-shadow none

      &:disabled
        background-color #FFF
    .MoneyBlock
      position relative
      height 20px
      font-size 1.5em

  .Split
    &:nth-child(3n - 1)
      .Split__BarInner
        background #fff

    &:nth-child(3n)
      .Split__BarInner
        background #fff

    &:nth-child(3n + 1):nth-child(even)
      .Split__BarInner
        background #fff
</style>

<template>
  <div class="">
    <div class="Split__MoneyBlock">
      <div style="float: left">{{ amount }}</div>
      <div style="float: right">{{ currentTotal }}</div>
    </div>
    <div class="Split">
      <div class="Split__Wrapper">
        <div class="Split__Bar">
          <div class="Split__BarInner"
              :class="{ 'Split__BarInner--danger': dangerBar }"
              :style="{ width: value + '%' }"></div>
        </div>

        <input :id="id"
            class="Split__Range v-percentage"
            type="range"
            min="0"
            :max="max"
            :step="step"
            v-bind:value="value"
            v-on:input="changeValue"
            :disabled="disabled" />
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
import { formatCurrency } from '../common/functions/fun';

export default {
  props: {
    id: {},
    value: {
      type: Number,
      default() { return 0; },
    },
    min: {
      type: Number,
      default() { return 0; },
    },
    max: {
      type: Number,
      default() { return 100; },
    },
    total: {
      type: Number,
      default() { return 72000; },
    },
    step: {
      type: Number,
      default() { return 0.01; },
    },
    title: {
      type: Number,
      default() { return 0; },
    },
    disabled: {
      type: Boolean,
      default() { return false; },
    },
    dangerBar: {
      type: Boolean,
      default() { return false; },
    },
  },
  data() {
    return {
      percentage: `${this.value.toString()}%`,
    };
  },
  computed: {
    amount() {
      if (!this.value || !this.total) {
        return formatCurrency(0);
      }
      const aux = (this.value) ?
        ((this.value * this.total) / 100) :
        this.value;

      return formatCurrency(aux);
    },
    currentTotal() {
      if (!this.total) {
        return formatCurrency(0);
      }
      return formatCurrency(this.total);
    },
  },
  methods: {
    changeValue(event) {
      const val = Number(event.target.value.toString().replace('%', ''));
      this.$emit('changerangevalue', val);
    },
  },
};
</script>
