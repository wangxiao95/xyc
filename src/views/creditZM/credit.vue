<template>
    <div>
        <Header></Header>
        <div class="container">
            <div class="statisticsResult statisticsResult2 credit">
            <h5 class="title">报告内容定制</h5>
            <span class="Add">[选择全部]</span>
            <a href="javascript:;" class="creditBtton creditBtton2 fr">样本浏览</a>
        </div>
        <div class="mui-active searchListMargin searchListMargin2">
            <div class="mui-scroll">
                <ul class="mui-table-view creditList mainHref chat-windows-color-div conBottom">
                    <li>
                        <input class="color-input-red" type="checkbox" name="tall" id="tall">
                        <label for="tall"></label>
                        <h2 class="title">基本信息</h2>
                        <ul class="creditFour">
                            <li>
                                <input class="color-input" type="checkbox" name="tall-1" id="tall-1">
                                <label for="tall-1">工商信息</label>
                            </li>
                            <li>
                                <input class="color-input" type="checkbox" name="tall-2" id="tall-2">
                                <label for="tall-2">分支机构</label>
                            </li>
                            <li>
                                <input class="color-input" type="checkbox" name="tall-3" id="tall-3">
                                <label for="tall-3">变更记录</label>
                            </li>
                            <li>
                                <input class="color-input" type="checkbox" name="tall-4" id="tall-4">
                                <label for="tall-4">股东信息</label>
                            </li>
                            <li>
                                <input class="color-input" type="checkbox" name="tall-5" id="tall-5">
                                <label for="tall-5">管理人员</label>
                            </li>
                            <li>
                                <input class="color-input" type="checkbox" name="tall-6" id="tall-6">
                                <label for="tall-6">清算信息</label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <input class="color-input-red" type="checkbox" name="firm" id="firm">
                        <label for="firm"></label>
                        <h2 class="title">企业深度关联背景</h2>
                        <ul class="creditFour">
                            <li>
                                <input class="color-input" type="checkbox" name="firm-1" id="firm-1">
                                <label for="firm-1">法人对外投资引起的关联</label>
                            </li>
                            <li>
                                <input class="color-input" type="checkbox" name="firm-2" id="firm-2">
                                <label for="firm-2">法人在外任职引起的关联</label>
                            </li>
                            <li>
                                <input class="color-input" type="checkbox" name="firm-3" id="firm-3">
                                <label for="firm-3">公司对外投资引起的关联</label>
                            </li>
                            <li>
                                <input class="color-input" type="checkbox" name="firm-4" id="firm-4">
                                <label for="firm-4">高管对外投资引起的关联</label>
                            </li>
                            <li>
                                <input class="color-input" type="checkbox" name="firm-5" id="firm-5">
                                <label for="firm-5">高管对外任职引起的关联</label>
                            </li>
                            <li>
                                <input class="color-input" type="checkbox" name="firm-6" id="firm-6">
                                <label for="firm-6">股东对外投资引起的关联</label>
                            </li>
                            <li>
                                <input class="color-input" type="checkbox" name="firm-7" id="firm-7">
                                <label for="firm-7">股东对外任职引起的关联</label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <input class="color-input-red" type="checkbox" name="year" id="year">
                        <label for="year"></label>
                        <h2 class="title">年报信息</h2>
                        <ul class="creditFour">
                            <li>
                                <input class="color-input" type="checkbox" name="year-1" id="year-1">
                                <label for="year-1">年报信息</label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <input class="color-input-red" type="checkbox" name="property" id="property">
                        <label for="property"></label>
                        <h2 class="title">知识产权</h2>
                        <ul class="creditFour">
                            <li>
                                <input class="color-input" type="checkbox" name="property-1" id="property-1">
                                <label for="property-1">商标</label>
                            </li>
                            <li>
                                <input class="color-input" type="checkbox" name="property-2" id="property-2">
                                <label for="property-2">专利</label>
                            </li>
                            <li>
                                <input class="color-input" type="checkbox" name="property-3" id="property-3">
                                <label for="property-3">网站</label>
                            </li>
                            <li>
                                <input class="color-input" type="checkbox" name="property-4" id="property-4">
                                <label for="property-4">软件著作权</label>
                            </li>
                            <li>
                                <input class="color-input" type="checkbox" name="property-5" id="property-5">
                                <label for="property-5">作品著作权</label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <input class="color-input-red" type="checkbox" name="jiandu" id="jiandu">
                        <label for="jiandu"></label>
                        <h2 class="title">行政监督</h2>
                        <ul class="creditFour">
                            <li>
                                <input class="color-input" type="checkbox" name="jiandu-1" id="jiandu-1">
                                <label for="jiandu-1">行政处罚</label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <input class="color-input-red" type="checkbox" name="firmJY" id="firmJY">
                        <label for="firmJY"></label>
                        <h2 class="title">企业经营信息</h2>
                        <ul class="creditFour">
                            <li>
                                <input class="color-input" type="checkbox" name="firmJY-1" id="firmJY-1">
                                <label for="firmJY-1">经营异常信息</label>
                            </li>
                            <li>
                                <input class="color-input" type="checkbox" name="firmJY-2" id="firmJY-2">
                                <label for="firmJY-2">股权冻结历史</label>
                            </li>
                            <li>
                                <input class="color-input" type="checkbox" name="firmJY-3" id="firmJY-3">
                                <label for="firmJY-3">股权出质信息</label>
                            </li>
                            <li>
                                <input class="color-input" type="checkbox" name="firmJY-4" id="firmJY-4">
                                <label for="firmJY-4">动产抵押信息</label>
                            </li>
                            <li>
                                <input class="color-input" type="checkbox" name="firmJY-5" id="firmJY-5">
                                <label for="firmJY-5">动产抵押物</label>
                            </li>
                            <li>
                                <input class="color-input" type="checkbox" name="firmJY-6" id="firmJY-6">
                                <label for="firmJY-6">欠贷信息</label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <input class="color-input-red" type="checkbox" name="judicial" id="judicial">
                        <label for="judicial"></label>
                        <h2 class="title">司法信用信息</h2>
                        <ul class="creditFour">
                            <li>
                                <input class="color-input" type="checkbox" name="judicial-1" id="judicial-1">
                                <label for="judicial-1">被执行人信息</label>
                            </li>
                            <li>
                                <input class="color-input" type="checkbox" name="judicial-2" id="judicial-2">
                                <label for="judicial-2">失信执行人</label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <input class="color-input-red" type="checkbox" name="complex" id="complex">
                        <label for="complex"></label>
                        <h2 class="title">信用综合分析</h2>
                        <ul class="creditFour">
                            <li>
                                <input class="color-input" type="checkbox" name="complex-1" id="complex-1">
                                <label for="complex-1">信用综合分析</label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <input class="color-input-red" type="checkbox" name="risk" id="risk">
                        <label for="risk"></label>
                        <h2 class="title">风险评估</h2>
                        <ul class="creditFour">
                            <li>
                                <input class="color-input" type="checkbox" name="risk-1" id="risk-1">
                                <label for="risk-1">风险评测</label>
                            </li>
                            <li>
                                <input class="color-input" type="checkbox" name="risk-2" id="risk-2">
                                <label for="risk-2">风险预警</label>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        <div class="footerCredit">
            <div class="money">金额：
                <i>120.00</i>
            </div>
            <a href="" class="Creditbotton fr">立即生成</a>
        </div>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header.vue";
    export default {
        components: {
            Header
        },
        data() {
            return {};
        },
        methods: {},
        created() { }
    };
</script>

<style scoped>
.container{
    margin-top: .6rem
}
</style>