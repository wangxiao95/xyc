<template>
	<div class="container">
		<Header></Header>
        <img src="/static/images/icon-35.png" class="logo">
        <div class="marginTop">
            <div class="lone">
                <div class="title">教育经历</div>
                <!-- <div class="desc"><input type="textarea" placeholder="详细的教育经历能为简历加分哦"></div> -->
                <div class="desc"><textarea class="textArea" rows="3" placeholder="详细的教育经历能为简历加分哦"></textarea></div>
                <!-- <textarea name="" id="" cols="30" rows="10"></textarea> -->
            </div>
            <div class="school">
                <div class="subTitle">学校</div>
                <div class="clearfix"><input type="text" class="input fl" placeholder="请选择学校"><span class="fr"><i class="iconfont">&#xe6ff;</i></span></div>
            </div>
            <div class="school">
                <div class="subTitle">学历</div>
                <div class="clearfix"><input type="text" class="input fl" placeholder="请选择学历"><span class="fr"><i class="iconfont">&#xe6ff;</i></span></div>
            </div>
            <div class="school">
                <div class="subTitle">时间段</div>
                <div class="clearfix"><input type="text" class="input fl" placeholder="请选择时间段"><span class="fr"><i class="iconfont">&#xe6ff;</i></span></div>
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
        background: #fff;
        margin-top: .2rem
    }
    .input{
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
        color: rgb( 102, 102, 102 );
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
