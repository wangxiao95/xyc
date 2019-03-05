
<template>
    <div class="container">
        <Header></Header>
        <img src="/static/images/icon-35.png" class="logo">
        <div class="marginTop">
            <div class="userList">
                <ul>
                    <!-- <li class="title">个人信息</li> -->
                    <li class="clearfix">
                        <span class="fl">姓名：</span>
                        <input class="fr tr" type="text" placeholder="请输入姓名">
                    </li>
                    <li class="clearfix">
                        <span class="fl">手机号：</span>
                        <input class="fr tr" type="text" placeholder="请输入手机号码">
                    </li>
                    <li class="clearfix">
                        <span class="fl">邮箱：</span>
                        <input class="fr tr" type="text" placeholder="请输入邮箱">
                    </li>
                    <li class="clearfix">
                        <span class="fl">行政相对人：</span>
                        <input class="fr tr" type="text" placeholder="请输入行政相对人">
                    </li>
                    <li class="clearfix">
                        <span class="fl" >统一社会信用代码：</span>
                        <input class="fr tr" type="text" placeholder="请输入信用代码">
                    </li>
                    <li class="clearfix">
                        <span class="fl">行政处罚决定文书号：</span>
                        <input class="fr tr" type="text" placeholder="请输入文书号">
                    </li>
                    <li class="clearfix">
                        <span class="fl">处罚名称：</span>
                        <input class="fr tr" type="text" placeholder="请输入处罚名称">
                    </li>
                    <li class="clearfix">
                        <span class="fl">处罚决定日期：</span>
                        <input class="fr tr" type="text" placeholder="请输入日期"> 
                    </li>
					 <li class="clearfix">
					    <span class="fl">处罚机关：</span>
					    <input class="fr tr" type="text" placeholder="请输入处罚机关">
					</li>
					<li class="clearfix">
					    <span class="fl">申请修复事由：</span>
					    <input class="fr tr" type="text" placeholder="请输入修复事由">
					</li>
					<li class="clearfix">
					    <span class="fl">附件上传：</span>
					    <input class="fr tr" type="text" placeholder="请上传附件">
					</li>
					<li class="clearfix">
					    <span class="fl">验证码：</span>
					    <input class="fr tr" type="text" placeholder="请输入验证码">
					</li>
                </ul>   
				<div class="desc">
					*本人保证所填信息真实有效，如果提供虚假信息的，同意列入本人的诚信档案。
				</div>
                <van-button class="submit" @click="submit">提交</van-button>
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
                this.$router.push("/creditRepair")
            }
        },
        created() { }
    }
</script>

<style scoped>
	.desc{
		color: #f00;
		padding: .2rem .3rem;
	}
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
	.userList{
		margin-bottom: 1.5rem;}
    .userList li input {
        height: .9rem;
        width: 5.5rem;
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
        position: fixed;
        bottom: 0;
    }
</style>