<template>
	<div>
		<!-- <Header></Header> -->
		<header class="header">
			<a class="iconfont headerIco headLeft" @click="$router.back()">&#xe792;</a>
			<h1 class="mui-title headTit headTitLabel">
				<a href="javascript:;" @click="$router.push('/company')">企业</a>
				<img src="/static/images/icon-25.png">
				<a href="javascript:;" class="acticve" @click="$router.push('/space')">空间</a>
			</h1>
			<a class="iconfont headerIco headRight headRightImg" href="javascript:;"><img src="/static/images/icon-21.png"></a>
		</header>
		 <section class="wb100 dis-ib conTop conBottom">
		    <div class="companyTop spaceTop">
		        <img src="/static/images/bg-03.jpg" class="wb100 fl">
		        <div class="content">
					<div class="tc mtb5"><img class="spacelogo" src="/static/images/logo/logo.png"></div>
		            <div class="title">
		                
		                <em>腾讯科技（上海）有限公司</em>
		            </div>
		            <div class="claim" v-if="isA">
		                <span><img src="/static/images/icon-1.png"></span>
		                <p class="claimCon">认领</p>
		            </div>
					<div class="claim" v-else @click="$router.push('/attestation')">
					    <!-- <span><img src="/static/images/icon-1.png"></span> -->
					    <p class="claimCon">认领企业</p>
					</div>
		        </div>
		    </div>
		    <div class="companyWrap spaceDetails">
		        <h3 class="companyTitle">公司简介</h3>
		        <div class="spaceDetailsCon">
		            <p class="content">腾讯科技（上海）有限公司办公室地址位于中国大城市，魔都上海，上海 上海市徐汇区虹梅路1801号C区五层，于2008年07月23日在上海市工商行政管理局注册成立，注册资本为500万美元计..</p>
		            <div class="spaceOpen">展开详情</div>
		        </div>
		        <div class="spaceNull spaceNullBg">暂无</div>
		    </div>
		    <ul class="spaceDetailsList">
		        <li>
		            <img src="/static/images/icon-22.png">010-88887766
		        </li>
		        <li>
		            <img src="/static/images/icon-23.png">slkdjf@qq.com
		        </li>
		        <li>
		            <img src="/static/images/g-01.png">www.baidu.com
		        </li>
		        <li>
		            <img src="/static/images/icon-24.png">北京市海淀区大钟寺路CC大厦D栋7-1-2202
		        </li>
		    </ul>
		    <div class="companyWrap spaceDetails mt2">
		        <h3 class="companyTitle">产品/服务</h3>
		        <ul class="institutionList spaceInstitution">
		            <li>
		                <a href="javascript:;">
		                    <div class="left">
		                        <img src="/static/images/g-02.png">
		                    </div>
		                    <div class="center">
		                        <p class="name">淘宝APP</p>
		                        <p>6354128796534515478</p>
		                    </div>
		                </a>
		            </li>
		            <li>
		                <a href="javascript:;">
		                    <div class="left">
		                        <img src="/static/images/g-03.png">
		                    </div>
		                    <div class="center">
		                        <p class="name">支付宝</p>
		                        <p>6354128796534515478</p>
		                    </div>
		                </a>
		            </li>
		        </ul>
		        <div class="spaceNull">暂无</div>
		    </div>
		    <div class="companyWrap spaceDetails mt2">
		        <h3 class="companyTitle">荣誉资质</h3>
		        <div class="spaceScorll">
		            <ul>
		                <li><a href="javascript:;"><img src="/static/images/pic-4.jpg"><p>高薪企业证书</p></a></li>
		                <li><a href="javascript:;"><img src="/static/images/pic-5.jpg"><p>高薪企业证书</p></a></li>
		                <li><a href="javascript:;"><img src="/static/images/pic-4.jpg"><p>高薪企业证书</p></a></li>
		                <li><a href="javascript:;"><img src="/static/images/pic-5.jpg"><p>高薪企业证书</p></a></li>
		            </ul>
		        </div>
		        <div class="spaceNull">暂无</div>
		    </div>
		    <div class="companyWrap spaceDetails mt2">
		        <h3 class="companyTitle">企业公告</h3>
		        <ul class="spaceNoticeList">
		            <li>
		                <a href="javascript:;">
		                    <p class="time">2019年02月20日</p>
		                    <h5 class="title">个人信用报告怎么查?“不良信息”在哪儿看?</h5>
		                </a>
		            </li>
		            <li>
		                <a href="javascript:;">
		                    <p class="time">2019年02月20日</p>
		                    <h5 class="title">个人信用报告怎么查个人信用报告怎么查个人信用报告怎么查?“不良信息”在哪儿看?</h5>
		                </a>
		            </li>
		        </ul>
		        <div class="spaceNull">暂无</div>
		    </div>
		</section>
		<a @click="$router.push('/disclaimer')" class="spaceFoot">免责声明</a>

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
				isA:false
			}
		},
		methods: {},
		created() {}
	}
</script>

<style scoped>
	.spacelogo{
		width: .8rem;;
	}
</style>
