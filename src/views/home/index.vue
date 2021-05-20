<template>
  <div class="home">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in banner" :key="item.sid">
        <img class="lunbo-img" :src="item.data.header.icon" alt="">
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
import { getList, getVideoTypeList } from '@/api'
export default {
  name: 'home',
  setup () {
    const banner = ref([])
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
      // console.log(nav)
      // console.log(banner)
    getList({page: 1, count: 10, type: 'vadio'}).then(res => {
      console.log(res)
    })
    getVideoTypeList({id: 14}).then(res => {
      console.log(res)
      banner.value = res.result
      console.log(banner)
    })
    return {
      nav,
      banner
    }
  },
}
</script>

<style lang="less" scoped>
.home {
  .lunbo-img {
    width: 100%;
    height: 100%;
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