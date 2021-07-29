<template>
  <section class="home">
    <div class="menu">
      <a-menu
        :default-selected-keys="['vmodel']"
        mode="inline"
        :open-keys.sync="openKeys"
      >
        <a-sub-menu key="vue" title="Vue">
          <a-menu-item key="vmodel">
            <router-link to="/Home/Vmodel">v-model实现</router-link>
          </a-menu-item>
          <a-menu-item key="propSync">
            <router-link to="/Home/PropSync">@PropSync实现</router-link>
          </a-menu-item>
          <a-menu-item key="Model">
            <router-link to="/Home/Model">@Model实现</router-link>
          </a-menu-item>
          <a-menu-item key="ModelSync">
            <router-link to="/Home/ModelSync">@ModelSync实现</router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>
    <main>
      <router-view></router-view>
    </main>
  </section>
</template>

<script>
export default {
  data() {
    return {
      openKeys: ['vue']
    };
  }
};
</script>

<style lang="scss">
.home {
  height: 100%;
  display: flex;
  .menu {
    height: 100%;
    width: 256px;
    .ant-menu-inline {
      height: 100%;
      margin-top: 0;
    }
    .ant-menu-item {
      margin-top: 0;
    }
  }
  main {
    width: 100%;
    height: 100%;
    padding: 10px;
    color: $font-color;
  }
}
</style>
