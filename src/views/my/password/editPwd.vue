<template>
    <div class="container">
        <Header></Header>
        <section class="wb100 dis-ib conTop">
           
            <div class="loginList">
                <ul :model="formData">
                    <li>
                        <input type="text" v-model="formData.oldPwd" placeholder="请输入旧密码">
                    </li>
                    <li>
                        <input type="text" v-model="formData.newPwd" placeholder="请输入新密码">
                    </li>
                    <li>
                        <input type="text" v-model="formData.surePwd" placeholder="请确认新密码">
                    </li>
                </ul>
                <div class="forget fr" @click="$router.push('/findPwd')">
                    忘记密码，通过手机号重置
                </div>
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
                    oldPwd: "",
                    newPwd: "",
                    surePwd: ""
                }
            }
        },
        methods: {
            submit() {

            }
        }
    }
</script>

<style scoped>

    .forget{
        color: #999
    }
</style>