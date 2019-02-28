<template>
    <div>
        <Header></Header>
        <div>
            
            <div class="userList">
                <ul :model="formData">
                    <li class="clearfix">
                        <span>姓名：</span>
                        <input type="text" v-model="formData.accountNo">
                    </li>
                    <li class="clearfix">
                        <span>手机号：</span>
                        <input type="text" v-model="formData.password">
                    </li>
                    <li class="clearfix">
                        <span>邮箱：</span>
                        <input type="text" v-model="formData.password">
                    </li>
                    <li class="clearfix">
                        <span>行政相对人：</span>
                        <input type="text" v-model="formData.password">
                    </li>
                     <li class="clearfix">
                        <span>同意社会信用代码：</span>
                        <input type="text" v-model="formData.password">
                    </li>
                      <li class="clearfix">
                        <span>行政处罚决定文书号：</span>
                        <input type="text" v-model="formData.password">
                    </li>
                     <li class="clearfix">
                        <span>处罚名称：</span>
                        <input type="text" v-model="formData.password">
                    </li>
                     <li class="clearfix">
                        <span>处罚决定日期：</span>
                        <input type="text" v-model="formData.password">
                    </li>
                     <li class="clearfix">
                        <span>处罚机关：</span>
                        <input type="text" v-model="formData.password">
                    </li>
                     <li class="clearfix">
                        <span>申请修复事由：</span>
                        <input type="text" v-model="formData.password">
                    </li>
                     <li class="clearfix">
                        <span>附件上传：</span>
                        <input type="text" v-model="formData.password">
                    </li>
                     <li class="clearfix">
                        <span>验证码：</span>
                        <input type="text" v-model="formData.password">
                    </li>
                </ul>
            </div>
            <div class="desc">*本人保证所填信息真实有效，如果提供虚假信息的，同意列入本人的诚信档案。</div>
            <div class="tc">
                <van-button type="primary">提交</van-button>      
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
        margin: .3rem .6rem
    }
    .userList li span{
        float: left;
        display: inline-block;
        line-height: .9rem;
        width: 4.1rem;
        text-align: right;
        margin-right: .3rem
    }
    .userList li input {
        height: .9rem;
        width: 6rem;
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
    /deep/ .van-button{
        width: 4.6rem;
        margin-top: 1rem;
    }
    .desc{
        color: #f00;
        padding:.2rem 1rem
    }
</style>