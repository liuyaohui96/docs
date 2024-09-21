var vm = new Vue({
  el: '#app',
  data: {
    shopList: [
      { id: 1, name: 'iphone', price: 6000, number: 1 },
      { id: 2, name: 'ipad', price: 5000, number: 2 },
      { id: 3, name: 'Mackbook', price: 4000, number: 3 }
    ]
  },
  computed: {
    total: function() {
      return this.shopList.reduce(
        (previous, next) => previous + next.price * next.number,
        0
      );
    }
  },
  methods: {
    removeItem(idx) {
      this.shopList.splice(idx, 1);
    },
    handleAdd(idx) {
      this.shopList[idx].number++;
    },
    handleReduce(idx) {
      if (this.shopList[idx].number === 1) this.removeItem(idx);
      this.shopList[idx].number--;
    }
  }
});
