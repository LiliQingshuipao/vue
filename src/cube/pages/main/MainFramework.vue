<template>
    <div class="main-framework">
        <router-link :to="{name: 'MainList'}"><Button>LIST</Button></router-link>
        <router-link :to="{name: 'MainDetails'}"><Button>DETAILS</Button></router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        
    }
}
</script>

