<template>
	<div>
		<footer class="footer">
			<router-link to="/creditZM" class="tab-item" :class="{active:$route.name === 'creditZM'}">
				<span class="iconfont footProve"></span>
				<p>信用证明</p>
			</router-link>
			<router-link to="/credit" class="tab-item" :class="{active:$route.name === 'credit'}">
				 <span class="iconfont footReport"></span>
				<p>信用报告</p>
			</router-link>
			<router-link to="/myFocus" class="tab-item" :class="{active:$route.name === 'myFocus'}">
				 <span class="iconfont footFollow"></span>
				<p>关注</p>
			</router-link>
			<router-link to="/myControl" class="tab-item" :class="{active:$route.name === 'myControl'}">
				 <span class="iconfont footMonitor"></span>
				<p>监控</p>
			</router-link>		
		</footer>
	</div>
</template>

<script>
	
</script>

<style >
	/*底部菜单*/
	.footer{ width: 100%; position: fixed; bottom: 0; left: 0; background: #fff; box-shadow: 0px 0px 5px #eee; height:1.6rem; z-index: 20;}
	.footer a{ width: 25%; float: left; text-align: center; color: #ccc;}
	.footer a span{ font-size:.7rem; position:relative; width: 100%; display: inline-block; float: left; padding-top: .11rem; height: .73rem; margin: .12rem 0 .05rem; }
	.footer a p{ font-size:.32rem;color:#888;float:left; width:100%;}
	.footer a.active{ color:#cb0013}
	.footer a.active p{ color:#cb0013}
	.footer a .footProve{ background: url(/static/images/foot-1.png) center center no-repeat;background-size:.62rem;}
	.footer a.active .footProve{background: url(/static/images/foot-1xz.png) center center no-repeat;background-size: .62rem;}
	.footer a .footReport{ background: url(/static/images/foot-2.png) center center no-repeat;background-size: .62rem;}
	.footer a.active .footReport{background: url(/static/images/foot-2xz.png) center center no-repeat;background-size: .62rem;}
	.footer a .footFollow{ background: url(/static/images/foot-3.png) center center no-repeat;background-size: .62rem;}
	.footer a.active .footFollow{background: url(/static/images/foot-3xz.png) center center no-repeat;background-size: .62rem;}
	.footer a .footMonitor{ background: url(/static/images/foot-4.png) center center no-repeat;background-size: .62rem;}
	.footer a.active .footMonitor{background: url(/static/images/foot-4xz.png) center center no-repeat;background-size: .62rem;}
	
	.footer a .footHome{ background: url(/static/images/foot-5.png) center center no-repeat;background-size:.62rem;}
	.footer a.active .footHome{background: url(/static/images/foot-5xz.png) center center no-repeat;background-size: .62rem;}
	.footer a .footTestify{ background: url(/static/images/foot-6.png) center center no-repeat;background-size: .62rem;}
	.footer a.active .footTestify{background: url(/static/images/foot-6xz.png) center center no-repeat;background-size: .62rem;}
	.footer a .footHeadlines{ background: url(/static/images/foot-7.png) center center no-repeat;background-size: .62rem;}
	.footer a.active .footHeadlines{background: url(/static/images/foot-7xz.png) center center no-repeat;background-size: .62rem;}
	.footer a .footMy{ background: url(/static/images/foot-8.png) center center no-repeat;background-size: .62rem;}
	.footer a.active .footMy{background: url(/static/images/foot-8xz.png) center center no-repeat;background-size: .62rem;}
</style>
