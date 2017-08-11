<template>
    <div>
        <h2>{{msg}}--{{$route.params.username}}</h2>
    </div>
</template>

<script>
export default {
    name: 'hi1',
    data() {
        return {
            msg: 'Hi1 Page'
        }
    }
}
</script>

<style scoped>

</style>


