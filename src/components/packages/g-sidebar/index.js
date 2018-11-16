import component from './src/app'

component.install = function(Vue){
    Vue.component(component.name, component)
}
export default component