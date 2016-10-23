<style lang="stylus">
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
      <input id="name_subgoal"
             class="RegisterModal__textinput"
             name="name_subgoal"
             type="text"
             maxlength="50" />

      <label class="RegisterModal__Label"
             for="value_subgoal">Value</label>
      <input id="value_subgoal"
             name="value"
             class="RegisterModal__textinput"
             type="text" />

      <label class="RegisterModal__Label"
             for="description_subgoal">Description</label>
      <input id="description_subgoal"
             class="RegisterModal__textinput"
             type="text"
             name="description"
             maxlength="250" />
    </div>

    <div class="RegisterModal__footer">
      <button class="Btn__clean--white"
              type="button">Save</button>
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
        return 'Add subgoal';
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
