<template>
    <div class="details">
        <div class="title">
            <div class="pull-left">
                <div class="name">屈臣氏护肤单品监控项目</div>
                <div class="update-time">最近更新：<span>2018/05/12</span></div>
            </div>
           
            <div class="pull-right">
                <el-button>返回项目列表</el-button>
            </div>
        </div>
         <sub-nav :data="urlConfig"></sub-nav>
        <router-view></router-view>
    </div>
</template>
<style lang="less" scoped>
.details{
   
}
.pull-left{
    float: left;
}
.pull-right{
    float: right;
}
.details{
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding-top: 74px;
    position: relative;
    .title{
        overflow: hidden;
        box-shadow: 0px 3px 5px rgba(0,0,0,.2);
        position: absolute;
        height: 40px;
        width:100%;
        line-height: 40px;
        top:0px;
        left:0px;
        z-index:1;
    }
    .sub-nav{
        position: absolute;
        top:40px;
        left:0px;
        
    }
    .name{
        display: inline-block;
        vertical-align: middle;
    }
    .update-time{
        display: inline-block;
    }
}

</style>
<script>
import subNav from './components/sub-nav'
import urlConfig from './components/sub-url-config'
export default {
    components:{
        subNav
    },
    data(){
        return{
            urlConfig:urlConfig
        }
    }
}
</script>
