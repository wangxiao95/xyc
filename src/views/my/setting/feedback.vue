<template>
    <div>
        <Header></Header>
        <div>
            <section class="conTop wb100 dis-ib">
                <h5 class="feedbackTitle">反馈内容</h5>
                <div class="feedbackCon">
                    <textarea placeholder="请填写问题描述以使我们提供更好的帮助"></textarea>
                </div>
                <div class="buttonBIg buttonBIgWidth">
                    <a>提交</a>
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
        methods: {},
        created() { }
    }
</script>

<style scoped>
</style>