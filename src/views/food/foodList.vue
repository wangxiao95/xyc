<template>
	<div>
		<Header></Header>
		<div>
			 <section class="wb100 dis-ib conTop">
			    <div class="footListTip">
			        2014年以来抽检结果出现不合格的产品:
			    </div>
			    <div class="footListTitle"><span>食品名称(企业名称)</span><em>抽检不合格/总数</em></div>
			    <ul class="inspectList" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading">
			        <li v-for="(item,index) in pageList" :key="index">
			            <div @click="$router.push('/food/foodDetails')">
			                <h5 class="title">{{item.title}}</h5>
			                <p class="label">{{item.label}}</p>
			                <em class="state c-666"><i class="c-e70016">{{item.step}}</i>/{{item.steps}}</em>
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
			return {
				loading:false,
				pageList:[
					{
						title:"100％纯鲜奶（巴氏杀菌乳）",
						label:"连云港东农乳业有限公司",
						step:"1",
						steps:"7"
					}
				],
				
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
