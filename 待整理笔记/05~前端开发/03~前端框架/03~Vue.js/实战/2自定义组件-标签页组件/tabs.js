Vue.component('tabs', {
  props: {
    // 组件实例传递的traget属性
    target: {
      type: [String, Number] // String or Number
    }
  },
  data: function() {
    return {
      // 用于循环渲染tabsbar的tabsBar数组
      tabsBar: [],
      // 当前激活的tab, 默认是target
      currentTab: this.target
    };
  },
  methods: {
    // pane调用的修改tabs的方法
    updateTabs() {
      this.tabsBar = [];
      // 填充pane.name, pane.title方法到tabsBar中
      this.getPanes().forEach((pane, index) => {
        if (!pane.name) pane.name = index;
        this.tabsBar.push({
          name: pane.name,
          title: pane.title
        });
      });

      // 调用updateShow方法
      this.updateShow();
    },
    // 获得panel的方法
    getPanes() {
      return this.$children.filter(item => item.$options.name === 'pane');
    },
    updateShow() {
      this.getPanes().forEach(pane => {
        pane.show = pane.name === this.currentTab;
      });
    },
    // 处理tabbar单击
    handleClick(index) {
      this.currentTab = this.tabsBar[index].name;
      this.updateShow();
    }
  },

  template: `
  <div class="tabs">
  <div class="tabs-bar">
    <!-- 循环tabsBar数组-->
    <!-- 增加单击事件 -->
    <div
      v-for="(tab, index) in tabsBar"
      @click="handleClick(index)"
      :class="['tabs-tab', {'tabs-tab-active': tab.name === currentTab}]"
    >
      {{ tab.title }}
    </div>

   
  </div>
  <div class="tabs-content">
  <!-- 自定义的panes -->
  <slot></slot>
</div>
  </div>
  `
});
