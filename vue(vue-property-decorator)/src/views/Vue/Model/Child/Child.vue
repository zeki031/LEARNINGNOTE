<template>
  <section class="child">
    我想要购买{{ apple }}个苹果 一个苹果3元
    <input
      type="text"
      :value="apple"
      @input="$emit('input', Number($event.target.value))"
    />
    <button type="danger" @click="$emit('click', apple + 1)" v-if="btn">
      点我加多一个banana
    </button>
  </section>
</template>

<script>
export default {
  props: {
    apple: Number,
    btn: Boolean
  },
  model: {
    prop: 'apple',
    event: 'click'
  }
};
</script>

<style></style>
