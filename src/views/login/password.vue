<template>
	<div>
		<Header></Header>
		 <section class="wb100 dis-ib conTop">
		    <div class="loginTop">
		        <p class="label">你好，欢迎加入</p>
		        <img src='/static/images/icon-16.png' class="loginImg">
		        <span @click="$router.push('/login')" class="loginHref"><img src='/static/images/icon-17.png'><em>登录</em></span>
		    </div>
		    <div class="loginList">
		        <ul :model="formData">
		            <li>
		                <input type="text" v-model="formData.oldPwd" placeholder="请输入旧密码">
		            </li>
		            <li>
		                <input type="text" v-model="formData.newPwd" placeholder="请输入新密码">
		            </li>
		            <li>
		                <input type="text" v-model="formData.surePwd" placeholder="请确认新密码">
		            </li>
		        </ul>
		    </div>
		    <div class="wb100 dis-ib tc mtb5">
		        <a @click="submit" class="BtnSmall">提交</a>
		    </div>
		</section>
	</div>
</template>

<script>
	import Header from "@/components/Header.vue";
	 export default {
		 components:{
			 Header
		 },
		 data(){
			 return{
				 formData:{
					 oldPwd:"",
					 newPwd:"",
					 surePwd:""
				 }
			 }
		 },
		 methods:{
			 submit(){
				 
			 }
		 }
	 }
</script>

<style scoped>
	/deep/ .header-title{
		background: #e70000!important;
		color: #fff;
	}
</style>
