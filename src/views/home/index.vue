<template>
  <div class="home">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div class="d-flex flex-space-around flex-wrap">
      <div class="nav-item" v-for="item in nav" :key="item.id">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  name: 'home',
  setup () {
    const nav = ref([
      { id: 0, name: '电影' },
      { id: 1, name: '电视剧' },
      { id: 2, name: '动漫' },
      { id: 3, name: '少儿' },
      { id: 4, name: '影视' },
      { id: 5, name: '电影' },
      { id: 6, name: '电影' },
      { id: 7, name: '电影' },
    ])
    return {
      nav
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #67c23a;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #e6a23c;
  }
  .nav-item {
    background-color: pink;
    color: #fff;
    padding: 10px 16px;
    width: calc(25% - 6px);
    margin-top: 12px;
  }
}
</style>