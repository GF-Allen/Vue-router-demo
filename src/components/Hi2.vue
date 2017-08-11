<template>
    <div>
        <h2>{{msg}}</h2>
        <router-link to="/goHome">首页</router-link>
        <router-link to="/goParams/1999/重定向">重定向传参数</router-link>
    </div>
</template>

<script>
export default {
    name: 'hi2',
    data() {
        return {
            msg: 'Hi2 Page'
        }
    }
}
</script>

<style scoped>

</style>


