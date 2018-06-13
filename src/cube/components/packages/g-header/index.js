import component from "./src/app"
component.install = function(Vue){
    Vue.component(component.name, component)
} 
console.log(component)
export default component