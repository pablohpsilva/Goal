<style lang="stylus">
  @import "../assets/styles/variables"
  @import "../assets/styles/mixins"

  +prefix-classes('Selector__')
    .wrapper
      font-size 10px
      position relative
      &::after
        content: '\e90b'
        font-family: 'icomoon';
        display block
        position absolute
        top 30px
        right 0px
        width 10px
        height 10px
        z-index 1
    .wrapperfixed
      position fixed
      top 0
      left 0
      width 100%
      height 100%
      z-index 15
    .inputselector
      font 400 1.8em/1em $rubik
      width 100%
      height 4em
      background transparent
      color #fff
      border 0
      border-bottom 1px solid #fff
      margin-bottom 30vh
    .autocomplete
      background #fff
      color #000
      border-radius 3px
      padding 5px 0px
      position absolute
      top 55px
      left 0
      width 100%
      z-index 20
      overflow-y scroll
      max-height 180px
      ul
        list-style none
        margin 0
        padding 0
        li
          cursor pointer
          font-size: 1.3em;
          padding 15px 0px
          i
            color $blue-color
            padding-left 15px
            font-size 1.5em
            font-weight 600
          span
            color $blue-color
            font 400 1.5em/1em $rubik
            padding 0px 10px
          &:hover
            background rgba($blue-color, 0.2)

  .expand-transition
    transition all .3s ease
    height 10px
    padding 10px
    background-color #fff
    overflow hidden

  .expand-enter
  .expand-leave
    height 0
    padding 0 10px
    opacity 0

  .form-inline .input-group .input-group-addon.Selector__groupaddon
    width 5%
</style>

<template>
  <div class="Selector__wrapper">
    <div class=""
        style="position: relative;">
      <div @click.stop="show = !show">
        <input type="text"
            class="Selector__inputselector"
            id="exampleInputAmount"
            disabled
            v-model="selectorTextValue">
        <div class="Selector__autocomplete"
            v-show="show"
            transition="expand">
          <ul class="">
            <li v-for="(item, index) in options"
                @click.stop="selectItem(item)">
              <i v-bind:class="item.icon"></i>
              <span>{{item.nome || item.name}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="Selector__wrapperfixed"
        @click.stop="show = !show"
        v-show="show"></div>
  </div>
</template>

<script type="text/babel">
export default {
  props: {
    options: {
      type: Array,
      default() { return []; },
    },
    startselected: {
      type: Boolean,
      default() { return false; },
    },
    selectedinputs: {},
  },

  data() {
    return {
      show: false,
      sampleData: {},
      selectorTextValue: 'Goal',
    };
  },

  computed: {
  },

  watch: {
  },

  methods: {
    selectItem(data) {
      this.show = false;
      this.selectorTextValue = data.nome || data.name || data.label || data;
      this.updateSelectedOption(data);
    },
    updateSelectedOption(item) {
      this.$emit('changeselectedoption', item);
    },
  },

  ready() {
  },
};
</script>
