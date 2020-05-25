<template>
<div>
  <router-view />
  <mainTabbar/>
</div>
</template>

<script>
import mainTabbar from './components/mainTabbar'
export default {
  name: "App",
  components: {
    mainTabbar
  }
};
</script>

<style scoped>
.el-icon-s-home {
  font-size: 24px;
}
.el-icon-menu {
  font-size: 24px;
}
.el-icon-shopping-cart-1 {
  font-size: 24px;
}
.el-icon-user-solid {
  font-size: 24px;
}
</style>

