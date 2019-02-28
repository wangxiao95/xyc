<template>
	<div>
		<Header></Header>
		<div class="statisticsResult statisticsResult2 credit">
			<h5 class="title">订单：小米科技公司报告PDF</h5>
		</div>
		<div class="searchListMargin2">
			<div class="creditPay">
				<div class="creditPayMoney">
					<em>¥您的订单价格</em>
					<i>120.00元</i>
				</div>
			</div>
			<div class="creditPay">
				<h5 class="PayTit">支付方式</h5>
				<ul>
					<li><img src="/static/images/PAYzf.jpg"><span>支付宝支付</span></li>
					<li><a href="creditPDF.asp"><img src="/static/images/PAYwx.jpg"><span>微信支付</span></a></li>
				</ul>			
			</div>
		</div>
	</div>
</template>

<script>
	import Header from "@/components/Header.vue";
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
	
</style>
