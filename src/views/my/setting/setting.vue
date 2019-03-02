<template>
	<div>
		<Header></Header>
        <div>
            <section class="wb100 dis-ib conTop">
        <div class="setTop">
            <img src="/static/images/g-08.png">
            <p>v1.0.0</p>
        </div>
        <ul class="setList">
            <li class="version"><a href="javascript:;">版本更新</a></li>
            <li><a href="about.asp">关于信用查</a></li>
            <li class="cache"><a href="javascript:;">清除缓存<em class="right">100KB</em></a></li>
            <li><a @click="$router.push('/feedback')">意见反馈</a></li>
        </ul>
        <div class="buttonBIg buttonBIgWidth">
            <a href="login.asp">退出登录</a>
        </div>
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
			return {}
		},
		methods:{},
		created(){}
	}
</script>

<style scoped>
	
</style>
