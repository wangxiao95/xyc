<template>
    <div>
        <Header></Header>
        <div class="loginList">
            <ul :model="formData">
                <li>
                    <input type="text" v-model="formData.mobile" placeholder="手机号码">
                </li>
                <li>
                    <!-- <input type="text" class="code" v-model="formData.mobile" placeholder="验证码"> -->
                    <van-cell-group>
                        <van-field v-model="formData.code" center clearable placeholder="验证码">
                            <van-button slot="button" size="small" type="primary">获取验证码</van-button>
                        </van-field>
                    </van-cell-group>
                </li>
                <li>
                    <input type="text" v-model="formData.newPwd" placeholder="设置新密码">
                </li>
            </ul>
            <van-button type="primary" @click="submit">立即修改</van-button>
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
                formData: {
                    mobile: "",
                    newPwd: "",
                    code: ""
                }
            }
        },
        methods: {
            submit() {
                this.formData.mobile =""
                this.formData.code = ""
                this.formData.newPwd = ""
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
    .loginList {
        margin-top: 1.4rem
    }

    .loginList li {
        border: none
    }

    .loginList li input {
        border: 1px solid #ccc;
        height: 1.2rem;
        padding: .3rem;
    }

    /deep/ .van-button {
        width: 100%;
    }

    /deep/ .van-cell {
        padding: .1rem
    }

    /deep/ .van-cell--center {
        border: 1px solid #ccc
    }
    /deep/ .van-field__control{
        padding: .3rem
    }

    .forget {
        color: #409eff;
        padding: .15rem .05rem
    }
</style>