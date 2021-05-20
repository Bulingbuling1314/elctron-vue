<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="less" scoped>
#app {
  width: 100%;
  height: 100vh;
  background: url(/static/images/bg.jpeg) no-repeat;
  background-size: 100% 100%;
}
</style>
