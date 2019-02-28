<template>
	<div>
		<Header></Header>
		<span class="logoW" @click="$router.push('/companyControl')">监控企业</span>
		<div class="marginTop">
			<!-- <mt-navbar v-model="title">
				<mt-tab-item id="1">全部动态</mt-tab-item>
				<mt-tab-item id="2">经营预警</mt-tab-item>
				<mt-tab-item id="3">司法预警</mt-tab-item>
			</mt-navbar> -->
			<van-tabs v-model="active">
				<van-tab title="全部动态">
					<span :class="{active:active}" class="active">
						<div>
							<div v-for="(item,index) in pageList" :key="index" class="companyBox">
								<div class="clearfix">
									<div class="company fl">{{item.company}}</div>
									<div class="status fr" :class="item.status  == '经营' ? ' being':'' + item.status == '司法' ? ' already':''">{{item.status == '经营' ? '经营':'' + item.status == '司法' ? '司法':''}}</div>

								</div>
								<div class="clearfix">
									<div class="content fl">{{item.content}}</div>
									<div class="time fr">{{item.time}}</div>
								</div>
							</div>
						</div>
					</span>
				</van-tab>

				<van-tab title="经营预警">
					<span :class="{active:active}">
						<div>
							<div v-for="(item,index) in pageList" :key="index" class="companyBox">
								<div class="clearfix">
									<div class="company fl">{{item.company}}</div>
									<div class="status fr" :class="item.status  == '经营' ? ' being':'' + item.status == '司法' ? ' already':''">{{item.status == '经营' ? '经营':'' + item.status == '司法' ? '司法':''}}</div>

								</div>
								<div class="clearfix">
									<div class="content fl">{{item.content}}</div>
									<div class="time fr">{{item.time}}</div>
								</div>
							</div>
						</div>
					</span>
				</van-tab>
				<van-tab title="司法预警">
					<span :class="{active:active}">
						<div>
							<div v-for="(item,index) in pageList" :key="index" class="companyBox">
								<div class="clearfix">
									<div class="company fl">{{item.company}}</div>
									<div class="status fr" :class="item.status  == '经营' ? ' being':'' + item.status == '司法' ? ' already':''">{{item.status == '经营' ? '经营':'' + item.status == '司法' ? '司法':''}}</div>

								</div>
								<div class="clearfix">
									<div class="content fl">{{item.content}}</div>
									<div class="time fr">{{item.time}}</div>
								</div>
							</div>
						</div>
					</span>
				</van-tab>
			</van-tabs>
			<!-- <van-tabs v-model="active">
				<van-tab v-for="index in 2">
					<div slot="title">
						<van-icon name="more-o" />选项
					</div>
					内容 {{ index }}
				</van-tab>
			</van-tabs> -->
			<!-- <van-tabs v-model="active">
				<van-tab v-for="(title,index) in titleList" :title="title.title" :class="{active:title.checked}">
					内容
				</van-tab>
			</van-tabs> -->
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
				active: 0,
				titleList: [
					{
						title: "全部动态",
						checked: true,
					},
					{
						title: "经营预警",
						checked: false,
					},
					{
						title: "司法预警",
						checked: false,
					},
				],
				pageList: [
					{
						company: "腾讯科技（上海）有限公司",
						status: "经营",
						content: "债券转让合同纠纷",
						time: "2018-12-13"
					},
					{
						company: "腾讯科技（上海）有限公司",
						status: "司法",
						content: "债券转让合同纠纷",
						time: "2018-12-13"
					},
					{
						company: "腾讯科技（上海）有限公司",
						status: "经营",
						content: "债券转让合同纠纷",
						time: "2018-12-13"
					},
				]
			}
		},
		methods: {
			loadMore() {

			},
			getData() {

			}
		},
		created() { }
	}
</script>

<style scoped>
	/deep/ .mint-tab-item-label {
		font-size: .5rem
	}

	/deep/ .van-ellipsis {
		line-height: 3;
		font-size: .5rem
	}

	.acticve {
		color: #f44
	}

	.companyBox {
		padding: .35rem .5rem;
		border-bottom: .2rem solid #f3f5f7
	}

	.companyBox:first-child {
		border-top: .2rem solid #f3f5f7
	}

	.company {
		font-size: .5rem;
		margin-bottom: .3rem;
	}

	.status {
		border: 1px solid #333;
		padding: .05rem .2rem;
		border-radius: 8%;
	}

	.already {
		border: 1px solid #ff4050;
		color: #ff4050
	}

	.being {
		border: 1px solid #ff7e00;
		color: #ff7e00;
	}

	.content {
		color: #666
	}

	.time {
		color: #999
	}
</style>