<template>
    <el-container style="height:100vh">
        <el-header>
            <label>标&nbsp;&nbsp;题：</label>
            <el-input v-model="title" placeholder="请输入文章标题"></el-input>
            <el-dropdown split-button type="primary" @click="saveHandler()" @command="exportHandler">
                保&nbsp;&nbsp;存
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="md">导出 *.md</el-dropdown-item>
                    <el-dropdown-item command="html">导出 *.html</el-dropdown-item>
                    <el-dropdown-item command="publish">发行H5</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-header>

        <el-main>
            <mavon-editor ref="mavon-editor" class="fill content" v-model="value" :toolbars="toolbars" :ishljs="true" :externalLink="externalLink" fontSize="16px" placeholder="请输入文本" @change="changeHandler" @save="saveHandler()">
                <template slot="left-toolbar-before">
                    <button type="button" title="新建" class="op-icon fa el-button el-icon-document-add" @click="newHandler"></button>
                    <span class="op-icon-divider"></span>
                </template>
                <template slot="left-toolbar-after">
                    <button type="button" title="页面样式和扩展" class="op-icon fa el-button el-icon-tableware" @click="tableware.visible = true"></button>
                </template>
                <!-- <i slot="left-toolbar-before">1</i> -->
                <!-- <i slot="left-toolbar-after">2</i> -->
                <!-- <i slot="right-toolbar-before">3</i> -->
                <!-- <i slot="right-toolbar-after">4</i> -->
            </mavon-editor>
        </el-main>
        <el-dialog title="资源" :visible.sync="tableware.visible" center width="600px">
            <MoreList title="style" v-model="tableware.styles" :list="tableware.preStyleList" placeholder="请输入style地址">
                <el-button type="text" slot="title">
                    预设css
                    <i class="el-icon-arrow-down"></i>
                </el-button>
            </MoreList>
            <MoreList title="script" v-model="tableware.scripts" :list="tableware.preScriptList" placeholder="请输入script地址">
                <el-button type="text" slot="title">
                    预设js
                    <i class="el-icon-arrow-down"></i>
                </el-button>
            </MoreList>
            <div slot="footer">
                <el-button @click="tableware.visible = false">取 消</el-button>
                <el-button type="primary" @click="tableware.visible = false">确 定</el-button>
            </div>
        </el-dialog>
    </el-container>
</template>
<script lang="ts">
import request from "./../../api/Request";
import { Component, Vue, Watch } from "vue-property-decorator";
import MoreList from './MoreList.vue';
const URL: any = window.URL || window.webkitURL;

@Component({
    components: { MoreList }, name: "MarkDownEditor"
})
export default class MarkDownEditor extends Vue {
    private id: number | null = null;
    private title: string | null = null;
    private value: string = "#新建文档";
    private html: string | null = null;
    private desc: string | null = "";
    private error: string | null = "";

    @Watch('$route')
    routeChangeHandler(val: any) {
        this.init(val.params);
    };

    private created() {
        this.init(this.$route.params);
    }

    private init(params: any) {
        if (params && params.id) {
            if (params.id === "new") {
                this.id = null;
                this.resetDocument();
            } else {
                this.editHandler(params.id);
            }
        } else {
            this.resetDocument();
        }
    }

    //餐具，页面附加的样式或js库，支持相对引入或CDN方式
    private tableware: any = {
        visible: false,
        styles: [], //样式
        scripts: [], //js库
        preStyleList: [
            { label: "animate.css@4.1.1", value: "/css/animate.css/4.1.1/animate.min.css" }
        ],
        preScriptList: [
            { label: "vuejs 2.0", value: "//cn.vuejs.org/js/vue.min.js" },
            { label: "vuejs 3.0-beta", value: "//unpkg.com/vue@3.0.11/dist/vue.global.js" },
            { label: "jQuery 3.6.0", value: "//code.jquery.com/jquery-3.6.0.min.js" },
        ]
    };

    private toolbars: any = {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: false, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true, // 预览
    };

    private externalLink: any = {
        // markdown_css: function () {
        //     // 这是你的markdown css文件路径
        //     return '/css/page.css';
        // },
        markdown_css: false
    };

    private changeHandler(value: string, html: string) {
        this.value = value;
        this.html = html;
    }

    private resetDocument() {
        this.id = null;
        this.title = null;
        this.value = "";
        this.desc = null;
        this.error = null;
        //@ts-ignore
        this.$refs['mavon-editor'].subfieldtoggle();
    }

    private newHandler() {
        if (this.title || this.value) {
            this.$confirm("确认放弃当前内容，新建文档吗？", "新建文档").then(res => {
                this.resetDocument();
                this.$router.push({ path: "/markdown/edit/new" });
            });
        } else {
            this.resetDocument();
            this.$router.push({ path: "/markdown/edit/new" });
        }
    }

    private editHandler(id: number) {
        //编辑指定信息
        request("/edit/read", { id: id }).then(({ data, success }: any) => {
            if (success) {
                this.id = data.id;
                this.title = data.title;
                this.value = data.text || "";
                this.desc = data.desc;
                const links = JSON.parse(data.links);
                this.tableware.styles = links.styles || [];
                this.tableware.scripts = links.scripts || [];
                document.title = this.title || '新建文档';
            } else {
                this.resetDocument();
                return this.$message({ type: "warn", message: "未查询到内容" });
            }
        });
    }

    private saveHandler(callback: Function) {
        if (!this.value) {
            return this.$message({ type: "error", message: "暂无内容需要保存" });
        }

        if (this.title) {
            request("/edit/save", {
                id: this.id,
                title: this.title,
                text: this.value,
                html: this.html,
                desc: this.desc,
                links: {
                    styles: this.tableware.styles.filter((item: string) => item.trim()),
                    scripts: this.tableware.scripts.filter((item: string) => item.trim())
                }
            }).then(({ success, data }: any) => {
                console.log("保存", data);
                if (success) {
                    callback && callback(data);
                    this.$router.push({ path: "/markdown/edit/" + data.id });
                    this.$message({ type: "success", message: "内容已经保存成功" });
                }
            });
        } else {
            this.$message({ type: "error", message: "请输入标题内容" });
        }
    }

    private exportHandler(type: string) {
        if (type === 'publish') {
            return this.saveHandler((data: any) => {
                request("/edit/publish", { id: data.id }).then(({ success, message }: any) => {
                    this.$message({ type: success ? 'success' : 'error', message: success ? '发布完成' : message });
                });
            });
        }

        let blob = null;
        if (this.value && this.html) {
            if (type == 'md') {
                blob = new Blob([this.value], { type: 'text/plain' });
            } else {
                blob = new Blob([this.html], { type: 'html/plain' });
            }

            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = [this.title, type].join('.');
            document.body.appendChild(a);
            a.click();
            setTimeout(() => {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
                this.$message({ type: 'success', message: "文档下载完成" });
            }, 100);
        } else {
            this.$message({ type: 'error', message: "暂无内容需要导出" });
        }
    }
}
</script>
<style lang="stylus" scoped>
.el-header {
    display: flex;
    align-items: center;

    label {
        white-space: nowrap;
        word-break: keep-all;
        margin-right: 10px;
    }

    >>> .el-button-group {
        display: flex;
    }

    .el-input {
        margin-right: 10px;
    }
}
</style>