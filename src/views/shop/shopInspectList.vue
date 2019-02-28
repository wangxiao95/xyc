<template>
	<div>
		<Header></Header>
		<div>
			 <section class="wb100 dis-ib conTop">
			    <ul class="inspectList" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading">
			        <li v-for="(item,index) in pageList" :key="index">
			            <a href="shopDetails.asp">
			                <h5 class="title">{{item.title}}</h5>
			                <p class="label">{{item.label}}</p>
			                <i class="state c-e70016" v-if="item.state == '合格'">{{item.state}}</i>
							<i class="state" v-else="">{{item.state}}</i>
			            </a>
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
				pageList:[
					{
						title:"冰鲜三文鱼",
						label:"上海丰鱼农业发展有限公司普陀分公司",
						state:"合格"
					},
					{
						title:"冰鲜三文鱼",
						label:"上海丰鱼农业发展有限公司普陀分公司",
						state:"不合格"
					},
					{
						title:"冰鲜三文鱼",
						label:"上海丰鱼农业发展有限公司普陀分公司",
						state:"合格"
					},
					{
						title:"冰鲜三文鱼",
						label:"上海丰鱼农业发展有限公司普陀分公司",
						state:"不合格"
					},
				],
				loading:false
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
