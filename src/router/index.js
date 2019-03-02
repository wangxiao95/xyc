import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const router = new Router({
	routes: [{
			path: '/',
			redirect: "/home",
		},
		// 		 {
		//       path: "/",
		//       redirect: "/home"
		//     },
		//     {
		//       path: '/home',
		//       name: 'home',
		//       component: home
		//     },
		{
			path: '/home',
			name: 'home',
			component: () => import("@/views/home/index.vue"),
			meta: {
				title: "首页"
			}
		},
		{
			path: '/creditZM',
			name: 'creditZM',
			component: () => import("@/views/creditZM/creditZM.vue"),
			meta: {
				title: "信用证明"
			}
		},
		{
			path: '/creditTT',
			name: 'creditTT',
			component: () => import("@/views/creditTT/creditTT.vue"),
			meta: {
				title: "信用头条"
			}
		},
		{
			path: '/my',
			name: 'my',
			// redirect: "/login",
			component: () => import("@/views/my/index.vue"),
			meta: {
				title: "个人中心"
			},
		},
		{
			path: '/creditDetail',
			name: 'creditDetail',
			component: () => import("@/views/creditTT/creditDetail.vue"),
			meta: {
				title: "信用头条"
			}
		},
		{
			path: '/userInfo',
			name: 'userInfo',
			component: () => import("@/views/my/userInfo.vue"),
			meta: {
				title: "个人信息"
			}
		},
		{
			path: '/login',
			name: 'login',
			component: () => import("@/views/login/login.vue"),
			meta: {
				title: "登陆"
			}
		},
		{
			path: '/reg',
			name: 'reg',
			component: () => import("@/views/login/reg.vue"),
			meta: {
				title: "注册"
			}
		},
		{
			path: '/feedback',
			name: 'feedback',
			component: () => import("@/views/my/setting/feedback.vue"),
			meta: {
				title: "意见反馈"
			}
		},
		{
			path: '/password',
			name: 'password',
			component: () => import("@/views/login/password.vue"),
			meta: {
				title: "忘记密码"
			}
		},
		{
			path: '/editPwd',
			name: 'editPwd',
			component: () => import("@/views/my/password/editPwd.vue"),
			meta: {
				title: "密码设置"
			}
		},
		{
			path: '/findPwd',
			name: 'findPwd',
			component: () => import("@/views/my/password/findPwd.vue"),
			meta: {
				title: "密码设置"
			}
		},
		{
			path: '/searchList',
			name: 'searchList',
			component: () => import("@/views/search/searchList.vue"),
			meta: {
				title: "搜索"
			}
		},
		{
			path: '/search',
			name: 'search',
			component: () => import("@/views/search/search.vue"),
			meta: {
				title: "搜索列表"
			}
		},
		{
			path: '/creditPay',
			name: 'creditPay',
			component: () => import("@/views/creditZM/creditPay.vue"),
			meta: {
				title: "信用报告"
			}
		},
		{
			path: '/credit',
			name: 'credit',
			component: () => import("@/views/creditZM/credit.vue"),
			meta: {
				title: "信用报告"
			}
		},
		{
			path: '/myFocus',
			name: 'myFocus',
			component: () => import("@/views/my/myFocus.vue"),
			meta: {
				title: "我的关注"
			}
		},
		{
			path: '/myControl',
			name: 'myControl',
			component: () => import("@/views/my/myControl.vue"),
			meta: {
				title: "我的监控"
			}
		},
		{
			path: '/companyControl',
			name: 'companyControl',
			component: () => import("@/views/my/companyControl.vue"),
			meta: {
				title: "监控企业"
			}
		},
		{
			path: '/certification',
			name: 'certification',
			component: () => import("@/views/my/certification/certification.vue"),
			meta: {
				title: "认证管理"
			}
		},
		{
			path: '/toCertification',
			name: 'toCertification',
			component: () => import("@/views/my/certification/toCertification.vue"),
			meta: {
				title: "认证管理"
			}
		},
		{
			path: '/myCredit',
			name: 'myCredit',
			component: () => import("@/views/my/myCredit/myCredit.vue"),
			meta: {
				title: "我的信用"
			}
		},
		{
			path: '/creditPDF',
			name: 'creditPDF',
			component: () => import("@/views/creditZM/creditPDF.vue"),
			meta: {
				title: "信用报告"
			}
		},
		{
			path: '/education',
			name: 'education',
			component: () => import("@/views/my/myCredit/education.vue"),
			meta: {
				title: "教育经历"
			}
		},
		{
			path: '/work',
			name: 'work',
			component: () => import("@/views/my/myCredit/work.vue"),
			meta: {
				title: "工作经历"
			}
		},  
		{
			path: '/identity',
			name: 'identity',
			component: () => import("@/views/my/myCredit/identity.vue"),
			meta: {
				title: "身份认证"
			}
		},  
		{
			path: '/myCreditAll',
			name: 'myCreditAll',
			component: () => import("@/views/my/myCredit/myCreditAll.vue"),
			meta: {
				title: "我的信用"
			}
		},
		{
			path: '/submitRepair',
			name: 'submitRepair',
			component: () => import("@/views/my/submitRepair.vue"),
			meta: {
				title: "提交修复材料"
			}
		},
		{
			path: '/company',
			name: 'company',
			component: () => import("@/views/company/company.vue"),
			meta: {
				title: "企业"
			}
		},
		{
			path: '/companyDetail',
			name: 'companyDetail',
			component: () => import("@/views/company/companyDetail.vue"),
			meta: {
				title: "企业详情"
			}
		},
		{
			path: '/space',
			name: 'space',
			component: () => import("@/views/company/space.vue"),
			meta: {
				title: "空间"
			}
		},
		{
			path: '/disclaimer',
			name: 'disclaimer',
			component: () => import("@/views/company/disclaimer.vue"),
			meta: {
				title: "免责声明"
			}
		},
		{
			path: '/about',
			name: 'about',
			component: () => import("@/views/my/about.vue"),
			meta: {
				title: "关于信用查"
			}
		},
		{
			path: '/break',
			name: 'break',
			component: () => import("@/views/break/break.vue"),
			meta: {
				title: "失信名录"
			}
		},
		{
			path: '/breakList',
			name: 'breakList',
			component: () => import("@/views/break/breakList.vue"),
			meta: {
				title: "失信名录"
			}
		},
		{
			path: '/setting',
			name: 'setting',
			component: () => import("@/views/my/setting/setting.vue"),
			meta: {
				title: "系统设置"
			}
		},
		{
			path: '/messageCenter',
			name: 'messageCenter',
			component: () => import("@/views/my/messageCenter.vue"),
			meta: {
				title: "消息中心"
			}
		},
		{
			path: '/attestation',
			name: 'attestation',
			component: () => import("@/views/my/attestation/attestation.vue"),
			meta: {
				title: "认证管理"
			}
		},
		{
			path: '/attestationStatus',
			name: 'attestationStatus',
			component: () => import("@/views/my/attestation/attestationStatus.vue"),
			meta: {
				title: "认证管理"
			}
		},
		{
			path: '/company/claim',
			name: 'claim',
			component: () => import("@/views/company/claim.vue"),
			meta: {
				title: "认领企业"
			}
		},
		{
			path: '/edu',
			name: 'edu',
			component: () => import("@/views/my/myCredit/edu.vue"),
			meta: {
				title: "学历查询-我的学历"
			}
		},
		{
			path: '/eduStatus',
			name: 'eduStatus',
			component: () => import("@/views/my/myCredit/eduStatus.vue"),
			meta: {
				title: "学历查询-我的学历"
			}
		},
		{
			path: '/shop/shopInspectList',
			name: 'shopInspectList',
			component: () => import("@/views/shop/shopInspectList.vue"),
			meta: {
				title: "商品抽检"
			}
		},
		{
			path: '/shop/shopInspect',
			name: 'shopInspect',
			component: () => import("@/views/shop/shopInspect.vue"),
			meta: {
				title: "商品抽检"
			}
		},
		{
			path: '/shop/shopDetails',
			name: 'shopDetails',
			component: () => import("@/views/shop/shopDetails.vue"),
			meta: {
				title: "商品抽检"
			}
		},
		{
			path: '/food/food',
			name: 'food',
			component: () => import("@/views/food/food.vue"),
			meta: {
				title: "食品抽检"
			}
		},
		{
			path: '/food/foodList',
			name: 'foodList',
			component: () => import("@/views/food/foodList.vue"),
			meta: {
				title: "食品抽检"
			}
		},
		{
			path: '/food/foodDetails',
			name: 'foodDetails',
			component: () => import("@/views/food/foodDetails.vue"),
			meta: {
				title: "食品抽检"
			}
		},
		{
			path: '/drug/drug',
			name: 'drug',
			component: () => import("@/views/drug/drug.vue"),
			meta: {
				title: "药品查询"
			}
		},
		{
			path: '/drug/drugList',
			name: 'drugList',
			component: () => import("@/views/drug/drugList.vue"),
			meta: {
				title: "药品查询"
			}
		},
		{
			path: '/drug/drugDetails',
			name: 'drugDetails',
			component: () => import("@/views/drug/drugDetails.vue"),
			meta: {
				title: "药品查询"
			}
		},
		{
			path: '/echarts',
			name: 'echarts',
			component: () => import("@/views/echarts/echarts.vue"),
			meta: {
				title: "图谱"
			}
		},
	]
})
router.afterEach((to, from, next) => {
	window.scrollTo(0, 0);
  });
  export default router