<template>
    <div class="g-header">
        <span class="g-header__logo" @click="iconClick"><Icon type="md-menu" /></span>
        <span>this is a paragraph</span>
    </div>
</template>
<script>
export default {
    name: "g-header",
    data(){
        return {
            
        }
    },
    methods:{
        iconClick:function(){
            this.$emit('iconClick')
        }
    }
}
</script>

