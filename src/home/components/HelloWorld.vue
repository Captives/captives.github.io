<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <search-bar v-model="keyword" style="width:100%; max-width:750px" placeholder="请输入关键字" clearable @change="searchChangeHandler"></search-bar>
        <h3>安装</h3>
        <ul>
            <li>
                <a href="https://cli.vuejs.org/zh/" target="_blank" rel="noopener">vue-cli</a>
            </li>
            <li>
                <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a>
            </li>
            <li>
                <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a>
            </li>
            <li>
                <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a>
            </li>
        </ul>
        <h3>学习</h3>
        <ul>
            <li>
                <a href="https://cn.vuejs.org" target="_blank" rel="noopener">Core Docs</a>
            </li>
            <li>
                <a href="https://cn.vuejs.org/v2/guide/" target="_blank" rel="noopener">教程</a>
            </li>
            <li>
                <a href="https://cn.vuejs.org/v2/api/" target="_blank" rel="noopener">API</a>
            </li>
            <li>
                <a href="https://cn.vuejs.org/v2/style-guide/" target="_blank" rel="noopener">风格指南</a>
            </li>
            <li>
                <a href="https://cn.vuejs.org/v2/examples/" target="_blank" rel="noopener">示例</a>
            </li>
            <li>
                <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
            </li>
        </ul>
        <h3>生态系统</h3>
        <ul>
            <li>
                <a href="https://ssr.vuejs.org/zh/" target="_blank" rel="noopener">ssr</a>
            </li>
            <li>
                <a href="https://router.vuejs.org/zh" target="_blank" rel="noopener">vue-router</a>
            </li>
            <li>
                <a href="https://vuex.vuejs.org/zh" target="_blank" rel="noopener">vuex</a>
            </li>
            <li>
                <a href="https://github.com/vuejs/vue-devtools" target="_blank" rel="noopener">vue-devtools</a>
            </li>
            <li>
                <a href="https://vue-loader.vuejs.org/zh" target="_blank" rel="noopener">vue-loader</a>
            </li>
            <li>
                <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a>
            </li>
        </ul>
        <h3>Essential Links</h3>
        <ul>
            <li>
                <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
            </li>
            <li>
                <a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a>
            </li>
            <li>
                <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a>
            </li>
            <li>
                <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a>
            </li>
            <li>
                <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
            </li>
        </ul>
        <h3>TypeScript</h3>
        <ul>
            <li><a href="https://www.tslang.cn/index.html">TypeScript 中文网</a></li>
            <li>
                <a href="https://basarat.gitbook.io/typescript/">TypeScript深入研究</a>
            </li>
            <li>
                <a href="https://gyufei.github.io/2018/07/23/vue-with-typescript/" target="_blank" rel="noopener">使用 TypeScript 构建 Vue 项目</a>
            </li>
        </ul>
        <h3>后续</h3>
        <ul>
            <li><a href="https://github.com/">Github</a></li>
            <li><a href="https://npmjs.com/">Npm</a></li>
            <li>
                <a href="https://www.travis-ci.com/">Travis CI</a>
            </li>
        </ul>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        msg: String,
    },
    data() {
        return {
            keyword: "tea",
        };
    },
    methods: {
        searchChangeHandler(url) {
            window.open(url);
            this.keyword = "";
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
