<template>
  <section class="vmodel parent">
    PropSync实现
    <p>左为父组件 右为子组件</p>
    <div class="show">
      <div class="left">
        <!-- 这里为父组件内容 -->
      </div>
      <div class="right">
        <!-- 这里为子组件内容 -->
        <Child :num="num"></Child>
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
      num: 10
    };
  }
};
</script>

<style lang="scss">
.vmodel {
}
</style>
