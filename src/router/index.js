import Vue from "vue";
import Router from "vue-router";
import Hello from "@/components/Hello";
import left from "@/components/left";
import right from "@/components/right";
import Hi from "@/components/Hi";
import Hi1 from "@/components/Hi1";
import Hi2 from "@/components/Hi2";
import params from "@/components/params";
import Error from "@/components/Error";

Vue.use(Router);

export default new Router({
  mode:'history',//url上添加# hash   history除去#
  routes: [
    {
      //404页面
      path:'*',
      component:Error
    },
    {
      path: "/",
      name: "Hello", //根目录不支持别名跳转
      components: {
        default: Hello, //未命名
        left: left,
        right: right
      }
    },
    {
      //url传参数  //正则表达式验证
      path: "/params/:newsId(\\d+)/:title",
      component: params,
      //在路由中写钩子函数
      beforeEnter:(to,from,next)=>{ //钩子函数
        //进入之前
        console.log(to);
        console.log(from);  
        next();//允许跳转 flase参数也不可跳转
      }
    },
    {
      //重定向
      path: "/goHome",
      redirect: "/"
    },
    {
      //重定向传参
      path: "/goParams/:newsId(\\d+)/:title",
      redirect: "/params/:newsId(\\d+)/:title"
    },
    {
      path: "/hi",
      component: Hi,
      alias: "/hi_alias",
      children: [
        //子路由
        {
          name: "Hi",
          path: "/",
          component: Hi
        },
        {
          name: "hi1",
          path: "hi1",
          component: Hi1
        },
        {
          name: "hi2",
          path: "hi2",
          component: Hi2
        }
      ]
    }
  ]
});
