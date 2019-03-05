<template>
	<div>
		<header class="mui-bar mui-bar-nav header">
			<a @click="$router.back()" class="iconfont headerIco headLeft">&#xe792;</a>
			<div class="headerSerach headerSerachCenter" @click="$router.push('/searchList')">
				<input type="search" @click="$router.push('/searchList')" class="headerSerachText" placeholder="腾讯科技">
				<button class="headerSerachBtn"></button>
			</div>
			<a class="iconfont headerIco headRight headRightText">排序</a>
		</header>
		<div class="screenHead">
			<span class="label provinces" @click="citySearch">
				<em>省份地区</em>
				<i class="iconfont">&#xe628;</i>
			</span>
			<span class="label guild">
				<em>行业分类</em>
				<i class="iconfont">&#xe628;</i>
			</span>
			<span class="label moreScreen" @click="search">
				<em>更多筛选</em>
				<i class="iconfont">&#xe628;</i>
			</span>
		</div>
		<!-- <van-popup v-model="moreSearch" position="bottom" :overlay="false">

		</van-popup> -->
		<mt-popup v-model="moreSearch" position="top">
			<header class="mui-bar mui-bar-nav header">
				<a @click="$router.back()" class="iconfont headerIco headLeft">&#xe792;</a>
				<div class="headerSerach headerSerachCenter" @click="$router.push('/searchList')">
					<input type="search" @click="$router.push('/searchList')" class="headerSerachText" placeholder="腾讯科技">
					<button class="headerSerachBtn"></button>
				</div>
				<a class="iconfont headerIco headRight headRightText">排序</a>
			</header>
			<div class="screenHead">
				<span class="label provinces" @click="citySearch">
					<em>省份地区</em>
					<i class="iconfont">&#xe628;</i>
				</span>
				<span class="label guild">
					<em>行业分类</em>
					<i class="iconfont">&#xe628;</i>
				</span>
				<span class="label moreScreen" @click="search">
					<em>更多筛选</em>
					<i class="iconfont">&#xe628;</i>
				</span>
			</div>
			<div class="searchLayer">
				<ul class="moreScreenList">
					<li>
						<h5 class="title">企业状态：
							<em class="arrow"></em>
						</h5>
						<div class="label">
							<!-- :class="{active:item.checked}" -->
							<span v-for="(status,index) in statusList" :key="index">{{status}}</span>
						</div>
					</li>
					<li>
						<h5 class="title">注册资本：
							<em class="arrow"></em>
						</h5>
						<div class="label">
							<span v-for="(money,moneyIndex) in moneyList" :key="moneyIndex">{{money}}</span>
						</div>
					</li>
					<li>
						<h5 class="title">成立年限：
							<em class="arrow"></em>
						</h5>
						<div class="label">
							<span v-for="(year,yearIndex) in yearList" :key="yearIndex">{{year}}</span>

						</div>
					</li>
					<li>
						<h5 class="title">信用分：
							<em class="arrow"></em>
						</h5>
						<div class="label">
							<span v-for="(score,scoreIndex) in scoreList" :key="scoreIndex">{{score}}</span>
						</div>
					</li>
					<div v-if="isVip">
						<li>
							<h5 class="title">税务信用等级(VIP 特权)：
								<em class="arrow"></em>
							</h5>
							<div class="label">
								<span v-for="(level,levelIndex) in levelList" :key="levelIndex">{{level}}</span>
							</div>
						</li>
						<li>
							<h5 class="title">联系电话(VIP 特权)：
								<em class="arrow"></em>
							</h5>
							<div class="label">
								<span v-for="(item,itemIndex) in ItemList" :key="itemIndex">{{item}}</span>
							</div>
						</li>
						<li>
							<h5 class="title">联系邮箱(VIP 特权)：
								<em class="arrow"></em>
							</h5>
							<div class="label">
								<span v-for="(item,itemIndex) in ItemList" :key="itemIndex">{{item}}</span>
							</div>
						</li>
						<li>
							<h5 class="title">商标信息(VIP 特权)：
								<em class="arrow"></em>
							</h5>
							<div class="label">
								<span v-for="(item,itemIndex) in ItemList" :key="itemIndex">{{item}}</span>

							</div>
						</li>
						<li>
							<h5 class="title">专利信息(VIP 特权)：
								<em class="arrow"></em>
							</h5>
							<div class="label">
								<span v-for="(item,itemIndex) in ItemList" :key="itemIndex">{{item}}</span>
							</div>
						</li>
						<li>
							<h5 class="title">著作权(VIP 特权)：
								<em class="arrow"></em>
							</h5>
							<div class="label">
								<span v-for="(item,itemIndex) in ItemList" :key="itemIndex">{{item}}</span>
							</div>
						</li>
						<li>
							<h5 class="title">失信信息(VIP 特权)：
								<em class="arrow"></em>
							</h5>
							<div class="label">
								<span v-for="(item,itemIndex) in ItemList" :key="itemIndex">{{item}}</span>
							</div>
						</li>
					</div>
				</ul>
				<div class="vipTip">
					<a href="javascript:;">开通VIP</a> 更多筛选特权</div>
				<div class="buttonBIg buttonBIgTwo">
					<a @click="remove" class="fl shallow" id="productBtn">重置</a>
					<a @click="submit" class="fr" id="nodesBtn">确定</a>
				</div>
			</div>
		</mt-popup>
		<div class="statisticsResult">为你找到
			<i class="c-e70016">1258</i>家公司
			<!--<a href="JavaScript:;" class="batch">批量导出</a>-->
		</div>
		<div class="scroller-box" :style="scrollerStyle">
			<!--:on-refresh="refresh"-->
			<!--:on-infinite="infinite"-->
			<scroller :onInfinite="loadMore" ref="myscroller">
				<div class="pageListBox" v-for="(item,index) in pageList" :key="index">
          <div @click="$router.push({name: 'company', params: item})">
          <div class="searchListTop">
							<div class="photo">
								<img src="/static/images/logo/logo3.png">
							</div>
							<h5 class="title">{{item.ENTNAME}}</h5>
							<div class="info" v-if="look">
								<span>信用查认证</span>
								<em>98分</em>
							</div>
							<span class="label">{{item.label}}</span>
						</div>
						<div class="searchListBottom">
							<span class="labelList">
								<em>法定代表人</em>
								<i class="c-e70016" v-if="item.NAME">{{item.NAME}}</i>
								<i v-else>---</i>
							</span>
							<span class="labelList">
								<em>注册资本</em>
								<i v-if="item.REGCAP">{{item.REGCAP}}</i>
								<i v-else>---</i>
							</span>
							<span class="labelList">
								<em>成立日期</em>
								<i v-if="item.REGCAP">{{item.ESDATE}}</i>
								<i v-else>---</i>
							</span>
						</div>
					</div>
				</div>
				<!--</van-list>-->

			</scroller>

    </div>
    <!--<div id="searchList" class="mui-scroll-wrapper mui-active searchListMargin">-->
      <!--<div class="">-->
          <!--<ul class=" ">-->

          <!--</ul>-->
      <!--</div>-->
  <!--</div> -->
		<!--省份地区-->
		<div v-show="cityToggle" class="searchLayerCon provincesLayer">
			<div class="layerBack"></div>
			<div class="searchLayer">
				<div class="leftOne">
					<ul>
						<li v-for="province in cityData" @click="selectCity('province', province.sub, province.name)" :class="{active: selectedprovince == province.name}">{{province.name}}</li>
					</ul>
				</div>
				<div class="leftTwo">
					<ul>
						<li v-for="city in province" @click="selectCity('city', city.sub, city.name)" :class="{active: selectedcity == city.name}">{{city.name}}</li>
					</ul>
				</div>
				<div class="leftThree">
					<ul>
						<li v-for="area in city" @click="selectCity('area', area.name, area.name)" :class="{active: selectedarea == city.name}">{{area.name}}</li>
					</ul>
				</div>
			</div>
		</div>
		<!--end-->
		<!--行业分类-->
		<!-- <div class="searchLayerCon guildLayer">
		    <div class="layerBack"></div>
		    <div class="searchLayer">
		        <div class="leftOne">
		            <ul>
		                <li>全部行业</li>
		                <li>采矿业</li>
		                <li>制造业</li>
		            </ul>
		        </div>
		        <div class="leftTwo">
		            <ul>
		                <li>全部行业</li>
		                <li>房屋建筑业</li>
		                <li>土木工程建筑业</li>
		                <li>建筑安装业</li>
		            </ul>
		        </div>
		    </div>
		</div> -->
		<!--end-->
		<!--更多筛选-->
		<!-- <div class="searchLayerCon moreScreenLayer"> -->
	</div>
