<template lang="jade">
    div
      p {{ greeting }} World!
      OtherComponent
</template>

<script>
  import OtherComponent from './OtherComponent.vue';
  export default {
    components: {
      OtherComponent
    },
    data() {
      return {
        greeting: 'Hello'
      };
    }
  };
</script>

<style lang="stylus" scoped>
  p
    font-size 2em
    text-align center
</style>
