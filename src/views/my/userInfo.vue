<template>
    <div>
        <Header></Header>
        <div>
            
            <div class="userList">
                <ul :model="formData">
                    <li class="title">个人信息</li>
                    <li class="clearfix">
                        <span>账号：</span>
                        <input type="text" v-model="formData.accountNo">
                    </li>
                    <li class="clearfix">
                        <span>昵称：</span>
                        <input type="text" v-model="formData.password">
                    </li>
                    <li class="clearfix">
                        <span>姓名：</span>
                        <input type="text" v-model="formData.password">
                    </li>
                    <li class="clearfix">
                        <span>性别：</span>
                        <!-- <input type="text" v-model="formData.password"> -->
                        <van-radio-group v-model="radio">
                            <van-radio name="1">男</van-radio>
                            <van-radio name="2">女</van-radio>
                            <van-radio name="3">保密</van-radio>
                        </van-radio-group>
                    </li>
                    <li class="clearfix">
                        <span>联系电话：</span>
                        <input type="text" v-model="formData.password">
                    </li>
                     <li class="clearfix">
                        <span>邮箱：</span>
                        <input type="text" v-model="formData.password">
                    </li>
                     <li class="title">公司信息</li>
                      <li class="clearfix">
                        <span>公司名称：</span>
                        <input type="text" v-model="formData.password">
                    </li>
                     <li class="clearfix">
                        <span>职位：</span>
                        <input type="text" v-model="formData.password">
                    </li>
                     <li class="clearfix">
                        <span>行业：</span>
                        <input type="text" v-model="formData.password">
                    </li>
                </ul>
                <div class="tc">
                    <van-button type="primary">提交</van-button>      
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    export default {
        components: {
            Header
        },
        data() {
            return {
                formData: {
                    accountNo: "",
                    password: ""

                },
                radio:""
            };
        },
        methods: {},
        created() { }
    };
</script>

<style scoped>
    .userList {
        margin-top: 1.6rem
    }
    .userList li{
        margin: .3rem 1.2rem
    }
    .userList li span{
        float: left;
        display: inline-block;
        line-height: .9rem;
        width: 2.4rem
    }
    .userList li input {
        height: .9rem;
        width: 7rem;
        float: left;
        overflow: hidden;
        line-height: .7rem;
        font-size: .44rem;
        color: #383838;
        font-family: inherit;
        margin: 0;
        padding:0 .15rem;
        border: 1px solid #ccc;
    }
    .userList li input:focus{
        border-color: #409eff
    }
    .title{
        font-weight: bold;
        font-size: .5rem
    }
    /deep/ .van-radio-group{
        display: flex;
        justify-content: space-around
    }
    /deep/ .van-button--primary{
        width: 3rem;
        height: 1.2rem;
        line-height: 1.2rem;
        margin-top: .6rem;
        border-radius: 10%;
        
    }
</style>