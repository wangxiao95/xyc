
<template>
    <div class="container">
        <Header></Header>
        <img src="/static/images/icon-35.png" class="logo">
        <div class="marginTop">
            <div class="userList">
                <ul>
                    <li class="title">个人信息</li>
                    <li class="clearfix">
                        <span class="fl">姓名：</span>
                        <input class="fr tr" type="text" placeholder="请输入姓名">
                    </li>
                    <li class="clearfix">
                        <span class="fl">身份证号：</span>
                        <input class="fr tr" type="text" placeholder="请输入身份证号码">
                    </li>
                    <!-- <li class="clearfix">
                        <span class="fl">性别：</span>
                        <input class="fr tr" type="text" placeholder="请输入性别">
                    </li>
                    <li class="clearfix">
                        <span class="fl">联系电话：</span>
                        <input class="fr tr" type="text" placeholder="请输入电话号码">
                    </li>
                    <li class="clearfix">
                        <span class="fl">邮箱：</span>
                        <input class="fr tr" type="text" placeholder="请输入您的联系邮箱">
                    </li>
                    <li class="title">公司信息</li>
                    <li class="clearfix">
                        <span class="fl">公司名称：</span>
                        <input class="fr tr" type="text" placeholder="请输入您的公司名称">
                    </li>
                    <li class="clearfix">
                        <span class="fl">职位：</span>
                        <input class="fr tr" type="text" placeholder="请输入您的职位">
                    </li>
                    <li class="clearfix">
                        <span class="fl">行业：</span>
                        <input class="fr tr" type="text" placeholder="请输入您的所属行业">
                    </li> -->
                </ul>   
                <van-button class="submit" @click="submit">提交身份认证</van-button>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header"
    export default {
        components: {
            Header
        },
        data() {
            return {
                formData: {
                    company: "",
                    idCard: "",
                    name: "",
                    mobile: "",
                    email: "",
                },
                checked: false
            }
        },
        methods: {
            submit() {
                this.$router.push("/attestationStatus")
            }
        },
        created() { }
    }
</script>

<style scoped>
        .title {
        font-weight: bold;
        font-size: .5rem
    }
    .read {
        font-size: .38rem;
        color: #ccc;
        padding: .4rem .4rem;
    }

    /deep/ .van-radio__label {
        color: #999;
    }

    .userList li {
        margin: 0rem .4rem;
        border-bottom: 1px solid rgb(241, 241, 241);
        padding: .3rem 0;
    }

    .marginTop {
        border-top: 1px solid rgb(241, 241, 241)
    }

    .userList li span {
        font-family: "Microsoft YaHei";
        color: #444;
        font-size: .44rem;
        display: inline-block;
        line-height: .9rem;
        /* width: 2.4rem */
    }

    .userList li input {
        height: .9rem;
        width: 7rem;
        overflow: hidden;
        line-height: .7rem;
        font-size: .44rem;
        color: #383838;
        font-family: inherit;
        margin: 0;
        padding: 0 .15rem;
        background: #fff
        /* border: 1px solid #ccc; */
    }

    /deep/ .van-checkbox__icon--checked .van-icon {
        background: #e50015;
        border-color: #e50015;
    }

    .submit {
        color: #fff;
        background: #e50015;
        width: 100%;
        position: absolute;
        bottom: 0;
    }
</style>