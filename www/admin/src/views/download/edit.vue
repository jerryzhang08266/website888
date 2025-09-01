<template>
    <div class="edit-popup">
        <popup
            ref="popupRef"
            :title="popupTitle"
            :async="true"
            width="550px"
            @confirm="handleSubmit"
            @close="handleClose"
        >
            <el-form ref="formRef" :model="formData" label-width="90px" :rules="formRules">
                <el-form-item label="名称" prop="name">
                    <el-input v-model="formData.name" clearable placeholder="请输入名称" />
                </el-form-item>
                <el-form-item label="公司" prop="company">
                    <el-input v-model="formData.company" clearable placeholder="请输入公司" />
                </el-form-item>
                <el-form-item label="职位" prop="job">
                    <el-input v-model="formData.job" clearable placeholder="请输入职位" />
                </el-form-item>
                <el-form-item label="电话" prop="tel">
                    <el-input v-model="formData.tel" clearable placeholder="请输入电话" />
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="formData.email" clearable placeholder="请输入邮箱" />
                </el-form-item>
                <el-form-item label="下载项" prop="info">
                    <el-input v-model="formData.info" clearable placeholder="请输入下载项" />
                </el-form-item>
            </el-form>
        </popup>
    </div>
</template>

<script lang="ts" setup name="downloadEdit">
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { apiDownloadAdd, apiDownloadEdit, apiDownloadDetail } from '@/api/download'
import { timeFormat } from '@/utils/util'
import type { PropType } from 'vue'
defineProps({
    dictData: {
        type: Object as PropType<Record<string, any[]>>,
        default: () => ({})
    }
})
const emit = defineEmits(['success', 'close'])
const formRef = shallowRef<FormInstance>()
const popupRef = shallowRef<InstanceType<typeof Popup>>()
const mode = ref('add')


// 弹窗标题
const popupTitle = computed(() => {
    return mode.value == 'edit' ? '编辑下载中心' : '新增下载中心'
})

// 表单数据
const formData = reactive({
    id: '',
    name: '',
    company: '',
    job: '',
    tel: '',
    email: '',
    info: '',
})


// 表单验证
const formRules = reactive<any>({
    name: [{
        required: true,
        message: '请输入名称',
        trigger: ['blur']
    }],
    company: [{
        required: true,
        message: '请输入公司',
        trigger: ['blur']
    }],
    job: [{
        required: true,
        message: '请输入职位',
        trigger: ['blur']
    }],
    tel: [{
        required: true,
        message: '请输入电话',
        trigger: ['blur']
    }],
    email: [{
        required: true,
        message: '请输入邮箱',
        trigger: ['blur']
    }],
    info: [{
        required: true,
        message: '请输入下载项',
        trigger: ['blur']
    }]
})


// 获取详情
const setFormData = async (data: Record<any, any>) => {
    for (const key in formData) {
        if (data[key] != null && data[key] != undefined) {
            //@ts-ignore
            formData[key] = data[key]
        }
    }
    
    
}

const getDetail = async (row: Record<string, any>) => {
    const data = await apiDownloadDetail({
        id: row.id
    })
    setFormData(data)
}


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData,  }
    mode.value == 'edit' 
        ? await apiDownloadEdit(data) 
        : await apiDownloadAdd(data)
    popupRef.value?.close()
    emit('success')
}

//打开弹窗
const open = (type = 'add') => {
    mode.value = type
    popupRef.value?.open()
}

// 关闭回调
const handleClose = () => {
    emit('close')
}



defineExpose({
    open,
    setFormData,
    getDetail
})
</script>
