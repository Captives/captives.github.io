<template>
  <el-main>
    <el-row style="width: 100%; height: 301px; overflow: hidden">
      <VueScroller
        :data="list"
        :class-option="{ limitMoveNum: 4, direction: 2 }"
      >
        <Hotel :list="list"></Hotel>
      </VueScroller>
    </el-row>

    <el-row style="width: 100%; height: 301px; overflow: hidden">
      <VueScroller
        :data="list"
        :class-option="{ limitMoveNum: 4, direction: 3, hoverStop: false }"
      >
        <Hotel :list="list"></Hotel>
      </VueScroller>
    </el-row>

    <div
      style="
        width: 227px;
        height: 602px;
        overflow: hidden;
        position: absolute;
        top: 40px;
        left: 0px;
      "
    >
      <VueScroller :data="list" :class-option="{ direction: 0 }">
        <Hotel :list="list" style="flex-direction: column"></Hotel>
      </VueScroller>
    </div>

    <div
      style="
        width: 227px;
        height: 100%;
        overflow: hidden;
        position: absolute;
        top: 40px;
        right: 15px;
      "
    >
      <VueScroller :data="list" :class-option="{ direction: 1 }">
        <Hotel :list="list" style="flex-direction: column"></Hotel>
      </VueScroller>
    </div>

    <vue-source
      src="guide/views/web/VueSeamlessScroll.vue"
      lang="html"
    ></vue-source>
    <vue-source src="guide/views/web/Hotel.vue" lang="html"></vue-source>
  </el-main>
</template>
<script>
//无限滚动
//https://chenxuan0000.github.io/vue-seamless-scroll/index.html#/routerOne
import scroll from "vue-seamless-scroll";
import Hotel from "./Hotel.vue";
export default {
  name: "VueSeamlessScroll",
  components: { VueScroller: scroll, Hotel },
  data() {
    return { list: [] };
  },
  created() {
    this.$fetch("/assets/data/hotel.json").then((res) => {
      this.list = JSON.parse(res);
    });
  },
};
</script>
<style lang="stylus" scoped>
.el-main {
  position: relative;

  .el-row {
    margin: 10px 0;
  }
}
</style>
