<template>
	<div>
		<Header></Header>
		<div>
			 <section class="wb100 dis-ib conTop">
			    <ul class="inspectList" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading">
			        <li v-for="(item,index) in pageList" :key="index">
			            <div @click="$router.push('/drug/drugDetails')">
			                <h5 class="title">{{item.title}}</h5>
			                <p class="label">{{item.label}}</p>
			                <p class="label">{{item.company}}</p>
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
				pageList:[
					{
						title:"维生素E、C颗粒(86901268000415)",
						label:"国药准字H21023781",
						company:"辽宁美大康华邦药业有限公司"
					},
					{
						title:"维生素E、C颗粒(86901268000415)",
						label:"国药准字H21023781",
						company:"辽宁美大康华邦药业有限公司"
					},
				],
				loading:false
				
			}
		},
		methods:{
			loadMore:{
				
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
