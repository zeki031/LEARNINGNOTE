<template>
  <section class="vmodel parent">
    <Demo>
      <template #title>
        这里是vmodel实现
      </template>
      <template #parent>
        <p>{{ value }}</p>
      </template>
      <template #child>
        <Child :value="value" @input="value = $event"></Child>
        <p>下面是vmodel绑定</p>
        <Child v-model="value"></Child>
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
      value: '10'
    };
  }
};
</script>

<style lang="scss">
.vmodel {
}
</style>
