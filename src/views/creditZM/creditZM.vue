<template>
	<div>
		<!-- <Header></Header> -->
		<!-- <img src="/static/images/icon-35.png" class="logo"> -->
		<header class="mui-bar mui-bar-nav header">
			<a @click="$router.back()" class="iconfont headerIco headLeft">&#xe792;</a>
			<div class="headerSerach headerSerachCenter2">
				<input type="search" class="headerSerachText" placeholder="企业名称、信用代码、姓名等">
				<button class="headerSerachBtn" @click="$router.push('/search')"></button>
			</div>
		</header>

		<div class="statisticsResult statisticsResult2">为你找到<i class="c-e70016">1258</i>家公司</div>

		<div id="creditZMList" class="mui-scroll-wrapper mui-active searchListMargin searchListMargin2">
			<div class="mui-scroll">
				<div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading">
					<div class="pageListBox" v-for="(item,index) in pageList" :key="index" @click="$router.push('/company')">
						<div class="searchListTop">
							<div class="photo"><img :src="item.img"></div>
							<h5 class="title">{{item.title}}</h5>
							<span class="label">{{item.label}}</span>
						</div>
						<div class="searchListBottom">
							<span class="labelList">
								<em>法定代表人</em>
								<i class="c-e70016">{{item.low1}}</i>
							</span>
							<span class="labelList">
								<em>注册资本</em>
								<i>{{item.low2}}</i>
							</span>
							<span class="labelList">
								<em>成立日期</em>
								<i>{{item.low3}}</i>
							</span>
						</div>
						<div class="creditLine"></div>
						<div class="creditBtton" @click="$router.push('/creditPay')">信用证明</div>
					</div>
				</div>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	import Header from "@/components/Header.vue";
	import Footer from "@/components/Footer.vue";
	export default {
		components: {
			Header,
			Footer
		},
		data() {
			return {
				pageList: [{
						title: "腾讯科技（上海）有限公司",
						label: "在业",
						low1: "奚丹",
						low2: "500万美元",
						low3: "2008-07-23",
						img: "/static/images/logo/logo-1.png"
					},
					{
						title: "腾讯科技（上海）有限公司",
						label: "在业",
						low1: "奚丹",
						low2: "500万美元",
						low3: "2008-07-23",
						img: "/static/images/logo/logo-1.png"
					},
					{
						title: "腾讯科技（上海）有限公司",
						label: "在业",
						low1: "奚丹",
						low2: "500万美元",
						low3: "2008-07-23",
						img: "/static/images/logo/logo-1.png"
					},
					{
						title: "腾讯科技（上海）有限公司",
						label: "在业",
						low1: "奚丹",
						low2: "500万美元",
						low3: "2008-07-23",
						img: "/static/images/logo/logo-1.png"
					},
					{
						title: "腾讯科技（上海）有限公司",
						label: "在业",
						low1: "奚丹",
						low2: "500万美元",
						low3: "2008-07-23",
						img: "/static/images/logo/logo-1.png"
					},
				],
				loading: false
			}
		},
		methods: {
			loadMore() {

			},
			getData() {

			}
		},
		created() {
			this.getData()
		}
	}
</script>

<style scoped>
	.pageListBox {
		background: #fff;
		border-bottom: .2rem solid #f3f5f7;
	}

	.searchListMargin {
		margin-bottom: 1.6rem;
	}
</style>
