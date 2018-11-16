<template>
    <div class="g-sidebar">
        <Sider hide-trigger collapsible :collapsed-width="78" :style="{height:'100%'}" v-model="isCollapsed" > 
            <!-- <Menu :open-names="['1']" accordion theme="dark" width="auto" >
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper" />
                        内容管理
                    </template>
                    <MenuItem name="1-1">文章管理</MenuItem>
                    <MenuItem name="1-2">评论管理</MenuItem>
                    <MenuItem name="1-3">举报管理</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people" />
                        用户管理
                    </template>
                    <MenuItem name="2-1">新增用户</MenuItem>
                    <MenuItem name="2-2">活跃用户</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-stats" />
                        统计分析
                    </template>
                    <MenuGroup title="使用">
                        <MenuItem name="3-1">新增和启动</MenuItem>
                        <MenuItem name="3-2">活跃分析</MenuItem>
                        <MenuItem name="3-3">时段分析</MenuItem>
                    </MenuGroup>
                    <MenuGroup title="留存">
                        <MenuItem name="3-4">用户留存</MenuItem>
                        <MenuItem name="3-5">流失用户</MenuItem>
                    </MenuGroup>
                </Submenu>
            </Menu> -->
             <Menu active-name="1-2" theme="dark" width="auto" >
                <menu-item name="1-1">
                    <Icon type="ios-navigate"></Icon>
                    <span>Option 1</span>
                </menu-item>
                <menu-item name="1-2">
                    <Icon type="ios-search"></Icon>
                    <span>Option 2</span>
                </menu-item>
                <menu-item name="1-3">
                    <Icon type="ios-settings"></Icon>
                    <span>Option 3</span>
                </menu-item>    
            </Menu>
        </Sider>
    </div>
</template>
<script>
export default {
    name: 'g-sidebar',
    data(){
        return {
            // isCollapsed:false,
        }
    },
    props:{
        sidebarToggle:{
            type:Boolean,
            default:false
        }
    },
    computed:{
        isCollapsed:function(){
            return this.sidebarToggle
        }
    }
}
</script>

