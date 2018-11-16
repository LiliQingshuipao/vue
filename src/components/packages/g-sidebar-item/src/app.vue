<template>
    <div class="g-sidebar__item">
        <span class="g-sidebar__item__title" @click="toggleShowSubMenu">
             <Icon type="ios-analytics" class="g-sidebar__item__icon" />
             <span class="g-sidebar__item__title__name">Navigation One</span>
             <Icon class="g-sidebar__item__icon__right" :class="isShowSubMenu?'toggle':''" type="ios-arrow-down" />
        </span>
        <el-collapse-transition>
            <ul class="g-sidebar__item__sub-menu" v-show="isShowSubMenu">
                <li class="g-sidebar__item__sub-menu__item">option1</li>
                <li class="g-sidebar__item__sub-menu__item">option2</li>
                <li class="g-sidebar__item__sub-menu__item">option3</li>
            </ul>
        </el-collapse-transition>
        
    </div>
</template>
<script>
export default {
    name: 'g-sidebar-item',
    data(){
        return {
            isShowSubMenu:false
        }
    },
    props:{
        item:{
            type:Object,
            default:()=>{}
        }
    },
    methods:{
        toggleShowSubMenu:function(){
            this.isShowSubMenu = !this.isShowSubMenu
        }
    }
}
</script>

