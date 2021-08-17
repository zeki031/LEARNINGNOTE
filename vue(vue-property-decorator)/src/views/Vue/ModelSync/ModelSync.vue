<template>
  <section class="modelSync parent">
    <Demo>
      <template #title> vue-property-decorator的@ModelSync实现 </template>
      <template #parent>
        <p>一个苹果{{ price }}元</p>
        <p>我想要购买苹果{{ apple }}个</p>
      </template>
      <template #child>
        <Child :price="price" v-model="apple"></Child>
      </template>
      <template #detail>
        <p>
          Vue中的computed 默认是只有getter, 但我们还可以根据情况使用setter
        </p>
        <p>
          ModelSync的作用或者说是使用场景
          就是子组件中的计算属性使用到了父组件传过去的prop属性
          子组件希望利用computed的setter来修改父组件的属性
        </p>
        <p>
          这里需要注意的是 直接给computed赋值是无法改变computed的值的
          当它所依赖的值改变的时候 它的值才会改变
        </p>
        <p>
          2021.8.11 1.04 发现我绑定过来的是apple属性，在计算属性的setter调用emit的时候它会自动将apple计算出来
        </p>
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
      get: 'this is get',
      set: 'this is set',
      apple: 20,
      price: 3
    };
  },
  methods: {
    change() {
      this.test = 'aaa';
    }
  },
  computed: {
    test: {
      get() {
        return this.get;
      },
      set(newVal) {
        window.console.log(this.set + newVal);
        return this.set;
      }
    }
  }
};
</script>

<style lang="scss">
.vmodel {
}
</style>
