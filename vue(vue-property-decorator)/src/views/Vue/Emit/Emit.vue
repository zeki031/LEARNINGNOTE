<template>
  <section class="emit parent">
    <Demo>
      <template #title></template>
      <template #parent>
        我想要购买{{ num }} 个苹果
        每个苹果的单价为{{ price }}
        总价为{{ num * price }}
      </template>
      <template #child>
        <Child @childAdd="add"></Child>
      </template>
      <template #detail>
        <p v-for="(item, index) in detail" :key="index"></p>
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
      detail: ['这里的emit是vue中emit的简写，写起来更加方便'],
      num: 10,
      price: 3
    };
  },
  methods: {
    add() {
      this.num++;
    }
  }
};
</script>

<style lang="scss">
.vmodel {
}
</style>
