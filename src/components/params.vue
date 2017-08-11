<template>
    <div>
        <h2>{{msg}}</h2>
        <p>{{$route.params.newsId}}</p>
        <p>{{$route.params.title}}</p>
    </div>
</template>

<script>
export default {
    name: 'params',
    data() {
        return {
            msg: 'params page'
        }
    },
    //模板中配置钩子函数
    beforeRouteEnter: (to, from, next) => {
        //可以在此获取数据
        console.log('准备进入params模板');
        next();
    },
    beforeRouteLeave: (to, from, next) => {
        console.log('准备离开params模板');
        next();
    }
}
</script>

<style scoped>

</style>