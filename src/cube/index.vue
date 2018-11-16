<template>
    <div class="base__framework" :class="sidebarToggle?'padding__left__toggle':''">
        <g-header @iconClick="iconClick"></g-header>
        <g-sidebar :sidebar-toggle="sidebarToggle" :class="sidebarToggle?'toggle':''"></g-sidebar>
        <div class="base__container">
            <router-view></router-view>
        </div>
        
    </div>
</template>

<script>

export default {
    data(){
        return {
            sidebarToggle:false
        }
    },
    mounted(){
        this.$proxy({
            url: '/serv/script/gX9r/watsons/young/gender',
            type:'post'
        }).then(res =>{
            console.log(res)
        })
    },
    methods:{
        
        iconClick:function(){
            this.sidebarToggle = !this.sidebarToggle
        }
    }
}
</script>
