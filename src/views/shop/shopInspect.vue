<template>
	<div>
		<Header></Header>
		<div>
			<section class="wb100 dis-ib conTop conBottom">
			    <div class="companyWrap shopInspect">
			        <h3 class="companyTitle">国家食品安全监督抽检</h3>
			        <ul class="shopInspectList">
			            <li>
			                <span>合格产品</span>
			                <em>175427</em>
			            </li>
			            <li>
			                <span>不合格产品</span>
			                <em>175427</em>
			            </li>
			        </ul>
			    </div>
			    <div class="companyWrap shopInspect">
			        <h3 class="companyTitle">国家保健食品安全监督抽检</h3>
			        <ul class="shopInspectList">
			            <li>
			                <span>合格产品</span>
			                <em>175427</em>
			            </li>
			            <li>
			                <span>不合格产品</span>
			                <em>175427</em>
			            </li>
			        </ul>
			    </div>
			    <div class="companyWrap shopInspect">
			        <h3 class="companyTitle">省级食品安全监督抽检</h3>
			        <ul class="shopInspectList">
			            <li>
			                <span>合格产品</span>
			                <em>175427</em>
			            </li>
			            <li>
			                <span>不合格产品</span>
			                <em>175427</em>
			            </li>
			        </ul>
			    </div>
			    <ul class="shopInspectForm">
			        <li><span class="inName">企业名称</span><input type="text" class="inInput" placeholder="请输入企业名称"></li>
			        <li><span class="inName">企业名称</span><input type="text" class="inInput" placeholder="请输入产品名称"></li>
			        <li class="ListAfter"><span class="inName">企业名称</span><input type="text" class="inInput" placeholder="请选择商品类别"></li>
			    </ul>
			</section>
			<a @click="$router.push('/shop/shopInspectList')" class="spaceFoot shopInspectFoot">查询</a>
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
