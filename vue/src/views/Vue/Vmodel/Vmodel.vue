<template>
  <section class="vmodel parent">
    这里是vmodel实现
    <p>左为父组件 右为子组件</p>
    <div class="show">
      <div class="left">
        <p>{{ value }}</p>
      </div>
      <div class="right">
        <Child :value="value" @input="value = $event"></Child>
        <p>下面是vmodel绑定</p>
        <Child v-model="value"></Child>
      </div>
    </div>
  </section>
</template>
<script>
import Child from './Child/Child';
export default {
  components: {
    Child
  },
  data() {
    return {
      value: '11111'
    };
  }
};
</script>

<style lang="scss">
.vmodel {
}
</style>
