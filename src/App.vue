
<style scoped>
    .myContainer {
        width: 100%;
        height: 100%;
    }

    .myHeader {
        background-color: #333;
        color: white;
        font-size: 24px;
        font-weight: bold;
        line-height: 60px;
    }
</style>


<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        width: 100%;
        height: 100%;
    }

    html, body {
        width: 100%;
        height: 100%;
        margin: 0px;
        padding: 0px;
    }

    a {
        text-decoration: none;
    }
</style>

<template>
    <div id="app">
        <el-container class="myContainer">
            <el-header class="myHeader">91weixin登录平台</el-header>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "App",
    }
</script>
