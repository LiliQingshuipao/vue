<template>
    <div class = "drag">
        <div class="drag_left_box">
            <ul class="fields">
                <li v-for="field in fields" :draggable="true" :key="field" 
                    @dragstart="handleDragStart($event)" 
                    @dragover="handleDragMove($event)"
                    @dragend="handleDragEnd($event)"
                >{{field}}</li>
            </ul>
        </div>
        <div class="drag_main_box">
            <div class="drag_main_top_box field-drop-zone">
                <div class="field-drop field-row">
                    <span class="key">行</span>
                    <div class="drop-zone" data-type="row" @drop="hanldeDrop($event,'row')">
                        <div class="item-wrap" v-for="item in rowFields" :key="item">
                            <span class="word">{{item}}</span>
                        </div>
                    </div>
                </div>
                <div class="field-drop field-col">
                    <span class="key">列</span>
                    <div class="drop-zone" data-type="row"  @drop="hanldeDrop($event,'col')">
                        <div class="item-wrap" v-for="item in colFields" :key="item">
                            <span class="word">{{item}}</span>
                        </div>
                    </div>
                </div>
                <div class="field-drop field-value">
                    <span class="key">值</span>
                    <div class="drop-zone" data-type="row"  @drop="hanldeDrop($event,'value')">
                        <div class="item-wrap" v-for="item in valueFields" :key="item">
                            <span class="word">{{item}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
@paddingLeft:250px;
@paddingTop:100px;
.drag{
    width:100%;
    height: 100%;
    box-sizing: border-box;
    padding-left:@paddingLeft;
    position: relative;
    .drag_left_box{
        width:@paddingLeft;
        height: 100%;
        box-sizing: border-box;
        position: absolute;
        left:0px;
        top:0px;
        .fields{
            margin-top: @paddingTop;
            width:100%;
            li{
                width:100%;
                height:35px;
                line-height: 35px;
                cursor: pointer;
                user-select: none;
            }
        }
    }
    .drag_main_box{
        width:100%;
        height: 100%;
        box-sizing: border-box;
        padding-top: @paddingTop;
        position: relative;
    }
    .drag_main_top_box{
        width:100%;
        height:@paddingTop;
        box-sizing:border-box;
        position:absolute;
        left:0px;
        top: 0px;
    }
    .field-drop-zone{
        .field-drop{
            display: inline-block;
            width:30%;
            height: 35px;
            line-height: 35px;
            position: relative;
            padding-left: 50px;
            box-sizing: border-box;
            vertical-align: middle;
            .key{
                width: 50px;
                height: 100%;
                position: absolute;
                text-align: left;
                left:0px;
                top:0px;
            }
            .drop-zone{
                width:100%;
                height: 100%;
                border: 1px dashed #dfe2e2;
                text-align: left;
                .item-wrap{
                    span{
                        background-color:#f9f9f9;
                        height: 30px;
                        line-height:30px;
                        border: 1px solid #eee;
                        padding: 0 5px;
                        color:#818181;
                        cursor: pointer; 
                    }
                }
            }
        }
        &::after{
            content:'';
            height: 100%;
            display: inline-block;
            vertical-align: middle;
        }
    }
    
}
</style>
<script>
export default {
    data(){
        return {
            fields:[
                '情感值',
                '发表日期',
                '最新评论',
                '网站名称',
                '所属板块',
                '内容',
                '作者'
            ],
            rowFields:['测试'],
            colFields:[],
            valueFields:[]
        }
    },
    methods:{
        handleDragStart:function(e){
            // console.log(e)
        },
        handleDragMove:function(e){
            // console.log(e)
        },
        handleDragEnd:function(e){
            // console.log(e)
        },
        hanldeDrop:function(e,type){
            console.log(type)
        }
    }
}
</script>

