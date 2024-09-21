// 自定义指令 v-time
Vue.directive('time', {
  bind(el, binding, vnode) {
    el.textContent = time.getFormatTime(binding.value);
    // 设置定时器，1分钟后更新
    el_timer = setInterval(function() {
      el.textContent = time.getFormatTime(binding.value);
    }, 60000);
  },
  unbind(el) {
    clearInterval(el.el_timer);
    delete el_timer;
  }
});

var vm = new Vue({
  el: '#app',
  data: {
    time1: new Date(2019, 8, 1, 22, 0, 0).getTime(),
    time2: new Date().getTime() - 60000
  },
  methods: {}
});
