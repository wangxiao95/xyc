<template>
	<div>
		<!-- <Header></Header> -->
        <header class="header">
        <a class="iconfont headerIco headLeft" @click="$router.back()">&#xe792;</a>
        <h1 class="mui-title headTit headTitLabel">
            <a href="javascript:;" class="acticve" @click="$router.push('/company')">企业</a>
            <img src="/static/images/icon-25.png">
            <a href="javascript:;" @click="$router.push('/space')">空间</a>
        </h1>
        <a class="iconfont headerIco headRight headRightImg" href="javascript:;"><img src="/static/images/icon-21.png"></a>
    </header>
    <section class="wb100 dis-ib conTop conBottom">
        <div class="companyTop">
            <img src="/static/images/bg-01.jpg" class="wb100 fl">
            <div class="content">
                <div class="title">
                    <span><img src="/static/images/logo/logo.png"></span>
                    <em>腾讯科技（上海）有限公司</em>
                </div>
                <p class="credit ">社会信用码 010111852364152</p>
                <div class="claim">
                    <span><img src="/static/images/icon-1.png"></span>
                    <p class="claimCon">认领</p>
                    <p class="claimnumber">浏览量 3万+</p>
                </div>
                <div class="number">
                    <img src="/static/images/bg-02.png">
                    <em>98</em>
                </div>
            </div>
        </div>
        <div class="companyIhfo">
            <span class="name"><em>简介：腾讯科技（上海）有限公司成立于</em><a @click="$router.push('/companyDetail')">详情</a></span>
            <a href="javascript:;" class="label"><img src="/static/images/icon-24.png"></a>
            <a href="javascript:;" class="label"><img src="/static/images/icon-23.png"></a>
            <a href="javascript:;" class="label"><img src="/static/images/icon-22.png"></a>
        </div>
        <div class="searchListBottom companyReg">
            <span class="labelList">
                <em>法定代表人</em>
                <i class="c-e70016">奚丹</i>
            </span>
            <span class="labelList">
                <em>注册资本</em>
                <i>500万美元</i>
            </span>
            <span class="labelList">
                <em>成立日期</em>
                <i>2008-07-23</i>
            </span>
        </div>
        <div class="companyRisk">
            <div class="riskTop">
                <span>风险评估</span>
                <em>高风险</em>
                <i>监控</i>
            </div>
            <div class="plan"><i class="planCon" style="width:80%"></i></div>
        </div>
        <div class="Unveiled">
            <span class="UnveiledName"><em>热点</em><img src="/static/images/icon-26.png"></span>
            <div class="Unveiledscroll">
                <div class="bd">
                    <ul>
                        <li>2019全国大学生集成电路大赛开始报名</li>
                        <!-- <li>1997全国大学生集成电路大赛开始报名</li>
                        <li>1998全国大学生集成电路大赛开始报名</li> -->
                    </ul>
                </div>
            </div>
            <!-- <script type="text/javascript">
                jQuery(".Unveiledscroll").slide({ titCell: ".hd ul", mainCell: ".bd ul", autoPage: true, effect: "top", autoPlay: true, vis: 1 });
            </script> -->
        </div>
        <div class="companyWrap">
            <h3 class="companyTitle">机构信息</h3>
            <ul class="mechanismList">
                <li>
                    <a href="javascript:;">
                        <img src="/static/images/icon-2.png">
                        <p>工商信息</p>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="/static/images/icon-3.png">
                        <p>股东出资情况</p>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="/static/images/icon-4.png">
                        <p>企业管理人员</p>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="/static/images/icon-5.png">
                        <p>历史变更</p>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="/static/images/icon-6.png">
                        <p>分支机构</p>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="/static/images/icon-7.png">
                        <p>行政处罚历史</p>
                    </a>
                </li>
                <li class="gray">
                    <a href="javascript:;">
                        <img src="/static/images/icon-8.png">
                        <p>股权冻结历史</p>
                    </a>
                </li>
                <li class="gray">
                    <a href="javascript:;">
                        <img src="/static/images/icon-12.png">
                        <p>动产抵押</p>
                    </a>
                </li>
                <li class="gray">
                    <a href="javascript:;">
                        <img src="/static/images/icon-13.png">
                        <p>股权冻结历史</p>
                    </a>
                </li>
                <li class="gray">
                    <a href="javascript:;">
                        <img src="/static/images/icon-9.png">
                        <p>动产抵押</p>
                    </a>
                </li>
                <li class="gray">
                    <a href="javascript:;">
                        <img src="/static/images/icon-10.png">
                        <p>股权冻结历史</p>
                    </a>
                </li>
                <li class="gray">
                    <a href="javascript:;">
                        <img src="/static/images/icon-11.png">
                        <p>动产抵押</p>
                    </a>
                </li>
            </ul>
        </div>
        <div class="companyWrap">
            <h3 class="companyTitle">预警信息<a href="javascript:;" class="more warningMore"><img src="/static/images/icon-28.png"></a></h3>
            <ul class="warningList">
                <li>
                    <a href="javascript:;" class="oneTitle"><em class="name">法院公告</em><i class="label">经营</i></a>
                    <a href="javascript:;" class="labelList"><em class="name">个人信用报告怎么查?“不良信息”在哪儿看?</em><i class="time">2018-09-20</i></a>
                    <a href="javascript:;" class="labelList"><em class="name">怎么查询个人征信,查询征信记录的几种方法</em><i class="time">2018-09-20</i></a>
                </li>
                <li>
                    <a href="javascript:;" class="oneTitle"><em class="name">法律诉讼</em><i class="label">司法</i></a>
                    <a href="javascript:;" class="labelList"><em class="name">个人征信网上查询 上征信黑名单有什么影响</em><i class="time">2018-09-20</i></a>
                    <a href="javascript:;" class="labelList"><em class="name">北京旅游行业信用监管平台“信用旅游”上线 可查全市所有旅行社和</em><i class="time">2018-09-20</i></a>
                </li>
                <li>
                    <a href="javascript:;" class="oneTitle"><em class="name">被执行人信息</em><i class="label">经营</i></a>
                    <a href="javascript:;" class="labelList"><em class="name">北京市旅游行业信用监管平台上线</em><i class="time">2018-09-20</i></a>
                    <a href="javascript:;" class="labelList"><em class="name">征信报告查询次数过多真会影响银行贷款吗?</em><i class="time">2018-09-20</i></a>
                </li>
            </ul>
        </div>
        <div class="companyWrap">
            <h3 class="companyTitle">图谱</h3>
            <a href="atlasImg"><img src="/static/images/pic-1.jpg" class="wb100"></a>
        </div>
        <div class="companyWrap">
            <h3 class="companyTitle">机构发展<a href="javascript:;" class="more institutionMore"><img src="/static/images/icon-28.png"></a></h3>
            <ul class="institutionList">
                <li>
                    <a href="javascript:;">
                        <div class="left">
                            <img src="/static/images/icon-29.png">
                            <p>税务信用</p>
                        </div>
                        <div class="center">
                            <p>6354128796534515478</p>
                            <p>2018年</p>
                        </div>
                        <div class="right">
                            <em>A</em>
                            <p>纳税信用级别</p>
                        </div>
                        <div class="arrow">
                            <img src="/static/images/icon-33.png">
                        </div>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <div class="left">
                            <img src="/static/images/icon-30.png">
                            <p>招聘</p>
                        </div>
                        <div class="center">
                            <p>更新日期</p>
                            <p>2019年02月20日</p>
                        </div>
                        <div class="right">
                            <em>18</em>
                            <p>招聘岗位</p>
                        </div>
                        <div class="arrow">
                            <img src="/static/images/icon-33.png">
                        </div>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <div class="left">
                            <img src="/static/images/icon-31.png">
                            <p>融资信息</p>
                        </div>
                        <div class="center">
                            <p>更新日期</p>
                            <p>2019年02月20日</p>
                        </div>
                        <div class="right">
                            <em>3000万</em>
                            <p>融资金额</p>
                        </div>
                        <div class="arrow">
                            <img src="/static/images/icon-33.png">
                        </div>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <div class="left">
                            <img src="/static/images/icon-32.png">
                            <p>人才发展</p>
                        </div>
                        <div class="right center">
                            <em>12</em>
                            <p>企业管理人员</p>
                        </div>
                        <div class="right">
                            <em>18</em>
                            <p>核心人员</p>
                        </div>
                        <div class="arrow">
                            <img src="/static/images/icon-33.png">
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="companyWrap knowledgeWrap">
            <h3 class="companyTitle">知识产权</h3>
            <div class="knowledgeList">
                <span><em>商标</em><i>2</i></span>
                <span><em>专利</em><i>2</i></span>
                <span><em>网站</em><i>2</i></span>
                <span class="widhTwo"><em>软件著作权</em><i>2</i></span>
                <span class="widhTwo"><em>作品著作权</em><i>2</i></span>
            </div>
        </div>
    </section>
    <!--预警信息-->
    <div class="companyLayer warningLayer">
        <div class="companyLayerBg "></div>
        <div class="companyLayerCon ">
            <h3 class="companyLayerTitle">预警信息</h3>
            <a href="javascript:;" class="iconfont close">&#xe601;</a>
            <h5 class="warningLayerTitle">经营预警</h5>
            <ul class="warningLayerList">
                <li><a href="javascript:;">失信人</a></li>
                <li><a href="javascript:;">被执行人</a></li>
                <li><a href="javascript:;">开庭公告</a></li>
            </ul>
            <h5 class="warningLayerTitle">司法预警</h5>
            <ul class="warningLayerList">
                <li><a href="javascript:;">司法拍卖</a></li>
                <li><a href="javascript:;">严重违法</a></li>
                <li><a href="javascript:;">黑名单</a></li>
                <li><a href="javascript:;">欠税公告</a></li>
                <li><a href="javascript:;">股权出资</a></li>
            </ul>
        </div>
    </div>
    <!--机构发展-->
    <div class="companyLayer institutionLayer">
        <div class="companyLayerBg "></div>
        <div class="companyLayerCon ">
            <h3 class="companyLayerTitle">机构发展</h3>
            <a href="javascript:;" class="iconfont close">&#xe601;</a>
            <ul class="institutionLayerList">
                <li>
                    <a href="javascript:;">
                        <img src="/static/images/icon-36.png">
                        <p>招投标</p>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="/static/images/icon-37.png">
                        <p>财务信息</p>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="/static/images/icon-38.png">
                        <p>投资事件</p>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="/static/images/icon-39.png">
                        <p>企业年报</p>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="/static/images/icon-40.png">
                        <p>债券信息</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
	<Footer></Footer>
	</div>
</template>

<script>
    import Header from "@/components/Header"
	import Footer from "@/components/Footer1.vue"
	export default {
		components: {
            Header,
			Footer
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
