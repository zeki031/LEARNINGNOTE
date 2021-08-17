<template>
  <section class="vmodel parent">
    <Demo>
      <template #title>
        vue-property-decorator的@Provide实现
      </template>
      <template #parent>
        父组件provide
        <p v-for="(val, k, i) in person" :key="k">
          {{ val }}, {{ k }}, {{ i }}
        </p>
      </template>
      <template #child>
        <Child></Child>
      </template>
      <template #detail>
        <p v-for="(item, index) in detail" :key="index">{{ item }}</p>
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
      person: {
        name: 'zeki',
        age: 22,
        hobby: 'code'
      },
      detail: ['这里的provide和vue中的相差无几，仅是写法上区别']
    };
  },
  provide() {
    return {
      person: this.person
    };
  }
};
</script>

<style lang="scss">
.vmodel {
}
</style>
