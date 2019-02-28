<template>
	<div>
		<Header></Header>
        <img src="/static/images/icon-35.png" class="logo">
        <div class="marginTop">
            <div class="lone">
                <div class="title">最近一份工作经历</div>
                <div class="desc"><textarea class="textArea" rows="3" placeholder="99%的Boss关注您最近一份工作经历"></textarea></div>
            </div>
            <div class="school">
                <div class="subTitle">公司名称</div>
                <div class="clearfix"><input type="text" class="input fl" placeholder="请填写公司名称"><span class="fr"><i class="iconfont">&#xe6ff;</i></span></div>
            </div>
            <div class="school">
                <div class="subTitle">时间段</div>
                <div class="clearfix"><input type="text" class="inputS fl" placeholder="请选择"><span class="f5 font">至</span><span class="f5">至今</span></div>
            </div>
            <div class="school">
                <div class="subTitle">职位类型</div>
                <div class="clearfix"><input type="text" class="input fl" placeholder="请选择职位类型"><span class="fr"><i class="iconfont">&#xe6ff;</i></span></div>
            </div>
             <div class="school">
                <div class="subTitle">工作内容</div>
                <div class="clearfix">
                    <textarea class="textArea fl" rows="3" placeholder="请填写工作内容"></textarea>
                    <!-- <input type="textarea" class="inputArea fl" placeholder="请填写工作内容"><span class="fr"><i class="iconfont">&#xe6ff;</i></span> -->
                    </div>
            </div>
            <div class="tc">
                <van-button class="submit">提交</van-button>      
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
			return {}
		},
		methods:{},
		created(){}
	}
</script>

<style scoped>
    .title{
        font-weight: 700;
        font-size: .5rem;
    }
    .lone{
        padding: .4rem 0 0 0;
    }
    .marginTop{
        padding: 0 .5rem
    }
    .desc{
        font-size: .45rem;
        color: rgb( 153, 153, 153 );
    }
    .textArea{
        width: 100%;
        resize:none;
        font-size: .44rem;
        background: #fff;
        margin-top: .2rem
    }
    .font{
        display: inline-block;
        margin: 0 .5rem;
    }
    .f5{
        font-size: .5rem;
        color: #666;
        font-weight: 700;
    }
    .input{
        background: #fff;
        font-size: .44rem;
        color: rgb( 51, 51, 51 );
        font-weight: 500;
    }
    .inputS{
        width: 3.2rem;
        background: #fff;
        font-size: .44rem;
        color: rgb( 51, 51, 51 );
        font-weight: 500;
    }
    .iconfont{
        font-size: .7rem;
        margin-top: .2rem;
        font-weight: 700;
        color: #999;
    }
    .subTitle{
        font-size: .48rem;
        margin-bottom: .3rem;
        color: #333;
        font-family: "PingFang";
    }
    .school{
        padding: .5rem 0;
        border-bottom:  .06rem solid #f3f5f7
    }
    .submit{
        color: #fff;
        background-color: rgb( 229, 0, 21 );
        width: 7rem;
        border-radius: 4%;
        font-size: .5rem;
        margin-top: 1rem;
    }
   
</style>
