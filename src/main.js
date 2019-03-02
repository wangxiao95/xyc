// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "@/style/base.css"
import "@/style/style.css"

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// import echarts from 'echarts' //引入echarts
// Vue.prototype.$echarts = echarts //引入组件
//引入基本模板
let echarts = require('echarts/lib/echarts')
 
// 引入折线图等组件
require('echarts/lib/chart/line')
require('echarts/lib/chart/bar')
require('echarts/lib/chart/radar')

// 引入提示框和title组件，图例
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
require('echarts/lib/component/legendScroll')//图例翻译滚动

Vue.prototype.$echarts = echarts

import {$axios} from "./util/index"
Vue.prototype.$axios = $axios

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
