<template>
  <section class="child">
    子组件inject
    <p v-for="(val, k, i) in person" :key="k">{{ val }}, {{ k }}, {{ i }}</p>
  </section>
</template>

<script>
export default {
  inject: ['person']
};
</script>

<style lang="scss"></style>
