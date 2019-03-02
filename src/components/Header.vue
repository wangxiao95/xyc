<template>
    <div class="header">
        <mt-header :title="title" fixed class="header-title">
			<span slot="left" @click="$router.back()"><i class="iconfont">&#xe792;</i></span>
        </mt-header>
    </div>
</template>
<script>
	import {Header} from "mint-ui"
    export default {
        computed:{
            title(){
                return this.$route.meta.title
            }
        }
    }
</script>

<style>
	.header-title{
		background: #fff!important;
		color: #333;
		height: 1.5rem;
		font-size: .6rem;
        z-index: 999;
        border-bottom: 1px solid #f5f5f5;
	}
</style>