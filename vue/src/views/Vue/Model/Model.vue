<template>
  <section class="model parent">
    <Demo>
      <template #title>
        vue-property-decoration_@Model实现(使用vue的model属性)
      </template>
      <template #parent>
        <p>还是一样的例子 我想要购买{{ apple }}个苹果</p>
      </template>
      <template #child>
        上面是event设置的click事件 对应的是子组件的按钮
        <Child v-model="apple"></Child>
        下面绑定的是input事件 对应子组件的input输入 修改属性apple的值
        <Child :apple="apple" @input="apple = $event"></Child>
      </template>
      <template #detail>
        在model属性中 prop指的是父组件中传过来的参数
        event是指应该触发的父组件的事件
      </template>
    </Demo>
  </section>
</template>

<script>
import Demo from '@/components/base/Demo';
import Child from './Child/Child';
export default {
  components: {
    Demo,
    Child
  },
  data() {
    return {
      apple: 10,
      banana: 10
    };
  }
};
</script>

<style></style>
