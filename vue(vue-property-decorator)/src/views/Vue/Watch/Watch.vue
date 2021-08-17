<template>
  <section class="watch parent">
    <Demo>
      <template #title>
        vue-property-decorator的@Watch实现
      </template>
      <template #parent>
        <p>age: {{ person.age }}</p>
        <a-button type="primary" @click="addAge">点击年龄+1</a-button>
        <p>arr: {{ JSON.stringify(arr) }}</p>
        <a-button type="primary" @click="addArr">点击添加数组元素</a-button>
      </template>
      <template #child>
        <Child :arr="arr" :person="person"></Child>
      </template>
      <template #detail>
        <p v-for="(item, index) in detail" :key="index">{{ item }},{{index}}</p>
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
        age: 17,
        name: 'xiaoming'
      },
      arr: [1, 2],
      detail: [
        '@Watch就是普通的vue中watch，只不过写法有变化而已',
        '首先是immediate属性：watch默认绑定，页面首次加载的时候watch是不会执行的，当值发生改变的时候watch才会执行，如果想立即执行就需要用到immediate属性',
        'deep：顾名思义深度监听，如果监听的是对象属性，监听事件是无效的，这时候就需要用到深度监听'
      ]
    };
  },
  methods: {
    addAge() {
      this.person.age++;
      window.console.log(this.person.age);
    },
    addArr() {
      this.arr.push(this.arr.length);
      window.console.log(this.arr.length + 1);
    }
  }
};
</script>

<style lang="scss">
.vmodel {
}
</style>
