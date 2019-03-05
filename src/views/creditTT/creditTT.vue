<template>
	<div class="container">
		<Header></Header>
		 <div class="swiper">
                <swiper v-if="banner.length > 0" :options="swiperOption">
                    <swiper-slide v-for="(item,index) in banner" :key="index">
                        <!-- <router-link :to="{name:'newsDetail',params:{id:item.url}}"> -->
                        <div>
                            <img :src="item.img" class="swiperImg">
                            <!-- <span class="swiper-title">{{item.title}}</span> -->
                        </div>
                        <!-- </router-link> -->
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <!-- <div class="swiper-button-prev" slot="button-prev">  </div>
                    <div class="swiper-button-next" slot="button-next">  </div> -->
                </swiper>
				<ul class="HeadlinesList" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading">
					<li class="itemR" v-for="(item,index) in pageList" :key="index">
						<a @click="$router.push('/creditDetail')" class="HeadlinesListItem">
							<div class="photo fr mrb3"><img :src="item.img"></div>
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
			<Footer></Footer>
	</div>
</template>

<script>
	import Header from "@/components/Header"
	import Footer from "@/components/Footer"
	import "swiper/dist/css/swiper.css";
    import { swiper, swiperSlide } from "vue-awesome-swiper";
	export default {
		components: {
			Header,
			Footer,
			swiper,
            swiperSlide
		},
		data() {
			return {
				banner:[
					{
					img:"/static/images/tt.png",
				},
				{
					img:"/static/images/tt.png",
				},
				{
					img:"/static/images/tt.png",
				},
				],
				 swiperOption: {
                    // 显示分页
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true
                    },
                    waitForTransition: true,
                    // 设置自动播放速度
                    autoplay: {
                        disableOnInteraction: false,
                        delay: 2000
                    },
                    // 开启无限循环
                    loop: true,
                    //设置点击箭头
                    paginationClickable: true,
                    prevButton: ".swiper-button-prev",
                    nextButton: ".swiper-button-next",
                    //设置同屏显示的数量，默认为1，使用auto是随意的意思。
                    slidesPerView: 1,
                    //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。
                    mousewheel: false,
                    //默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
                    // freeMode:true,
                    on: {
                        // click() {
                        //     const realIndex = this.realIndex
                        //     vm.toSwiper(realIndex)
                        // }
                    }
				},
				pageList: [
					{
						title: "陆股通大胆抄底 多家公司信用评级被下调",
						info: "陆股通一季度新进116家上市公司前十大流通股东陆股通一季度新进116家上市公司的前十大流通股东...",
						time: "2019-02-01",
						lookNum: "168",
						img: "/static/images/pic-3.jpg"
					},
					{
						title: "京东数科推出个人信用租赁平台”京小租” 小白信用与新华信用达成战略合作",
						info: "当下,信用租赁已成为社会零售新趋势。但租赁行业仍面临...",
						time: "2019-02-01",
						lookNum: "168",
						img: "http://www.cs.com.cn/xgjj/xxzs/xhsmzpp/4/201903/W020190301721596502327.jpg"
					},
					{
						title: "信用大数据破局融资难题 助力民营经济高速发展",
						info: "本次论坛旨为更好的支撑全国科技创新中心建设，鼓励金融业在民营企业、实体经济、高精尖产业等方面所做的服务创新工作...",
						time: "2019-02-01",
						lookNum: "168",
						img: "http://bj.people.com.cn/NMediaFile/2019/0301/LOCAL201903011712000411866838719.jpg"
					},
					{
						title: "捷信：营造放心消费环境，推进消费信用体系建设",
						info: "现代市场经济从一定意义上来讲是一种信用经济，捷信认识到对金融行业来讲，信用更是维系这个行业发展的基础...",
						time: "2019-02-01",
						lookNum: "168",
						img: "http://hd.jsrdzg.cn/uploads/allimg/190301/1-1Z3011K131K9.png"
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
	.swiper{
		margin-top: 1.5rem;
		margin-bottom: 1.6rem;
	}
	.swiperImg{
		width: 100%;
	}
	.photo{
		margin-left: .5rem
	}
</style>
