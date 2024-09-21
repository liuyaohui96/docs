Vue.component('pane', {
  // name选项用于tabs确定子组件为pane
  name: 'pane',
  props: {
    title: {
      type: String
    },
    name: {
      type: String
    }
  },
  data: function() {
    return {
      // 默认panel不显示
      show: true
    };
  },
  mounted() {
    // 触发父组件的更新方法
    this.$parent.updateTabs();
  },
  watch: {
    // 属性变化时，自动更新调用父组件方法更新tabs
    title() {
      this.$parent.updateTabs();
    },
    name() {
      this.$parent.updateTabs();
    }
  },

  template: `
  <div class="pane" v-show="show">
    <slot></slot>
  </div>
  `
});
