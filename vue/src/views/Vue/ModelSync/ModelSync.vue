<template>
  <section class="modelSync parent">
    <Demo>
      <template #title>
        vue-property-decoration的@ModelSync实现
      </template>
      <template #parent></template>
      <template #child></template>
      <template #detail></template>
    </Demo>
  </section>
</template>
<script>
import Demo from '@/components/base/Demo';
import Child from './Child/Child';
export default {
  components: {
    Child,
    Demo
  }
};
</script>

<style lang="scss">
.vmodel {
}
</style>
