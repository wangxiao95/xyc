<template>
	<div>
		<Header></Header>
		<img src="/static/images/icon-35.png" class="logo">
		<div class="statisticsResult statisticsResult2 credit">
			<h5 class="title">订单：小米科技公司报告PDF</h5>
		</div>
		<div class="searchListMargin2">
			<div class="creditPDF"></div>
			<div class="creditEmail">
				<input type="email" placeholder="填写邮箱地址">
				<button id="toastBtn" type="button" class="mui-btn Creditbotton fr">发送邮箱</button>
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
	
</style>
