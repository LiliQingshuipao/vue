<template>
    <!-- test for el-tabale'click tooltip -->
    <div class="tooltip">
        <el-table :data="rawData" v-if="rawData.length">
            <el-table-column v-for="(item,key) in rawData[0]" :key="key" :prop="key" :label="key"></el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data(){
        return {
            rawData:[]
        }
    },
    mounted(){
        this.init()
    },
    methods:{
        init:function(){
            this.rawData = []
            for(let i = 0; i< 20; i++){
                let temp = {}
                for(let j = 0; j < 20;j++){
                    let key = `行列测试项${j}`
                    temp[key] = '这是一段内容测试这是一段内容测试这是一段内容测试这是一段内容测试'
                }
                this.rawData.push(temp)
            }
        }
    }
}
</script>

