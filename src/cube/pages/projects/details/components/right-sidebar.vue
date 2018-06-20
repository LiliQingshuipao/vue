<template>
    <div class="right-sidebar">
        <div class="add-box">
            <!-- <el-button @click="showAddMenu = !showAddMenu">+ 新建</el-button>
            <el-collapse-transition>
                <ul class="right-sidebar__dropdown-menu" v-show="showAddMenu">
                    <li>新建文件夹</li>
                    <li>新建工作表</li>
                </ul>
            </el-collapse-transition> -->
           <el-popover trigger="click" popper-class="right-sidebar__dropdown-menu" :visible-arrow="false">
                <ul class="">
                    <li>新建文件夹</li>
                    <li>新建工作表</li>
                </ul>
                <el-button slot="reference">+ 新建</el-button>
            </el-popover>
            <!-- <el-dropdown placement="bottom" trigger="click">
                <el-button >
                    + 新建
                </el-button>
                <el-dropdown-menu slot="dropdown" class="right-sidebar__dropdown-menu">
                    <el-dropdown-item>新建文件夹</el-dropdown-item>
                    <el-dropdown-item>新建工作表</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown> -->
        </div>
        <div>最近查看</div>
        <ul class="recent-list">
            <li v-for="item in recentList" :key="item.id">{{item.name}}</li>
        </ul>
    </div>
</template>
<style lang="less">
.right-sidebar{
    width:250px;
    height: 100%;
    position: absolute;
    top:0px;
    right: 0px;
    border-left: 1px solid #ececec;
    .add-box{
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        position: relative;
        .el-dropdown{
            width: 100%;
        }
        .el-button{
            padding: 6px 20px;
            width: 80%;
        }
    }
    .recent-list{
        width:100%;
        text-align: left;
        li{
            list-style:none;
            line-height: 30px;
            height: 30px;
            width:100%;
            box-sizing:border-box;
            padding-left: 20px;
        }
    }
}
.right-sidebar__dropdown-menu{
    width:200px;
    // top:37px;
    // left:0px;
    // right: 0px;
    // margin: 0 auto;
    box-sizing: border-box;
    &.el-popper{
        margin-top:0px;
    }
    li{
        list-style: none;
        line-height: 36px;
        padding:0 20px;
        box-sizing: border-box;
        cursor:pointer;
        outline:none;
    }
}
</style>

<script>
export default {
    data(){
        return{
            recentList:[
                {
                    id:1,
                    name: '小奶狗争霸赛'
                },{
                    id:2,
                    name: '名称很长很长'
                },{
                    id: 3,
                    name:'ipsos活动检测'
                }
            ],
            showAddMenu:false
        }
    },
}
</script>

