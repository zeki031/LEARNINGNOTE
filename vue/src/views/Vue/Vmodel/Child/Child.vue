<template>
  <section class="child">
    <input type="text" :value="value" @input="$emit('input',$event.target.value)" />
  </section>
</template>

<script>
export default {
  props: ['value']
};
</script>

<style lang="scss"></style>
