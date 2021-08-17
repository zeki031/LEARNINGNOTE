<template>
  <section class="child">
    父组件传递过来的arr：{{ JSON.stringify(arr) }} 父组件传递过来的person：{{
      JSON.stringify(person)
    }}
  </section>
</template>

<script>
export default {
  props: ['arr', 'person'],
  watch: {
    arr: {
      handler(newValue) {
        window.console.log('arrChange', newValue);
      }
    },
    person: {
      handler(newValue) {
        window.console.log('PersonChange', newValue);
      },
      immediate: true,
      deep: true
    }
    // 作用在于一开始就会去执行一次handler事件
    // watch的对象写法事件名称只能用handler
  }
};
</script>

<style lang="scss"></style>
