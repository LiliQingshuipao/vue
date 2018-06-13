import gHeader from "./g-header";
const components = [
    gHeader,
]
const install = function(Vue,opt={}){
    components.map(component=>{
        Vue.component(component.name,component)
    })
}
export default install