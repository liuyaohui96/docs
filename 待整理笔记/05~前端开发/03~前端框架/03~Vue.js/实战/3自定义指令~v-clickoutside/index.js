// 定义全局指令
Vue.directive('clickoutside', {
  bind(el, binding, vnode) {
    // 定义一个handler
    function handleClickOutside(e) {
      // 点击的区域是否被el包含
      if (el.contains(e.target)) {
        console.log('he');
        return false;
      }
      if (binding.expression) {
        // 调用函数
        binding.value();
      }
    }
    el._clickoutside = handleClickOutside; // 方便解绑
    document.addEventListener('click', handleClickOutside);
  },
  unbind(el, binding) {
    document.removeEventListener('click', el._clickoutside);
    delete el._clickoutside;
  }
});

var vm = new Vue({
  el: '#app',
  data: {
    show: false
  },
  methods: {
    handleClose() {
      this.show = false;
    }
  }
});
