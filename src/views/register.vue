
<!--局部样式-->
<style scoped>
    .viewLogin {

    }
</style>

<!--局部覆盖样式-->
<style>

</style>

<template>
    <div class="viewLogin">
        <el-form label-width="80px">
            <el-form-item label="用户名">
                <el-input placeholder="请输入用户名" v-model="loginName"></el-input>
            </el-form-item>
            <el-form-item label="登录密码">
                <el-input placeholder="请输入密码" type="password" v-model="loginPassword"></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
                <el-input placeholder="请输入密码" type="password" v-model="loginPassword"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input placeholder="请输入邮箱" type="email" v-model="loginPassword"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "viewLogin",
        props: {

        },
        data () {
            return {
                //#region 页面对象
                //#endregion

                //#region 页面内容绑定数据
                    loginName: "",
                    loginPassword: "",
                //#endregion

                //#region 页面样式绑定数据
                //#endregion
            };
        },
        watch: {

        },
        computed: {
            //#region 常量计算属性
            //#endregion

            //#region 数据转换计算属性
            //#endregion

            //#region 样式计算属性
            //#endregion
        },
        methods: {
            //#region 页面事件方法
            //#endregion

            //#region 业务逻辑方法
            //#endregion

            //#region 接口访问方法
            //#endregion

            //#region 数据转换方法
            //#endregion

            //#region 自动样式方法
            //#endregion

            //#region 其他方法
            //#endregion
        },
        created () {

        },
        mounted () {

        },
        components: {

        },
    };
</script>

