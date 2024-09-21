var vm = new Vue({
  el: '#app',
  data: {
    textarea: '',
    gender: '',
    hobby: [],
    genderShow: true,
    hobbyShow: false,
    introShow: false
  },
  methods: {
    // 上一步
    lastStep(from, to) {
      if (from === 'hobby' && to === 'gender') {
        this.hobbyShow = false;
        this.genderShow = true;
      }
      if (from === 'intro' && to === 'hobby') {
        this.introShow = false;
        this.hobbyShow = true;
      }
    },
    // 下一步
    nextStep(from, to) {
      console.log('hello');
      if (from === 'gender' && to === 'hobby') {
        console.log('hello');
        this.genderShow = false;
        this.hobbyShow = true;
      }
      if (from === 'hobby' && to === 'intro') {
        this.hobbyShow = false;
        this.introShow = true;
      }
    },

    reset(name) {
      if (name === 'gender') {
        this.gender = '';
      }
      if (name === 'hobby') {
        this.gender = [];
      }
      if (name === 'intro') {
        this.intro = '';
      }
    }
  }
});
