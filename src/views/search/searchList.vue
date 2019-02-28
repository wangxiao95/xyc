<template>
	<div>
		<header class="mui-bar mui-bar-nav header">
		    <a @click="$router.back()" class="iconfont headerIco headLeft">&#xe792;</a>
		    <div class="headerSerach headerSerachCenter2">
		        <input type="search" class="headerSerachText" placeholder="企业名称、信用代码、姓名等">
		        <button class="headerSerachBtn"></button>
		    </div>
		</header>
		
		<section class="wb100 dis-ib conTop conBottom">
			<div class="hotSearch">
				<a href="javascript:;" class="hotSearchTit">最近搜索</a>
				<div class="hotSearchList">
					<a href="javascript:;">小米科技公司</a>
					<a href="javascript:;">腾讯科技</a>
				</div>
			</div>
			
			<div class="hotSearch">
				<a href="javascript:;" class="hotSearchTit">浏览历史</a>
				<div class="hotSearchHistory">
					<a href="javascript:;">小米科技公司</a>
					<a href="javascript:;">腾讯科技</a>
				</div>
			</div>
				
				
		</section>
	</div>
</template>

<script>
</script>

<style>
</style>
