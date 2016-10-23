<style lang="stylus">
  @import "../../assets/styles/variables"
  @import "../../assets/styles/mixins"

  +prefix-classes('RegisterModal__')
    .wrapper
      background rgba(61, 158, 227, 1)
      background -webkit-linear-gradient(left, rgba(61, 158, 227, 1) 0%, rgba(61, 84, 232, .7) 100%)
      background linear-gradient(to right, rgba(61, 158, 227, 1) 0%, rgba(61, 84, 232, .7) 100%)
      color #FFF
      font 400 10px/1em $rubik
      left 0
      min-height 100%
      min-width 100%
      padding 25px 15px
      position absolute
      top 0
      width 100%
    .container
      width 100%
      max-width 800px
      margin 0 auto

    .header
      flex()
      margin-bottom 60px
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

    .Label
      color #FFF
      font-size 1.6em
      font-weight 600

    .textinput
      background transparent
      border 0 solid transparent
      border-bottom 1px solid #fff
      color #fff
      font 400 1.6em/1.5 $rubik
      height 30px
      margin-bottom 30px
      padding 0

      textarea&
        height 100px

      &::placeholder
        color #fff

      &:last-child
        margin-bottom 50px

    .footer
      flex()

  .Btn--subGoal
    background #FFF
    border none
    border-radius 3px
    color $primary-color
    font 400 14px $rubik
    margin-bottom 10px
    padding 10px
    position relative
    width 100%

    &:last-of-type
      margin-bottom 30px

    &::after
      background-color $danger-color
      border-radius 50%
      color #FFF
      content "x"
      display block
      height 14px
      line-height 1
      position absolute
      right -7px
      top -7px
      width 14px

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
    <div class="RegisterModal__container">
      <div class="RegisterModal__header">
        <div class="RegisterModal__title">
          {{ title }}
        </div>
        <div class="RegisterModal__close"
            v-on:click="closemodal">
          <i class="icon-cancel"></i>
        </div>
      </div>

      <div v-if="isGoal">
        <div class="RegisterModal__content">
          <label class="RegisterModal__Label"
              for="name">
            Name
          </label>
          <input id="name"
              name="name"
              class="RegisterModal__textinput"
              type="text"
              maxlength="50" />

          <label class="RegisterModal__Label"
              for="start_date">
            Start Date
          </label>
          <input id="start_date"
              name="date"
              class="RegisterModal__textinput"
              type="text"
              v-date/>

          <label class="RegisterModal__Label"
              for="do_date">
            Due Date
          </label>
          <input id="do_date"
              name="description"
              class="RegisterModal__textinput"
              type="text"
              v-date/>

          <label class="RegisterModal__Label"
              for="description">
            Description
          </label>
          <textarea id="description"
              name="description"
              class="RegisterModal__textinput"
              maxlength="250"></textarea>
        </div>

        <div class="RegisterModal__content"
             v-show="addSubGoal && isGoal">
          <label class="RegisterModal__Label"
              for="name_subgoal">
            Subgoal's name
          </label>
          <input id="name_subgoal"
              v-model="newSubGoal.nameSubgoal"
              class="RegisterModal__textinput"
              type="text"
              maxlength="50" />

          <label class="RegisterModal__Label"
              for="value_subgoal">
            Subgoal's value
          </label>
          <input id="value_subgoal"
              v-model="newSubGoal.valueSubgoal"
              class="RegisterModal__textinput"
              type="text"
              maxlength="50"
              v-money/>

          <label class="RegisterModal__Label"
              for="description_subgoal">
            Subgoal's description
          </label>
          <textarea id="description_subgoal"
              v-model="newSubGoal.descriptionSubgoal"
              class="RegisterModal__textinput"
              maxlength="250"></textarea>
        </div>

        <button class="Btn__clean--small"
            type="button"
            v-on:click="addSubGoal = (addSubGoal) ? addSubGoalsListItem() : openSubGoalForm(true)"
            v-show="isGoal">
          {{ (addSubGoal) ? 'Save subgoal' : 'Add subgoal' }}
        </button>

        <button class="Btn--subGoal"
            v-for="(subGoal, index) in subGoalsList"
            v-on:click="subGoalsList.splice(index, 1)"
            type="button">
          {{ subGoal.name }}
        </button>
      </div>

      <div v-else>
        <range v-bind:value="rangeValue" v-on:changerangevalue="changeRangeValue"></range>
        <selector v-bind:options="selectorOptions" v-on:changeselectedoption="changeSelectedOption"></selector>
      </div>

      <div class="RegisterModal__footer">
        <button class="Btn__clean--white"
            type="button"
            v-on:click.stop="persistGoal()">
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
import { mapActions } from 'vuex';

import Range from '../../shared-components/Range';
import Selector from '../../shared-components/Selector';

import { goalsResource } from '../../vuex/resources';

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
    return {
      newSubGoal: {
        nameSubgoal: '',
        valueSubgoal: '',
        descriptionSubgoal: '',
      },
      addSubGoal: false,
      subGoalsList: [],
      goalResource: goalsResource(this.$resource),
      selectedOption: null,
      selectorOptions: [
        { name: 'Worldtrip', icon: 'icon-airplane' },
        { name: 'School', icon: 'icon-house' },
        { name: 'Baby', icon: 'icon-baby' },
        { name: 'Building home', icon: 'icon-house' },
      ],
      rangeValue: 0,
    };
  },
  computed: {
    isGoal() {
      return this.title.toLowerCase().indexOf('goal') !== -1;
    },
  },
  components: {
    Range,
    Selector,
  },
  methods: {
    ...mapActions([
      'setGoalCollection',
    ]),
    changeSelectedOption(item) {
      this.selectedOption = item;
    },
    changeRangeValue(value) {
      this.rangeValue = value;
    },
    openSubGoalForm(status) {
      return status;
    },
    addSubGoalsListItem() {
      this.subGoalsList.push({
        name: this.newSubGoal.nameSubgoal,
        value: this.newSubGoal.valueSubgoal,
        description: this.newSubGoal.descriptionSubgoal,
      });

      this.newSubGoal = {
        nameSubgoal: '',
        valueSubgoal: '',
        descriptionSubgoal: '',
      };
    },
    persistGoal() {
      this.changeLoadingStatus(true);

      const id = 1;
      this.goalResource.persistGoal({ id }, {})
        .then((doc) => {
          this.setGoalCollection(doc.data.goals);
          this.closemodal();
          this.changeLoadingStatus(false);
        })
        .catch(() => {
          this.changeLoadingStatus(false);
        });
    },
    closemodal() {
      this.$emit('closemodal');
    },
    changeLoadingStatus(status) {
      this.$emit('changeloadingstatus', status);
    },
  },
  mounted() {},
};
</script>
