<template>
  <section class="vmodel parent">
    <Demo>
      <template #title></template>
      <template #parent></template>
      <template #child>
        <Child></Child>
      </template>
      <template #detail>
        <!-- <p v-for="(item, index) in detail" :key="index"></p> -->
      </template>
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
  },
  data() {
    return {
      detail: ['']
    };
  }
};
</script>

<style lang="scss">
.vmodel {
}
</style>
