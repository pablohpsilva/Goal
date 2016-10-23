<style lang="stylus">
  @import "../../assets/styles/variables"
  @import "../../assets/styles/mixins"

  +prefix-classes('RegisterModal__')
    .wrapper
      background rgba(61,158,227,1)
      background -moz-linear-gradient(left, rgba(61,158,227,1) 0%, rgba(61,84,232,0.7) 100%)
      background -webkit-gradient(left top, right top, color-stop(0%, rgba(61,158,227,1)), color-stop(100%, rgba(61,84,232,0.7)))
      background -webkit-linear-gradient(left, rgba(61,158,227,1) 0%, rgba(61,84,232,0.7) 100%)
      background -o-linear-gradient(left, rgba(61,158,227,1) 0%, rgba(61,84,232,0.7) 100%)
      background -ms-linear-gradient(left, rgba(61,158,227,1) 0%, rgba(61,84,232,0.7) 100%)
      background linear-gradient(to right, rgba(61,158,227,1) 0%, rgba(61,84,232,0.7) 100%)
      color #fff
      font 400 10px/1em $rubik
      height 100vh
      left 0
      min-height 100%
      min-width 100%
      padding 25px 15px 0 15px
      position fixed
      top 0
      width 100%

      .header
        flex()
        padding-top 25px

        .title
          flex-basis(90%)
          font-size 1.6em
          font-weight 600

        .close
          flex-basis(10%)
          font-size 1.5em
          text-align right

      .content
        flex()
        flex-direction(column)
        padding-top 60px

      .Label
        color #FFF
        font-size 1.6em
        font-weight 600

      .textinput
        background transparent
        border 0 solid transparent
        border-bottom 1px solid #fff
        color #fff
        font 400 1.6em/1em $rubik
        height 30px
        margin-bottom 30px
        padding 0

        &::placeholder
          color #fff

        &:last-child
          margin-bottom 50px

      .footer
        flex()

  .Btn__clean--white
    background-color #29ABE1
    border-width 1px
    font-size 16px
    font-weight 600
    padding 22px 20px
    width 100%
</style>

<template lang="html">
  <div class="RegisterModal__wrapper">
    <div class="RegisterModal__header">
      <div class="RegisterModal__title">
        {{ title }}
      </div>
      <div class="RegisterModal__close"
           v-on:click="closemodal">
        <i class="icon-cancel"></i>
      </div>
    </div>
    <div class="RegisterModal__content">
      <label class="RegisterModal__Label"
             for="name">Name</label>
      <input id="name"
             name="name"
             class="RegisterModal__textinput"
             type="text"
             maxlength="50" />

      <label class="RegisterModal__Label" for="start_date">Start Date</label>
      <input id="start_date"
             name="date"
             class="RegisterModal__textinput"
             v-date
             type="text" />

      <label class="RegisterModal__Label"
             for="do_date">Do Date</label>
      <input id="do_date"
             name="description"
             class="RegisterModal__textinput"
             type="text"
             maxlength="250" />

      <label class="RegisterModal__Label"
             for="description">Description</label>
      <textarea id="description"
             name="description"
             class="RegisterModal__textinput"
             maxlength="250"></textarea>
    </div>

    <button class="Btn__clean--small"
            type="button">Add subgoal</button>

    <div class="RegisterModal__footer">
      <button class="Btn__clean--white"
              type="button">Add goal</button>
    </div>
  </div>
</template>

<script type="text/babel">
export default {
  props: {
    open: {
      type: Boolean,
      default() {
        return 'false';
      },
    },
    title: {
      type: String,
      default() {
        return 'Add goal';
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  components: {},
  methods: {
    closemodal() {
      this.$emit('closemodal');
    },
  },
  mounted() {},
};
</script>
