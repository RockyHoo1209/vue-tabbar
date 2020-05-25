<template>
<tabbar>
    <tabbarItem path="/home" activeColor="blue">
      <i slot="icon" class="el-icon-s-home" ></i>
      <div slot="text">首页</div>
    </tabbarItem>
    <tabbarItem path="/category">
      <i slot="icon" class="el-icon-menu"></i>
      <div slot="text">分类</div>
    </tabbarItem>
    <tabbarItem path="/cart">
      <i slot="icon" class="el-icon-shopping-cart-1"></i>
      <div slot="text">购物车</div>
    </tabbarItem>
    <tabbarItem path="/profile">
      <i slot="icon" class="el-icon-user-solid"></i>
      <div slot="text">我的</div>
    </tabbarItem>
  </tabbar>
</template>

<script>
import tabbar from "./tabbar/tabbar";
import tabbarItem from "./tabbar/tabbar-item";

export default {
  name:'mainTabbar',
  components:{
      tabbar,
      tabbarItem
  }
}
</script>

<style scoped>

</style>
