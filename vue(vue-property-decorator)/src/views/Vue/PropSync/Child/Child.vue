<template>
  <section class="child">
    假设一个苹果为3元 我想要购买{{ num }}个苹果 总价为{{ total }}
    <input type="text" @input="total = $event.target.value" :value="num" />
  </section>
</template>

<script>
export default {
  props: ['num'],
  computed: {
    total: {
      get() {
        return this.num * 3;
      },
      set(val) {
        this.$emit('update:num', val);
      }
    }
  }
};
</script>

<style lang="scss"></style>
