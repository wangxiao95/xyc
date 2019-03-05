<template>
	<div class="container">
		<Header></Header>
		<div>
			<section class="wb100 dis-ib conTop">
			    <div class="foodSearch">
			        <input type="text" class="foodSearchText" placeholder="请输入商品名称或条形码">
			    </div>
			    <div class="foodSearchCon">
			        
			        <div class="buttonBIg">
			            <div class="submit" @click="$router.push('/drug/drugList')">查询</div>
			        </div>
			    </div>
			
			</section>
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
