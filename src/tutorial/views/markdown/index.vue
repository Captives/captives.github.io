<template>
    <el-main class="page">
        <div style="text-align:right">
            <span v-if="activeName=='first'" style="float: left; display:flex">
                <el-button v-show="!cateItem.visible" type="primary" @click="cateItem.visible=true">添加类别</el-button>
                <el-input v-show="cateItem.visible" v-model="cateItem.value"></el-input>
                <el-button v-show="cateItem.visible" type="success" @click="addCategoryHandler">确认</el-button>
            </span>

            <el-button type="primary" @click="exportToFileHandler">导出</el-button>
            <el-button type="primary" @click="buildToHtmlHandler">发布</el-button>
            <el-button type="success" @click="redirectHander('/edit/new')">新建</el-button>
        </div>
        <el-tabs v-model="activeName" style="width: 100%;">
            <el-tab-pane label="类别管理" name="first">
                <el-table :data="categoryList" style="width: 100%">
                    <el-table-column prop="id" label="ID"> </el-table-column>
                    <el-table-column prop="name" label="名称"> </el-table-column>
                    <el-table-column prop="create_time" label="创建时间"> </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="{row}">
                            <el-button type="text" @click="editCategoryHandler(row)">编辑</el-button>
                            <el-button type="text" @click="deleteCategoryHandler(row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="文章管理" name="second">
                <!-- 查询条件 -->
                <vue-table :data="list" style="width: 100%" :total="total" @page-change="getList">
                    <el-table-column prop="id" label="ID"> </el-table-column>
                    <el-table-column prop="title" label="文章标题"> </el-table-column>
                    <el-table-column prop="desc" label="描述"> </el-table-column>
                    <el-table-column prop="create_time" width="150" label="创建时间"> </el-table-column>
                    <el-table-column prop="update_time" width="150" label="更新时间"> </el-table-column>
                    <el-table-column label="操作" width="200">
                        <template slot-scope="{row}">
                            <el-button type="text" @click="redirectHander('/edit/' + row.id)">编辑</el-button>
                            <el-button type="text" @click="itemPriviewHandler(row)">预览</el-button>
                            <el-button type="text" @click="itemPublishHandler(row)">发布</el-button>
                            <el-button type="text" @click="deleteItemHandler(row)">删除</el-button>
                            <el-button type="text" @click="itemDownloadHandler(row)">下载</el-button>
                        </template>
                    </el-table-column>
                </vue-table>
                <!-- <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000">
                </el-pagination> -->
            </el-tab-pane>
            <el-tab-pane label="文件管理" name="third">
                <el-table :data="files" style="width: 100%">
                    <el-table-column prop="fid" label="ID"> </el-table-column>
                    <el-table-column prop="name" label="文件名"> </el-table-column>
                    <el-table-column label="大小">
                        <template slot-scope="{ row }">{{ row.size | byteConver }}</template>
                    </el-table-column>
                    <el-table-column prop="time" label="创建时间">
                        <template slot-scope="{ row }">{{ row.time | time }}</template>
                    </el-table-column>
                    <el-table-column prop="mtime" label="更新时间">
                        <template slot-scope="{ row }">{{ row.mtime | time }}</template>
                    </el-table-column>
                    <el-table-column prop="atime" label="访问时间">
                        <template slot-scope="{ row }">{{ row.atime | time }}</template>
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="{ row }">
                            <!-- <el-button type="text" @click="fileSyncHandler(row)">同步</el-button> -->
                            <el-button type="text" @click="filePreviewHandler(row)">预览</el-button>
                            <el-button type="text" @click="fileDeleteHandler(row)">删除</el-button>
                            <el-button type="text" @click="fileDownloadHandler(row)">下载</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>

        <el-dialog :title="dialog.title" :visible.sync="dialog.visible" width="50%" :before-close="resetDialog">
            <mavon-editor ref="mavon-editor" :value="dialog.value" :editable="false" :subfield="false" :toolbarsFlag="false" :shortCut="false" defaultOpen="preview"></mavon-editor>
        </el-dialog>
    </el-main>
</template>
<script lang='ts'>
import request from "./../../api/Request";
//@ts-ignore;
import { byteConver } from '@/utils/common';
import moment from 'moment';

import { Component, Vue } from 'vue-property-decorator'
@Component({
    name: 'MarkDownEditor',
    filters: {
        byteConver(value: number) {
            return byteConver(value);
        },
        time(value: string) {
            return moment(new Date(value)).format("YYYY-MM-DD HH:mm:ss");
        }
    }
})
export default class MarkDownEditor extends Vue {
    private activeName: string | null = "second";
    private categoryList: Array<any> = [];//类别
    private list: Array<any> = [];//文章
    private total: number = 1;//文章总数量
    private files: Array<any> = [];//文件

    private cateItem: any = { visible: false, id: null, value: "" };
    private dialog: any = { visible: false, title: "" };


    private resetDialog() {
        this.dialog = { visible: false, title: "" };
    }

