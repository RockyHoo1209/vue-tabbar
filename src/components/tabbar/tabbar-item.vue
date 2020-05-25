<template>
<!-- <div id='tabbarItem' @click="goPage"> -->
<div id='tabbarItem' @click="goPage" :style="setactiveColor">
<slot name="icon"></slot>
<slot name="text"></slot>
</div>
</template>

<script>
export default {
  name:'tabbarItem',
  props:{
      path:String,
      activeColor:{
        type:String,
        default:"red"
      }
  },
  computed:{
    // 活跃的path和item的path相同
    isactive(){
    return this.$route.path.indexOf(this.path)!==-1;
    },
    setactiveColor(){
      return this.isactive?{color:this.activeColor}:{};
    }
  },
  data(){
   return {
   }
  },
  methods:{
    goPage(){
        this.$router.replace(this.path).catch(err=>{});    
        this.state=!this.state;    
    },
  }
}
</script>

<style scoped>
#tabbarItem{
    flex:1;
    height: 49px;
    text-align: center;
    font-size: 13px;
}
/* .active{
    color: rgb(94, 121, 241);
} */
</style>
