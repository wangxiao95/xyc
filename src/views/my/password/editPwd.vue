<template>
    <div>
        <Header></Header>
        <div class="loginList">
            <ul :model="formData">
                <li>
                    <input type="text" v-model="formData.pwd" placeholder="请输入当前密码">
                </li>
                <li>
                    <input type="text" v-model="formData.newPwd" placeholder="请输入新密码">
                </li>
                <li>
                    <input type="text" v-model="formData.nextPwd" placeholder="重复输入新密码">
                </li>
            </ul>
            <van-button type="primary" @click="submit">立即修改</van-button>
            <div class="forget fr" @click="$router.push('/findPwd')">
                忘记密码，通过手机号重置
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header"
    import { Toast } from "mint-ui"
    export default {
        components: {
            Header
        },
        data() {
            return {
                formData:{
                    pwd:"",
                    newPwd:"",
                    nextPwd:""
                }
            }
        },
        methods: {
            submit() {
                this.formData.pwd =""
                this.formData.newPwd = ""
                this.formData.nextPwd = ""
                let instance = Toast('修改成功');
                setTimeout(() => {
                    instance.close();
                }, 2000);
            }
        },
        created() { }
    }
</script>

<style scoped>
    .loginList{
        margin-top: 1.4rem
    }
    .loginList li{
        border: none
    }
    .loginList li input{
        border:1px solid #ccc;
        height: 1.2rem;
        padding: .3rem;
    }
    /deep/ .van-button{
        width: 100%;

    }
    .forget{
        color: #409eff;
        padding: .15rem .05rem
    }
</style>