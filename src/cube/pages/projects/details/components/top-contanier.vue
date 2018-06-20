<template>
    <div class="top-contanier">
        <el-row class="top-row">
            <el-col :span="8">
                <div class="grid-content search-box">
                    <el-input placeholder="请输入搜索内容" v-model="searchContent"  suffix-icon="el-icon-search"></el-input>
                </div
            ></el-col>
            <el-col :span="8">
                <div class="grid-content filter-box">
                    <ul>
                        <li v-for="item in showType" :key="item.value" @click="getParams(item)"
                            :class="{'active': selectedItem == item.value}">{{item.label}}</li>
                    </ul>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content sort-box">
                    <!-- <span>排序</span> -->
                    <el-dropdown trigger="click" placement="bottom">
                        <span class="el-dropdown-link">
                            <i class="el-icon-sort-down"></i>默认
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>默认</el-dropdown-item>
                            <el-dropdown-item>创建时间</el-dropdown-item>
                            <el-dropdown-item>编辑时间</el-dropdown-item>
                            <el-dropdown-item>文件名</el-dropdown-item>
                            <el-dropdown-item>创建者</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>列表</span>
                </div>
            </el-col>
        </el-row>
        <div class="search-box">
            
        </div>
        <div class="show-type">
            
        </div>
        <div class="">
        </div>
    </div>
</template>
<style lang="less" scoped>
.top-contanier{
    width:100%;
    text-align: left;
    height: 40px;
    box-sizing:border-box;
    padding-top: 5px;
    border-bottom: 1px solid #ececec;
}
.top-row{
    width: 100%;
    height: 100%;   
}
input{
        height: 30px;
        line-height: 30px;
    }
.search-box{
    // width: 33.33%;
    text-align: left;
    display: inline-block;
    box-sizing: border-box;
    padding-left: 20px;
    .el-input{
        width:200px;
        /deep/ .el-input__inner{
            height:30px;
            line-height: 30px;
        }
        /deep/ .el-input__icon{
            line-height: 30px;
        }
    }
}
.filter-box{
    padding: 5px 0px;
    ul{
        li{
            display: inline-block;
            padding: 0 20px;
            height: 20px;
            line-height: 20px;
            background-color: #fff;
            border-radius:20px;
            color:#ececec;
            margin:0 10px;
            font-size: 13px;
            cursor: pointer;
            &.active{
                background-color: #3cbfae;
                color:#fff;
            }
        }
    }
}
.sort-box{
    text-align: right;
    box-sizing: border-box;
    padding-right: 20px;
    font-size:13px;
    line-height: 30px;
    height: 30px;
}
</style>

<script>
export default {
    props:{
        selectedItem:'',
        showType:{
            type:Array,
            default:()=>[]
        },
    },
    data(){
        return {
            searchContent:'',
            // showType:[
            //     {
            //         label:'全部',
            //         value: 'all'
            //     },{
            //         label:'已发布',
            //         value: 'type1'
            //     },{
            //         label: '未发布',
            //         value: 'type2'
            //     }
            // ]
        }
    },
    methods:{
        getParams(item){
            this.$emit('change', item)
        }
    }
}
</script>