</template>

<script>
	import Header from "@/components/Header.vue";
	import {
		Popup,
		InfiniteScroll,
		loading
	} from 'mint-ui';
	import Vue from 'vue'
	import vueScroller from 'vue-scroller'
	Vue.use(vueScroller)
	import $ from 'jquery'
	window.$ = $;

	// import { Popup } from 'vant';
	import {
		city
	} from './city.js'
	export default {
		components: {
			Header
		},
		data() {
			return {
              cityData: city, //城市级联数据
              kw: this.$route.query.kw, //搜索页面传的关键字
              cityToggle: false,
              scrollerHeight: 0, //scroller高度
              province: [],
              city: [],
              area: [],
              selectedprovince: '',
              selectedcity: '',
              selectedarea: '',
              pageList: [{
                  title: "腾讯科技（上海）有限公司",
                  label: "在业",
                  low1: "奚丹",
                  low2: "500万美元",
                  low3: "2008-07-23",
                  img: "/static/images/logo/logo-1.png"
              }, ],
              statusList: ["不限", "在营", "吊销", "迁出"],
              moneyList: ["不限", "0-100万", "100-200万", "500-1000万", "200-500万", "1000万以上"],
              yearList: ["不限", "1年内", "1-5年", "15年以上"],
              scoreList: ["不限", "60分以下", "60-70分", "85分以上"],
              levelList: ["不限", "A", "B", "M", "C", "D"],
              ItemList: ["不限", "有", "无"],
              loading: false,
              moreSearch: false,
              isVip: false,
              look:true
			}
		},
    computed: {
      scrollerStyle() {
        return {
          height: `${this.scrollerHeight}px`
        };
      }
    },
		methods: {
			loadMore() {
				this.loading = true;
				this.getData((res) => {
					this.pageList.push(res.response.docs);
					console.log(this.pageList);
				})
			},
			getData(fn) {
				this.$axios.post(`ENTERPRISEBASEINFOCOLLECT1/select`, {
					params: {
						'q': '*',
						'indent': 'true',
						'wt': 'json'
					}
				}).then(res => {
					// this.$axios.post(`/solr/qst_entfind_djg/select`,{params:{'q':'*','indent':'true','wt':'json'}}).then(res=>{
					fn && fn(res);
				})
			},
      citySearch() {
        this.cityToggle = !this.cityToggle;
      },
			search() {
				this.moreSearch = !this.moreSearch
				console.log("!11")
			},
			remove() {
				this.moreSearch = false
			},
			submit() {
				this.moreSearch = false
			},
      selectCity(type, obj, text) {
        console.log(type, obj, text)
        this[type] = obj;
        this[`selected${type}`] = text;
      },
		},
		created() {
			this.getData((res) => {
        this.pageList = res.response.docs
      });
    },
    mounted() {
		  let height = $(window).height();
		  let fontSize = parseFloat($('html')[0].style.fontSize);
      this.scrollerHeight = height - fontSize * 3.6
    }
	}
</script>

<style scoped>
	.listBox {
		margin-top: 3.6rem;
	}

	/deep/ .mint-popup-top {
		width: 100%;
		height: 10rem;
	}
	.pageListBox{
		/* border-bottom: .2rem solid #f3f5f7 */
		    width: 100%;
    display: block;
    background: #fff;
    margin-bottom: .2rem;
    overflow: hidden;
	}
  .scroller-box{
    position: relative;
    width: 100%;
    top: 3.6rem;
  }
</style>
