<template>
<div  id="tab-bar" >
<slot ></slot>
</div>
</template>

<script>
export default {
  name:'tabbar',
  data() {
      return {
      }
  },
}
</script>

<style scoped>
@import '../../assets/css/base.css';

#tab-bar{
  display: flex;
  position: fixed;
  background-color: rgba(245, 245, 220, 0.575);
  left:0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, .1);
}

</style> 
