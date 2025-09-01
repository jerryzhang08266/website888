<template>
    <div>
        <el-card class="!border-none mb-4" shadow="never">
            <el-form
                class="mb-[-16px]"
                :model="queryParams"
                inline
            >
                <el-form-item label="名称" prop="name">
                    <el-input class="w-[280px]" v-model="queryParams.name" clearable placeholder="请输入名称" />
                </el-form-item>
                <el-form-item label="公司" prop="company">
                    <el-input class="w-[280px]" v-model="queryParams.company" clearable placeholder="请输入公司" />
                </el-form-item>
                <el-form-item label="职位" prop="job">
                    <el-input class="w-[280px]" v-model="queryParams.job" clearable placeholder="请输入职位" />
                </el-form-item>
                <el-form-item label="电话" prop="tel">
                    <el-input class="w-[280px]" v-model="queryParams.tel" clearable placeholder="请输入电话" />
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input class="w-[280px]" v-model="queryParams.email" clearable placeholder="请输入邮箱" />
                </el-form-item>
                <el-form-item label="下载项" prop="info">
                    <el-input class="w-[280px]" v-model="queryParams.info" clearable placeholder="请输入下载项" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="resetPage">查询</el-button>
                    <el-button @click="resetParams">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card class="!border-none" v-loading="pager.loading" shadow="never">
            <el-button v-perms="['download.download/add']" type="primary" @click="handleAdd">
                <template #icon>
                    <icon name="el-icon-Plus" />
                </template>
                新增
            </el-button>
            <el-button
                v-perms="['download.download/delete']"
                :disabled="!selectData.length"
                @click="handleDelete(selectData)"
            >
                删除
            </el-button>
            <div class="mt-4">
                <el-table :data="pager.lists" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55" />
                    <el-table-column label="名称" prop="name" show-overflow-tooltip />
                    <el-table-column label="公司" prop="company" show-overflow-tooltip />
                    <el-table-column label="职位" prop="job" show-overflow-tooltip />
                    <el-table-column label="电话" prop="tel" show-overflow-tooltip />
                    <el-table-column label="邮箱" prop="email" show-overflow-tooltip />
                    <el-table-column label="下载项" prop="info" show-overflow-tooltip />
                    <el-table-column label="时间" prop="inserttime" show-overflow-tooltip />
                    <el-table-column label="操作" width="120" fixed="right">
                        <template #default="{ row }">
                             <el-button
                                v-perms="['download.download/edit']"
                                type="primary"
                                link
                                @click="handleEdit(row)"
                            >
                                编辑
                            </el-button>
                            <el-button
                                v-perms="['download.download/delete']"
                                type="danger"
                                link
                                @click="handleDelete(row.id)"
                            >
                                删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="flex mt-4 justify-end">
                <pagination v-model="pager" @change="getLists" />
            </div>
        </el-card>
        <edit-popup v-if="showEdit" ref="editRef" :dict-data="dictData" @success="getLists" @close="showEdit = false" />
    </div>
</template>

<script lang="ts" setup name="downloadLists">
import { usePaging } from '@/hooks/usePaging'
import { useDictData } from '@/hooks/useDictOptions'
import { apiDownloadLists, apiDownloadDelete } from '@/api/download'
import { timeFormat } from '@/utils/util'
import feedback from '@/utils/feedback'
import EditPopup from './edit.vue'

const editRef = shallowRef<InstanceType<typeof EditPopup>>()
// 是否显示编辑框
const showEdit = ref(false)


// 查询条件
const queryParams = reactive({
    name: '',
    company: '',
    job: '',
    tel: '',
    email: '',
    info: ''
})

// 选中数据
const selectData = ref<any[]>([])

// 表格选择后回调事件
const handleSelectionChange = (val: any[]) => {
    selectData.value = val.map(({ id }) => id)
}

// 获取字典数据
const { dictData } = useDictData('')

// 分页相关
const { pager, getLists, resetParams, resetPage } = usePaging({
    fetchFun: apiDownloadLists,
    params: queryParams
})

// 添加
const handleAdd = async () => {
    showEdit.value = true
    await nextTick()
    editRef.value?.open('add')
}

// 编辑
const handleEdit = async (data: any) => {
    showEdit.value = true
    await nextTick()
    editRef.value?.open('edit')
    editRef.value?.setFormData(data)
}

// 删除
const handleDelete = async (id: number | any[]) => {
    await feedback.confirm('确定要删除？')
    await apiDownloadDelete({ id })
    getLists()
}

getLists()
</script>

