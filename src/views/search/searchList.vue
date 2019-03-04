<template>
	<div>
		<header class="mui-bar mui-bar-nav header">
		    <a @click="$router.back()" class="iconfont headerIco headLeft">&#xe792;</a>
		    <div class="headerSerach headerSerachCenter2">
		        <input type="search" class="headerSerachText" placeholder="企业名称、信用代码、姓名等">
		        <button class="headerSerachBtn" @click="$router.push('/search')"></button>
		    </div>
		</header>

		<section class="wb100 dis-ib conTop conBottom">
			<div class="hotSearch">
				<a href="javascript:;" class="hotSearchTit">最近搜索</a>
				<div class="hotSearchList">
					<a v-for="item in searchHistory" v-if="item.type == searchType || !searchType" @click="$router.push({name: 'search', query: {kw: item.text}})">{{item.text}}</a>
					<!--<a @click="$router.push('/search')">腾讯科技</a>-->
				</div>
			</div>

			<div class="hotSearch">
				<a href="javascript:;" class="hotSearchTit">浏览历史</a>
				<div class="hotSearchHistory">
					<a @click="$router.push('/search')">小米科技公司</a>
					<a @click="$router.push('/search')">腾讯科技</a>
				</div>
			</div>


		</section>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        //搜索历史
        searchHistory: [
          {text: 'test工商', type: 'GS'},
          {text: 'test国家', type: 'GJ'},
          {text: 'test事业', type: 'SY'},
          {text: 'test社会', type: 'SH'},
        ],
        searchType: this.$route.query.type
      }
    }
  }
</script>

<style>
</style>
