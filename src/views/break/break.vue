<template>
	<div>
		<Header></Header>
        <section class="wb100 dis-ib conTop conBottom">
        <ul class="shopInspectForm">
            <li class="ListAfter"><span class="inName">选择高级法院</span><em class="inInput">请选择</em></li>
            <li class="ListAfter"><span class="inName">选择中级法院</span><em class="inInput">请选择</em></li>
            <li class="ListAfter"><span class="inName">选择低级法院</span><em class="inInput">请选择</em></li>
            <li><span class="inName">被执行人姓名/名称</span><input type="text" class="inInput wb50" placeholder="请输入"></li>
            <li><span class="inName">身份证/组织机构代码</span><input type="text" class="inInput wb50" placeholder="请输入"></li>
        </ul>
        <div class="buttonBIg buttonBIgWidth">
            <a href="breakList.asp">查询</a>
        </div>
    </section>
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
