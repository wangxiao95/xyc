
<template>
    <div class="container">
        <Header></Header>
        <section class="wb100 dis-ib conTop">
            <div class="loginTop">
                <p class="label">你好，欢迎加入</p>
                <img src='/static/images/icon-16.png' class="loginImg">
                <span @click="$router.push('/login')" class="loginHref">
                    <img src='/static/images/icon-17.png'>
                    <em>登录</em>
                </span>
            </div>
            <div class="loginList">
                <ul :model="formData">
                    <li>
                        <input type="text" v-model="formData.mobile" placeholder="请输入手机号码">
                    </li>
                    <li>
                        <van-cell-group>
                        <van-field v-model="formData.code" center clearable placeholder="验证码">
                            <van-button slot="button" size="small" type="primary" class="submit">获取验证码</van-button>
                        </van-field>
                    </van-cell-group>
                    </li>
                    <li>
                        <input type="text" v-model="formData.newPwd" placeholder="设置新密码">
                    </li>
                </ul>
            </div>
            <div class="wb100 dis-ib tc mtb5">
                <a @click="submit" class="BtnSmall">提交</a>
            </div>
        </section>
    </div>
</template>

<script>
    import Header from "@/components/Header.vue";
    export default {
        components: {
            Header
        },
        data() {
            return {
                formData: {
                    mobile: "",
                    code: "",
                    newPwd: ""
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
    }
</script>

<style scoped>
    /deep/ .header-title {
        background: #e70000 !important;
        color: #fff;
    }
    .forget{
        color: #999
    }
     /* .loginList {
        margin-top: 1.4rem
    } */

    .loginList li {
        border: none
    }

    /* .loginList li input {
        border: 1px solid #ccc;
        height: 1.2rem;
        padding: .3rem;
    } */
    .submit{
        background: #e70000;
        border-color: #e70000
    }

    /deep/ .van-button {
        width: 100%;
    }

    /deep/ .van-cell {
        padding: .1rem
    }

    /* /deep/ .van-cell--center {
        border: 1px solid #ccc
    } */
    /deep/ .van-field__control{
        padding: .3rem
    }

    .forget {
        color: #409eff;
        padding: .15rem .05rem
    }
</style>