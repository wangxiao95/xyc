<template>
	<div>
		<Header></Header>
		<div class="userList marginTop" v-if="isA">
			<ul :model="formData">
				<li class="clearfix">
					<span>姓名：</span>
					<input type="text" v-model="formData.name">
				</li>
				<li class="clearfix">
					<span>身份证号：</span>
					<input type="text" v-model="formData.idCard">
				</li>
			</ul>
			<div class="tc">
				<van-button class="submit tc">立即认证</van-button>
			</div>
		</div>
		<div class="tc" v-else-if="isA == '2'">
			<img src="/static/images/noA.png" alt="" class="isA">
			<div class="statusAll status">您还没有认证</div>
			<van-button class="submit" @click="$router.back()">立即认证</van-button>    
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
			return {
				formData: {
					name: "",
					idCard: ""
				},
				isA: "2"
			}
		},
		methods: {},
		created() {}
	}
</script>

<style scoped>
	.userList li {
		margin: .3rem .6rem;
		font-size: .48rem;
	}

	.userList {
		margin-top: 3rem;
	}

	.userList li span {
		float: left;
		display: inline-block;
		line-height: .9rem;
		width: 2.4rem;
		text-align: left;
		margin-right: .3rem
	}

	.userList li input {
		height: .9rem;
		width: 7.4rem;
		float: left;
		overflow: hidden;
		line-height: .7rem;
		font-size: .44rem;
		color: #383838;
		font-family: inherit;
		margin: 0;
		padding: 0 .15rem;
		border: 1px solid #ccc;
	}

	.userList li input:focus {
		border-color: #409eff
	}

	.title {
		font-weight: bold;
		font-size: .5rem
	}

	/deep/ .van-radio-group {
		display: flex;
		justify-content: space-around
	}

	/deep/ .van-button {
		width: 4.6rem;
		margin-top: 1rem;
	}

	.desc {
		color: #f00;
		padding: .2rem 1rem
	}

	.submit {
		background: #e70016;
		color: #fff;
		border: 8%;
		width: 60%;
		margin: 1.5rem auto;
		font-size: .5rem;
	}
	.isA{
	    width: 50%;
	    margin-top: 2rem;
	}
	.statusAll{
	    font-size: .5rem;
	    font-family: "Microsoft YaHei";
	}
	.status{
	    color: rgb( 49, 49, 49 );
	    margin-top: .4rem;
	}
	.company{
	    color: rgb( 153, 153, 153 );
	    margin-top: .2rem
	}
</style>
