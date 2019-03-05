<template>
	<div class="container">
		<Header></Header>
		<div class="marginTop">
			<van-tabs type="card">
				<van-tab title="个人信用">
					<!-- <img src="/static/images/myCredit.png" alt="" class="myCredit"> -->
					<div class="companyTop">
						<img src="/static/images/bg-01.jpg" class="wb100 fl">
						<div class="content">
							<div class="title">
								<span><img src="/static/images/logo/logo.png"></span>
								<em>腾讯科技（上海）有限公司</em>
							</div>
							<p class="credited ">社会信用码 010111852364152</p>
							<div class="claim">
								<span><img src="/static/images/icon-1.png"></span>
								<p class="claimCon">认领</p>
								<p class="claimnumber">浏览量 3万+</p>
							</div>
							<div class="number">
								<img src="/static/images/bg-02.png">
								<em>98</em>
							</div>
						</div>
					</div>
					<div class="desc">完成下列任务，提高个人信用分</div>
					<ul>
						<li class="creditItem clearfix">
							<div class="fr" @click="$router.push('/education')">
								<span class="itemAll itemStatus">已完成
									<i class="iconfont">&#xe6ff;</i>
								</span>
							</div>
							<div class="">
								<img src="/static/images/c-1.png" alt="" class="cImg">
								<span class="itemAll itemTitle">教育经历</span>
							</div>
						</li>
						<li class="creditItem clearfix">
							<div class="fr" @click="$router.push('/work')">
								<span class="itemAll itemStatus">已完成
									<i class="iconfont">&#xe6ff;</i>
								</span>
							</div>
							<div class="">
								<img src="/static/images/c-2.png" alt="" class="cImg">
								<span class="itemAll itemTitle">个人经历</span>
							</div>
						</li>
						<li class="creditItem clearfix">
							<div class="fr" @click="$router.push('/identity')">
								<span class="itemAll itemStatus">已完成
									<i class="iconfont">&#xe6ff;</i>
								</span>
							</div>
							<div class="">
								<img src="/static/images/c-3.png" alt="" class="cImg">
								<span class="itemAll itemTitle">身份认证</span>
							</div>
						</li>
						<li class="creditItem clearfix">
							<div class="fr" @click="$router.push('/five')">
								<span class="itemAll itemStatus">已完成
									<i class="iconfont">&#xe6ff;</i>
								</span>
							</div>
							<div class="">
								<img src="/static/images/c-4.png" alt="" class="cImg">
								<span class="itemAll itemTitle">五险查询</span>
							</div>
						</li>
						<li class="creditItem clearfix">
							<div class="fr" @click="$router.push('/edu')">
								<span class="itemAll itemStatus">已完成
									<i class="iconfont">&#xe6ff;</i>
								</span>
							</div>
							<div class="">
								<img src="/static/images/c-5.png" alt="" class="cImg">
								<span class="itemAll itemTitle">学历认证</span>
							</div>
						</li>
						<li class="creditItem clearfix">
							<div class="fr" @click="$router.push('/creditPDF')">
								<span class="itemAll itemStatus">已完成
									<i class="iconfont">&#xe6ff;</i>
								</span>
							</div>
							<div class="">
								<img src="/static/images/c-6.png" alt="" class="cImg">
								<span class="itemAll itemTitle">征信报告</span>
							</div>
						</li>
					</ul>
				</van-tab>
				<van-tab title="企业信用">
					<!-- <img src="/static/images/companyCredit.png" alt="" class="myCredit"> -->
					<div class="companyTop">
						<img src="/static/images/bg-01.jpg" class="wb100 fl">
						<div class="content">
							<div class="title">
								<span><img src="/static/images/logo/logo.png"></span>
								<em>腾讯科技（上海）有限公司</em>
							</div>
							<p class="credited ">社会信用码 010111852364152</p>
							<div class="claim">
								<span><img src="/static/images/icon-1.png"></span>
								<p class="claimCon">认领</p>
								<p class="claimnumber">浏览量 3万+</p>
							</div>
							<div class="number">
								<img src="/static/images/bg-02.png">
								<em>98</em>
							</div>
						</div>
					</div>
					<div class="tc">
						<van-button class="submit">信用修复</van-button>
					</div>
				</van-tab>
			</van-tabs>
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
		methods: {},
		created() {}
	}
</script>

<style scoped>
	/deep/ .van-tabs__nav--card {
		margin: 0;
		height: 1.15rem;
	}

	/deep/ .van-ellipsis {
		line-height: 1.15rem;
		color: #333;
	}

	/deep/ .van-tabs--card {
		padding-top: 1.15rem
	}

	/deep/ .van-tabs__nav--card .van-tab {
		height: 1.15rem;
		border-right: none
	}

	/deep/ .van-tabs--card>.van-tabs__wrap {
		height: 1.15rem;
	}

	/deep/ .van-tabs .van-tab__pane {
		/* margin-top: .1rem */
	}

	/deep/ .van-tabs__nav--card .van-tab.van-tab--active {
		background: #ffffff;
		color: #e50015
	}

	/deep/ .van-tabs__nav--card {
		border: none
	}

	/deep/ .van-tab--active::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 30%;
		right: 30%;
		border-bottom: 3px solid #e50015
	}

	/deep/ .van-tab--active .van-ellipsis {
		color: #e50015
	}

	.myCredit {
		width: 100%;
		vertical-align: middle
	}

	.desc {
		padding: .3rem .3rem
	}

	.creditItem {
		padding: .3rem .4rem;
		background: #fff;
		margin-bottom: .2rem
	}

	.iconfont {
		font-size: .6rem;
		color: #777;
		font-weight: 700;
	}

	.cImg {
		width: .6rem;
		vertical-align: middle;
		margin-bottom: .1rem;
	}

	.itemAll {
		display: inline-block;
		line-height: 1rem;
		font-size: .5rem
	}

	.itemTitle {
		/* font-size: .6rem; */
		font-family: "PingFang";
		color: rgb(51, 51, 51);
		/* line-height: 0.909; */
		margin-left: .5rem;
		line-height: 1rem;
	}

	.itemStatus {
		font-family: "PingFang";
		color: rgb(179, 179, 179);
	}

	.submit {
		width: 5rem;
		border-radius: 4%;
		background: rgb(229, 0, 21);
		;
		color: #fff;
		margin-top: 3rem;
	}

	.credited {
		margin: 2%;
		width: 100%;
		text-align: center;
		font-size: .34rem;
		color: #fff;
	}
</style>
