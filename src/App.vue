<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button @click="goBack">后腿</button>
    <button @click="goGo">前进</button>
    <button @click="goHome">回到首页</button>
    <div>
      <router-link to="/">首页</router-link> |
      <router-link to="/hi">Hi</router-link> |
      <router-link to="/hi_alias">Hi alias</router-link> |
      <router-link :to="{name:'hi1',params:{username:'张三'}}">Hi1</router-link> |
      <router-link to="/hi/hi2">Hi2</router-link>
      <router-link to="/params/1999/新闻标题">Url传参</router-link>
    </div>
    <!--name传值  -->
    <p>{{$route.name}}</p>
    <!--mode定义先退出后进入，默认为in-out  -->
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <!--多路由区域  -->
    <router-view name="left" style="float:left;width:50%;height:300px;background-color:gray;text-align:center"></router-view>
    <router-view name="right" style="float:right;width:50%;height:300px;background-color:red;text-align:center"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
    goBack(){
      this.$router.go(-1);
    },
    goGo(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push('/');//可以自定义跳转，用于程序判断去不同的地方
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* transition标签给定的name加上以下四种  */
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
