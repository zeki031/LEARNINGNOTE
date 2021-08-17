<template>
  <section class="vmodel parent">
    <Demo>
      <template #title>
        vue-property-decorator_@PropSync实现
        (使用vue的.sync 配合computed的getter和setter)
      </template>
      <template #parent>
        <p>我想要购买{{ num }}个苹果</p>
      </template>
      <template #child>
        <Child :num.sync="num" @update:num="val => (num = val)"></Child>
      </template>
      <template #detail>
        <p class="detail">
          父组件创建变量：num 传入子组件(使用sync修饰符) vue
          修饰符sync的功能是：当一个子组件改变了一个 prop
          的值时，这个变化也会同步到父组件中所绑定 子组件props接收
          创建computed：total 使用其中的getter和setter getter 返回 num * 价格
          setter 触发 父组件sync绑定的方法 返回setter获得的修改的参数
          修改父组件num的值 子组件的input绑定input事件
          触发修改total为当前输入的值 这样在就可以修改父组件中num的值
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
      num: 10
    };
  }
};
</script>

<style lang="scss">
.vmodel {
}
</style>
