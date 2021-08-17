<template>
  <section class="ref parent">
    <Demo>
      <template #title></template>
      <template #parent>
        <div class="testDiv" ref="testDiv"></div>
        <p>输出获取得到的ref对象 {{ ref }}</p>
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
      detail: [
        'computed中是可以关闭默认的缓存功能的，computed的cache属性',
        '页面上输出的ref是一个对象，所以展示的时候和常见的不太一样'
      ],
      is: false
    };
  },
  computed: {
    ref: {
      cache: false,
      // eslint-disable-next-line vue/return-in-computed-property
      get() {
        if (this.is) {
          return this.$refs.testDiv;
        }
      }
    }
  },
  mounted() {
    this.is = true;
    window.console.log(this.ref);
  }
};
</script>

<style lang="scss">
.vmodel {
}
</style>
