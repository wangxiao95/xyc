<template>
  <div>
    <section class="wb100 dis-ib conBottom">
      <div class="indexTop" @click="$router.push('/searchList')">
        <img src="/static/images/bg-02.jpg">
        <div id="boxFixed" :class="{'is_fixed' : isFixed}">
          <div class="indexSearch" :class="{'input_fixed' : isFixed}">
            <i class="iconfont">&#xe63b;</i>
            <em>企业名称、信用代码、姓名等</em>
          </div>
        </div>
      </div>
      <div class="Unveiled indexUnveiled">
        <span class="UnveiledName"><img src="/static/images/icon-42.png"><em>风险预警</em></span>
        <div class="Unveiledscroll">
          <div class="bd">
            <ul>
              <!-- <li><span>北京丰阳科技有限公司破产了</span><em>2019-02-16</em></li>
                        <li><span>北京丰阳科技有限公司破产了</span><em>2019-02-16</em></li> -->
              <li><span>北京丰阳科技有限公司破产了</span><em>2019-02-16</em></li>
            </ul>
          </div>
        </div>
        <!--       <script type="text/javascript">
                jQuery(".Unveiledscroll").slide({ titCell: ".hd ul", mainCell: ".bd ul", autoPage: true, effect: "top", autoPlay: true, vis: 1 });
            </script> -->
      </div>
      <ul class="indexNav">
        <li @click="$router.push({name: 'searchList', query: {type: 'GS'}})">
          <a href="javascript:;">
            <img src="/static/images/icon-43.png">
            <p>工商企业</p>
          </a>
        </li>
        <li @click="$router.push({name: 'searchList', query: {type: 'GJ'}})">
          <a href="javascript:;">
            <img src="/static/images/icon-44.png">
            <p>国家机关</p>
          </a>
        </li>
        <li @click="$router.push({name: 'searchList', query: {type: 'SY'}})">
          <a href="javascript:;">
            <img src="/static/images/icon-45.png">
            <p>事业单位</p>
          </a>
        </li>
        <li @click="$router.push({name: 'searchList', query: {type: 'SH'}})">
          <a href="javascript:;">
            <img src="/static/images/icon-46.png">
            <p>社会团队</p>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="/static/images/icon-47.png">
            <p>人行征信</p>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="/static/images/icon-48.png">
            <p>五险一金</p>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="/static/images/icon-49.png">
            <p>学历验证</p>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="/static/images/icon-50.png">
            <p>身份验证</p>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="/static/images/icon-51.png">
            <p>全部</p>
          </a>
        </li>
      </ul>
      <div class="indexHeadlines">
        <h5 class="HeadlinesTitle">信用头条</h5>
        <ul class="HeadlinesList" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading">
          <li class="itemR" v-for="(item,index) in pageList" :key="index">
            <a @click="$router.push('/creditDetail')" class="HeadlinesListItem">
              <div class="photo fl mrb3"><img :src="item.img"></div>
              <h5 class="title">{{item.title}}</h5>
              <p class="info">{{item.info}}</p>
              <div class="bottom">
                <span class="time">{{item.time}}</span>
                <span class="number"><i class="iconfont">&#xe612;</i><em>{{item.lookNum}}人阅读</em></span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from "@/components/Footer.vue";
  // import Header from "@/components/Header.vue"
  export default {
    components: {
      Footer
    },
    data() {
      return {
        isFixed: false,
        offsetTop: 0,
        pageList: [{
          title: "陆股通大胆抄底 多家公司信用评级被下调",
          info: "陆股通一季度新进116家上市公司前十大流通股东陆股通一季度新进116家上市公司的前十大流通股东...",
          time: "2019-02-01",
          lookNum: "168",
          img: "/static/images/pic-3.jpg"
        },
          {
            title: "京东数科推出个人信用租赁平台”京小租” 小白信用与新华信用达成战略合作",
            info: "当下,信用租赁已成为社会零售新趋势。但租赁行业仍面临...",
            time: "2019-02-01",
            lookNum: "168",
            img: "http://www.cs.com.cn/xgjj/xxzs/xhsmzpp/4/201903/W020190301721596502327.jpg"
          },
          {
            title: "信用大数据破局融资难题 助力民营经济高速发展",
            info: "本次论坛旨为更好的支撑全国科技创新中心建设，鼓励金融业在民营企业、实体经济、高精尖产业等方面所做的服务创新工作...",
            time: "2019-02-01",
            lookNum: "168",
            img: "http://bj.people.com.cn/NMediaFile/2019/0301/LOCAL201903011712000411866838719.jpg"
          },
          {
            title: "捷信：营造放心消费环境，推进消费信用体系建设",
            info: "现代市场经济从一定意义上来讲是一种信用经济，捷信认识到对金融行业来讲，信用更是维系这个行业发展的基础...",
            time: "2019-02-01",
            lookNum: "168",
            img: "http://hd.jsrdzg.cn/uploads/allimg/190301/1-1Z3011K131K9.png"
          },

        ],
        loading: false,
        name: "刘刚"
      }
    },
    mounted() {
      window.addEventListener('scroll', this.initHeight);
      this.$nextTick(() => {
        this.offsetTop = document.querySelector('#boxFixed').offsetTop;
      })
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      initHeight() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        this.isFixed = scrollTop > this.offsetTop * 0.6 ? true : false;
      },
      loadMore() {

      },
      getData() {
        this.$axios.post(`qst_entfind_djg/select`, {
          params: {
            'q': '*',
            'indent': 'true',
            'wt': 'json'
          }
        }).then(res => {
          console.log("qst_entfind_new", res)
        })
      }
    },
    created() {
      this.getData()
    }
  }
</script>

<style scoped>
  .is_fixed {
    position: fixed;
    top: 0rem;
    z-index: 999;
    color: #fff;
    background-color: #ff4c4a;
    width: 100%;
    height: 1.7rem;
    /* padding: 1rem 0; */
  }
  .input_fixed{
    position: absolute;
    top: 50%;
  }
</style>
