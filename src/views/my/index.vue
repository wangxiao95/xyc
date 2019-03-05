<template>
	<div class="container">
		<Header></Header>
		<div class="marginBottom">
			<div class="headerBox clearfix">
				<img src="/static/images/user.png" class="userImg fl">
				<div class="fl">
					<p class="title">欢迎来到信用查</p>
					<p class="vipBox"><img src="/static/images/vip.png" class="vip"> <span class="vipDesc">升级为VIP</span></p>
				</div>
				<div class="login fr" @click="$router.push('/login')">登录/注册</div>
			</div>
			<ul class="indexNavBox">
				<li>
					<router-link :to="{name:'userInfo'}">
						<img src="/static/images/icon-54.png">
						<p>个人信息</p>
					</router-link>
				</li>
				<li>
					<router-link :to="{name:'editPwd'}">
						<img src="/static/images/icon-55.png">
						<p>密码设置</p>
					</router-link>
				</li>
				<!--        <li>
			        <router-link :to="{name:'home'}">
			            <img src="/static/images/icon-56.png">
			            <p>我的订单</p>
			        </router-link>
			    </li> -->
				<li>
					<router-link :to="{name:'myFocus'}">
						<img src="/static/images/icon-57.png">
						<p>我的关注</p>
					</router-link>
				</li>
				<li>
					<router-link :to="{name:'myControl'}">
						<img src="/static/images/icon-58.png">
						<p>我的监控</p>
					</router-link>
				</li>
				<li>
					<router-link :to="{name:'myCredit'}">
						<img src="/static/images/icon-59.png">
						<p>我的信用</p>
					</router-link>
				</li>
				<li>
					<router-link :to="{name:'messageCenter'}">
						<img src="/static/images/icon-60.png">
						<p>消息中心</p>
					</router-link>
				</li>
				<!-- <li>
			        <router-link :to="{name:'home'}">
			            <img src="/static/images/icon-61.png">
			            <p>发票管理</p>
			        </router-link>
			    </li> -->
				<li>
					<router-link :to="{name:'attestationList'}">
						<img src="/static/images/icon-53.png">
						<p>企业空间管理</p>
					</router-link>
				</li>
			</ul>
			<img src="/static/images/setting.png" class="setting" @click="$router.push('/setting')">
			<div class="shareBox">
				<img src="/static/images/share.png" class="share">
				<span class="share1">1</span>
				<span class="share2">2</span>
				<span class="share3">3</span>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	import Footer from "@/components/Footer.vue";
	import Header from "@/components/Header.vue"
	export default {
		components: {
			Footer,
			Header
		},
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	.headerBox {
		border-bottom: 3px solid #f3f5f7;
		margin-top: 1.3rem
	}

	.userImg {
		width: 2.3rem;
		height: 2.3rem;
		margin: .5rem
	}

	.title {
		font-weight: bold;
		color: #333;
		font-size: .62rem;
		margin-top: .6rem
	}

	.vipBox {
		margin-top: .5rem
	}

	.vip {
		width: .5rem;
	}

	.vipDesc {
		color: #ff6000
	}

	.login {
		background: #e70000;
		color: #fff;
		padding: .15rem .4rem;
		border-radius: 6%;
		margin: 1.7rem .4rem 0 0;
	}

	/*  */
	.iconItem {
		text-align: center;
		padding: .3rem;
		display: inline-block;
	}

	.icon {
		width: 1.4rem;
	}

	.iconTitle {
		display: inline-block
			/* text-align: center; */
	}

	/* -------------------------- */
	.indexNavBox {
		width: 100%;
		display: block;
		overflow: hidden;
		border-bottom: 3px solid #f3f3f3;
		background: #fff
	}

	.indexNavBox li {
		width: 25%;
		float: left;
		border-bottom: 1px solid #f3f3f3;
		text-align: center;
		height: 2.7rem;
	}

	.indexNavBox li img {
		width: .88rem;
		height: .88rem;
		margin-top: .54rem;
		margin-bottom: .05rem
	}

	.indexNavBox li p {
		color: #575757;
		font-size: .42rem
	}

	.setting {
		width: 100%;
		vertical-align: middle
	}

	.iconfont {
		font-size: .6rem
	}

	.shareBox {
		background: #f0f1f5;
		position: relative;
	}

	.share1 {
		position: absolute;
		display: inline-block;
		top: 1.85rem;
		left: 3rem;
		width: 1.2rem;
		height: 1.2rem;
	}

	.shareBox span {
		opacity: 0;
	}

	.share2 {
		position: absolute;
		display: inline-block;
		top: 1.85rem;
		left: 5.4rem;
		width: 1.2rem;
		height: 1.2rem;
	}

	.share3 {
		position: absolute;
		display: inline-block;
		top: 1.85rem;
		left: 7.9rem;
		width: 1.2rem;
		height: 1.2rem;
	}

	.share {
		width: 100%
	}
</style>
