<template>
  <div>
    <slot name="title"></slot>
    <p>左为父组件 右为子组件</p>
    <p>细节请阅读代码</p>
    <div class="show">
      <div class="left">
        <!-- 这里为父组件内容 -->
        <slot name="parent"></slot>
      </div>
      <div class="right">
        <!-- 这里为子组件内容 -->
        <slot name="child"> </slot>
      </div>
    </div>
    <p class="detail">
      <slot name="detail"></slot>
    </p>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss">
.vmodel {
}
</style>
