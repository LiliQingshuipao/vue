import gHeader from './g-header/';
import gSidebar from './g-sidebar';
import gSidebarItem from './g-sidebar-item'
const components = [
    gHeader,
    gSidebar,
    gSidebarItem
]

const install = function(Vue, opts ={}){
    components.map(component =>{
        Vue.component(component.name, component)
    })
}
export default install