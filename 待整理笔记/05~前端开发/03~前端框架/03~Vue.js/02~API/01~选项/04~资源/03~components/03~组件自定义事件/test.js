Vue.component('base-input', {
  inheritAttrs: false,
  props: ['label', 'value'],
  computed: {
    inputListeners: function() {
      let vm = this; // 保存当前运行环境
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign(
        {},
        // 获取父级定义的事件监听器
        this.$listeners,
        // 添加自定义监听器，或覆写一些监听器的行为
        {
          // 确保组件配合 `v-model` 的工作
          input: function(event) {
            vm.$emit('input', event.target.value);
          }
        }
      );
    }
  },
  template: `
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on="inputListeners"
      >
    </label>
  `
});
