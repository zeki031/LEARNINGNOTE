<template>
  <section class="child">
    假设一个苹果为3元 我想要购买{{ num }}个苹果 总价为{{ total }}
    <input type="text" />
  </section>
</template>

<script>
export default {
  props: ['num']
  // computed: {
  //   total: function (param) {  }
  // }
};
</script>

<style lang="scss"></style>
