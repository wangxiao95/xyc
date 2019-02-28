<template>
	<div>
		<Header></Header>
		<div>
			 <section class="wb100 dis-ib conTop">
			    <div class="footListTip">
			        2014年以来共抽检<i class="c-e70016">2次</i>， 其中不合格次数为1次，合格次数为1次。
			    </div>
			    <ul class="shopDetailsList">
			        <li>
			            <h5 class="title">食品名称</h5>
			            <div class="content">
			                AD甜牛奶
			            </div>
			        </li>
			        <li>
			            <h5 class="title">商标</h5>
			            <div class="content">
			                /
			            </div>
			        </li>
			        <li>
			            <h5 class="title">标称生产企业名称</h5>
			            <div class="content">
			                广西合浦南国乳品厂
			            </div>
			        </li>
			    </ul>
			    <ul class="footDetailsList">
			        <li>
			            <div class="label">生产企业：湖南中粮可口可乐饮料有限公司</div>
			            <div class="label">生产日期/批号/规格：2015-11-13 550ml/瓶</div>
			            <div class="label">被抽检单位：贵州永辉超市有限公司贵乌北路分公司</div>
			            <img src="/static/images/g-05.png" class="state">
			        </li>
			        <li>
			            <div class="label">生产企业：<span>湖南中粮可口可乐饮料有限公司</span></div>
			            <div class="label">生产日期/批号/规格：<span>2015-11-13 550ml/瓶</span> </div>
			            <div class="label">被抽检单位：<span>贵州永辉超市有限分公司</span> </div>
			            <img src="/static/images/g-06.png" class="state">
			        </li>
			    </ul>
				<!-- <ul class="inspectList" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading">
				    <li v-for="(item,index) in pageList" :key="index">
				        <a href="shopDetails.asp">
				            <h5 class="title">{{item.title}}</h5>
				            <p class="label">{{item.label}}</p>
				            <i class="state c-e70016" v-if="item.state == '合格'">{{item.state}}</i>
							<i class="state" v-else="">{{item.state}}</i>
				        </a>
				    </li>
				</ul> -->
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
			return {
				loading:false,
				pageList:[
					{
						
					}
				]
			}
		},
		methods:{
			loadMore(){
				
			},
			getData(){
				
			}
		},
		created(){
			this.getData()
		}
	}
</script>

<style scoped>
	
</style>
