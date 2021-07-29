<template>
  <section class="vmodel parent">
    <Demo>
      <template #title></template>
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