    private downloadText(text: string, title: string) {
        if (text) {
            let blob = new Blob([text], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = title;
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


    //获取类别列表
    private getCategoryList() {
        request("/edit/category").then(({ data }: any) => {
            console.log(data);
            this.categoryList = data;
        });
    }

    //添加类别
    private addCategoryHandler() {
        if (this.cateItem.value) {
            request('/edit/category_add', { id: this.cateItem.id, name: this.cateItem.value, enabled: true }).then(({ success }: any) => {
                this.$message({ type: success ? 'success' : 'error', message: "添加完成" });
                this.getCategoryList();
                this.cateItem.value = "";
                this.cateItem.visible = false;
                this.cateItem.id = null;
            })
        }
    }

    //编辑
    private editCategoryHandler(row: any) {
        this.cateItem.value = row.name;
        this.cateItem.visible = true;
        this.cateItem.id = row.id;
    }

    //删除
    private deleteCategoryHandler(row: any) {
        request("/edit/category_remove", { id: row.id }).then(({ data }: any) => {
            console.log(data);
            this.getCategoryList();
        });
    }

    private getList(page: number = 1, size: number = 10) {
        request("/edit/list", { page, size }).then(({ data }: any) => {
            console.log(data);
            this.list = data.list;
            this.total = data.total;
        });
    }

    private redirectHander(val: string) {
        this.$router.push({ path: "/markdown" + val });
    }

    //预览
    private itemPriviewHandler(row: any) {
        request("/edit/read", { id: row.id }).then(({ success, data }: any) => {
            this.dialog.visible = true;
            this.dialog.value = data.text;
            this.dialog.title = data.title;
        });
    }

    //发布单个文件
    private itemPublishHandler(row: any) {
        request("/edit/publish", { id: row.id }).then(({ success, message }: any) => {
            this.$message({ type: success ? 'success' : 'error', message: success ? '发布完成' : message });
            success && this.getFileList();
        });
    }

    //下载
    private itemDownloadHandler(row: any) {
        request("/edit/read", { id: row.id }).then(({ success, data }: any) => {
            if (success) {
                this.downloadText(data.text, data.title + ".md");
            }
        });
    }

    private deleteItemHandler(row: any) {
        this.$confirm("确认删除吗？删除后不可恢复！", "删除", { confirmButtonClass: "el-button--danger", confirmButtonText: "删除" }).then(() => {
            request('/edit/delete', { id: row.id }).then(() => {
                this.$message({ type: "success", message: "文章已经移除" });
                this.getList();
            })
        });
    }

    private getFileList() {
        request("/edit/async_file_list").then(({ success, data }: any) => {
            console.log(data);
            this.files = success ? data : [];
        });
    }

    /**
     * 文件同步，把磁盘文件，更新到数据库，如果不存在，则新建
     */
    private fileSyncHandler() {
        //
    };

    //文件删除
    private fileDeleteHandler(row: any) {
        this.$confirm("确认删除吗？删除后不可恢复！", "删除", { confirmButtonClass: "el-button--danger", confirmButtonText: "删除" }).then(() => {
            request("/edit/async_delete_file", { fid: row.fid, name: row.name }).then(({ success, message }: any) => {
                this.$message({ type: success ? 'success' : 'error', message: success ? "删除成功" : message });
                success && this.getFileList();
            });
        });
    };

    /**
     * 文件预览
     */
    private filePreviewHandler(row: any) {
        request("/edit/async_read_file", { fid: row.fid, name: row.name }).then(({ success, data }: any) => {
            this.dialog.visible = true;
            this.dialog.value = data;
            this.dialog.title = row.name;
        });
    };

    /***
     * 下载文档
     */
    private fileDownloadHandler(row: any) {
        request("/edit/async_read_file", { fid: row.fid, name: row.name }).then(({ success, data }: any) => {
            this.downloadText(data, row.name);
        });
    };

    //批量导出数据库内容到文档
    private exportToFileHandler() {
        this.$confirm("批量导出数据库内容到文档吗！", "批量导出文档").then(() => {
            request("/edit/async_to_file").then(({ success, message }: any) => {
                this.$message({ type: success ? 'success' : 'error', message: success ? "操作完成" : message });
                success && this.getFileList();
            });
        });
    }

    //批量导出数据库内容到html文档
    private buildToHtmlHandler() {
        this.$confirm("批量导出数据库内容到静态文档吗？这将导致部分页面短暂不可访问！", "批量发布文档").then(() => {
            request("/edit/async_build").then(({ success, message }: any) => {
                this.$message({ type: success ? 'success' : 'error', message: success ? "操作完成" : message });
                success && this.getFileList();
            });
        });
    }

    private created() {
        this.getCategoryList();
        this.getList();
        this.getFileList();
    }
}
</script>
<style lang='stylus' scoped>
.el-main {
    overflow: hidden;
    display: flex;
    flex: 1;
    flex-direction: column;

    .el-tabs >>> {
        flex: 1;
        min-height: 610px;
        display: flex;
        flex-direction: column;

        .el-tabs__header {
            margin: 0;
        }

        .el-tabs__content {
            flex: 1;

            .el-tab-pane {
                box-sizing: border-box;
                height: 100%;
            }
        }
    }
}

.el-table {
    display: flex;
    height: 100%;
    width: 100%;
    border: 1px solid #EBEEF5;
    box-sizing: border-box;

    &:before {
        display: none;
    }

    >>> {
        .el-table__fixed-header-wrapper, .el-table__header-wrapper {
            position: absolute;
            width: 100%;
            top: 0;

            th {
                color: #333;
                font-weight: bolder;
            }
        }

        .el-table__fixed-right .el-table__fixed-header-wrapper {
            table {
                float: right;
            }
        }

        // 固定列处理
        .el-table__fixed-body-wrapper, .el-table__body-wrapper {
            overflow-y: auto;
            height: calc(100% - 40px);
            top: 40px;

            td {
                padding: 2px 0;
            }
        }

        .el-table__body-wrapper {
            top: 41px;
        }
    }
}
</style>