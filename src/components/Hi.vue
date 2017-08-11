<template>
    <div>
        <h2>{{msg}}</h2>
        <!--子路由  -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'hi',
    data() {
        return {
            msg: 'Hi Page'
        }
    }
}
</script>

<style scoped>

</style>


