<template>
    <div class="worksheet-list">
        <top-contanier @change="getParams" :selected-item="seletedItem" :show-type="showType"></top-contanier>
        <right-sidebar></right-sidebar>
    </div>
</template>
<style lang="less" scoped>
    .worksheet-list{
        width:100%;
        height: 100%;
        box-sizing: border-box;
        padding-right: 250px;
        position: relative;
    }
</style>

<script>
import topContanier from "../../components/top-contanier"
import rightSidebar from "../../components/right-sidebar"
export default {
    components:{
        topContanier,
        rightSidebar
    },
    data(){
        return{
            seletedItem:'',
            showType:[]
        }
        
    },
    mounted(){
        this.initShowType()
    },
    methods:{
        getParams(item){
            this.seletedItem = item.value
            console.log(item)
        },
        initShowType(){
            this.showType = [
                {
                    label:'全部',
                    value: 'all'
                },{
                    label: '已发布',
                    value: 'type1'
                },{
                    label: '未发布',
                    value: 'type2'
                }
            ]
            this.seletedItem = this.showType[0].value 
        }
    }
}
</script>
