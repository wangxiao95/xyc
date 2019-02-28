<template>
	<div>
		<Header></Header>
		<div>
			<section class="wb100 dis-ib conTop">
			   <ul class="shopDetailsList">
			       <li>
			           <h5 class="title">标称生产企业名称</h5>
			           <div class="content">
			                浦南农副产品批发市场
			           </div>
			        </li>
			        <li>
			            <h5 class="title">标称生产企业地址</h5>
			            <div class="content">
			                松江区叶榭镇车亭公路1254号
			            </div>
			        </li>
			        <li>
			            <h5 class="title">被抽样单位名称</h5>
			            <div class="content">
			                上海惠多超市有限公司
			            </div>
			        </li>
			        <li>
			            <h5 class="title">食品名称</h5>
			            <div class="content">
			                山芋叶
			            </div>
			        </li>
			        <li>
			            <h5 class="title">分类</h5>
			            <div class="content">
			                食用农产品
			            </div>
			        </li>
			        <li>
			            <h5 class="title">规格型号</h5>
			            <div class="content">
			                散装称重
			            </div>
			        </li>
			        <li>
			            <h5 class="title">商标</h5>
			            <div class="content">
			                /
			            </div>
			        </li>
			        <li>
			            <h5 class="title">生产日期/批号</h5>
			            <div class="content">
			                2017-10-11//
			            </div>
			        </li>
			        <li>
			            <h5 class="title">不合格项目||检验结果||标准值</h5>
			            <div class="content">
			                α-六六六||未检出||0.05,铅||未检出||0.3,总汞||未检出||0.01,镉||0.0070||0.2,总砷||未检出||0.5,铬||0.02||0.5,杀扑磷||未检出||0.05,氟虫腈||未检出||0.02,硫线磷||未检出||0.02,灭多威||未检出||0.2,水胺硫磷||未检出||0.05,敌百虫||未检出||0.2,辛硫磷||未检出||0.05,敌敌畏||未检出||0.2,甲胺磷||0.11||0.05,杀螟硫磷||未检出||0.5,甲基对硫磷||未检出||0.02,杀虫脒||未检
			            </div>
			        </li>
			        <li>
			            <h5 class="title">检验机构</h5>
			            <div class="content">
			                上海市农药研究所有限公司
			            </div>
			        </li>
			        <li>
			            <h5 class="title">检验结果</h5>
			            <div class="content">
			                不合格
			            </div>
			        </li>
			   </ul>
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
	.shopDetailsList li{
		border-bottom: .2rem solid #f3f5f7;
	}
</style>
