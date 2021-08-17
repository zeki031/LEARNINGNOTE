<template>
  <section class="child">
    <a-button type="primary" @click="childAdd">
      点击添加购买数量
    </a-button>
  </section>
</template>

<script>
export default {
  methods: {
    childAdd() {
      this.$emit('childAdd');
    }
  }
};
</script>

<style lang="scss"></style>
