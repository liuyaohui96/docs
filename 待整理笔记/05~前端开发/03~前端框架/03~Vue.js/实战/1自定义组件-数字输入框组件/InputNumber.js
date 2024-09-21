Vue.component('InputNumber', {
  props: {
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    }
  },
  data: function() {
    return {
      currentValue: this.value
    };
  },
  watch: {
    currentValue(newValue, oldValue) {
      this.$emit('input', this.currentValue);
    }
  },
  methods: {
    handleAdd() {
      if (this.currentValue >= this.max) return;
      this.currentValue++;
    },
    handleReduce() {
      if (this.currentValue <= this.min) return;
      this.currentValue--;
    },
    handleInput(e) {
      // 已经使用修饰符过滤
      // 验证是否是数字
      let num = Number(e.target.value);
      console.log(num);
      if (!isNaN(num)) {
        if (num > this.max) num = this.max;
        else if (num < this.min) num = this.min;
        this.currentValue = num;
      } else {
        alert(e.target.value + '不是数字');
        this.currentValue = ''; // 清空
      }
    }
  },
  template: `
        <div>
        <input type="text" :value="currentValue" @change.trim="handleInput($event)">
        <button @click="handleAdd">+</button>
        <button @click="handleReduce">-</button>
        </div>
    `
});
