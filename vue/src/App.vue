<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
// import Home from '@/views/Home/Home.vue';
export default {
  components: {
    // Home
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  .parent{
    height: 100%;
    .show{
      height: 500px;
      border: 1px dashed $bg-darkBlue;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .left, .right{
      width: 45%;
      padding: 20px;
      height: 300px;
    }
    .left{
      border:1px solid $bg-darkBlue;
    }
    .right{
      border: 1px dashed $bg-light;
    }
  }
}
*{
  box-sizing: border-box;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
