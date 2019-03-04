<template>
	<div>
		<section class="wb100 dis-ib conBottom">
			<div class="indexTop" @click="$router.push('/searchList')">
				<img src="/static/images/bg-02.jpg">
				<div class="indexSearch">
					<i class="iconfont">&#xe63b;</i>
					<em>企业名称、信用代码、姓名等</em>
				</div>
			</div>
			<div class="Unveiled indexUnveiled">
				<span class="UnveiledName"><img src="/static/images/icon-42.png"><em>风险预警</em></span>
				<div class="Unveiledscroll">
					<div class="bd">
						<ul>
							<!-- <li><span>北京丰阳科技有限公司破产了</span><em>2019-02-16</em></li>
                        <li><span>北京丰阳科技有限公司破产了</span><em>2019-02-16</em></li> -->
							<li><span>北京丰阳科技有限公司破产了</span><em>2019-02-16</em></li>
						</ul>
					</div>
				</div>
				<!--       <script type="text/javascript">
                jQuery(".Unveiledscroll").slide({ titCell: ".hd ul", mainCell: ".bd ul", autoPage: true, effect: "top", autoPlay: true, vis: 1 });
            </script> -->
			</div>
			<ul class="indexNav">
				<li @click="$router.push({name: 'searchList', query: {type: 'GS'}})">
					<a href="javascript:;">
						<img src="/static/images/icon-43.png">
						<p>工商企业</p>
					</a>
				</li>
				<li @click="$router.push({name: 'searchList', query: {type: 'GJ'}})">
					<a href="javascript:;">
						<img src="/static/images/icon-44.png">
						<p>国家机关</p>
					</a>
				</li>
				<li @click="$router.push({name: 'searchList', query: {type: 'SY'}})">
					<a href="javascript:;">
						<img src="/static/images/icon-45.png">
						<p>事业单位</p>
					</a>
				</li>
				<li @click="$router.push({name: 'searchList', query: {type: 'SH'}})">
					<a href="javascript:;">
						<img src="/static/images/icon-46.png">
						<p>社会团队</p>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<img src="/static/images/icon-47.png">
						<p>人行征信</p>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<img src="/static/images/icon-48.png">
						<p>五险一金</p>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<img src="/static/images/icon-49.png">
						<p>学历验证</p>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<img src="/static/images/icon-50.png">
						<p>身份验证</p>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<img src="/static/images/icon-51.png">
						<p>全部</p>
					</a>
				</li>
			</ul>
			<div class="indexHeadlines">
				<h5 class="HeadlinesTitle">信用头条</h5>
				<ul class="HeadlinesList" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading">
					<li class="itemR" v-for="(item,index) in pageList" :key="index">
						<a @click="$router.push('/creditDetail')" class="HeadlinesListItem">
							<div class="photo fl mrb3"><img :src="item.img"></div>
							<h5 class="title">{{item.title}}</h5>
							<p class="info">{{item.info}}</p>
							<div class="bottom">
								<span class="time">{{item.time}}</span>
								<span class="number"><i class="iconfont">&#xe612;</i><em>{{item.lookNum}}人阅读</em></span>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</section>

		<Footer></Footer>
	</div>
</template>

<script>
	import Footer from "@/components/Footer.vue";
	// import Header from "@/components/Header.vue"
	export default {
		components: {
			Footer
		},
		data() {
			return {
				pageList: [
					{
					title: "陆股通大胆抄底 多家公司信用评级被下调",
					info: "陆股通一季度新进116家上市公司前十大流通股东陆股通一季度新进116家上市公司的前十大流通股东...",
					time: "2019-02-01",
					lookNum: "168",
					img: "/static/images/pic-3.jpg"
				},
				{
					title: "陆股通大胆抄底 多家公司信用评级被下调",
					info: "陆股通一季度新进116家上市公司前十大流通股东陆股通一季度新进116家上市公司的前十大流通股东...",
					time: "2019-02-01",
					lookNum: "168",
					img: "/static/images/pic-3.jpg"
				},
				{
					title: "陆股通大胆抄底 多家公司信用评级被下调",
					info: "陆股通一季度新进116家上市公司前十大流通股东陆股通一季度新进116家上市公司的前十大流通股东...",
					time: "2019-02-01",
					lookNum: "168",
					img: "/static/images/pic-3.jpg"
				},
				{
					title: "陆股通大胆抄底 多家公司信用评级被下调",
					info: "陆股通一季度新进116家上市公司前十大流通股东陆股通一季度新进116家上市公司的前十大流通股东...",
					time: "2019-02-01",
					lookNum: "168",
					img: "/static/images/pic-3.jpg"
				},

				],
				loading:false,
				name:"刘刚121123"
			}
		},
		methods:{
			loadMore(){

			},
			getData(){
				this.$axios.post(`qst_entfind_djg/select`,{params:{q: `ENTNAME:济南奥凯机械制造有限公司 PRIPID:0100200109608`,'indent':'true','wt':'json'}}).then(res=>{
					console.log("qst_entfind_new",res)
				})
			}
		},
		created(){
			this.getData()
		}
	}
</script>

<style>
</style>
