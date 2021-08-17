<template>
  <section class="child">
    <a-input placeholder="输入你想要购买的苹果数总价钱" v-model="changeValue" />
    <h1>我需要购买的苹果的总价为{{ changeValue }}</h1>
    <p>
      实在很难想象到这个东西的使用场景 到底什么时候需要向计算属性赋值 并且还需要修改父组件属性的场景了
    </p>
  </section>
</template>

<script>
export default {
  props: {
    apple: Number,
    price: Number
  },
  model: {
    prop: 'apple',
    event: 'changeApple'
  },
  data() {
    return {};
  },
  methods: {
    change() {}
  },
  computed: {
    changeValue: {
      get() {
        return this.apple * this.price;
      },
      set(val) {
        this.$emit('changeApple', Number(val));
      }
    }
  }
};
</script>

<style></style>
