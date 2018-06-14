<template>
    <div class="perview">
        <!-- <iframe ref="ifame"></iframe> -->
        <div ref='ifame' v-html="content"></div>
    </div>
</template>
<script>
export default {
    props:['value'],
    data(){
        return {
            content:'',
            stylesId:'',
            jsValueId:'',
        }
    },
    watch:{
        value(obj){
            let html;
            if (typeof obj === 'string') {
                html = obj;
            } else {
                const { head = '', body = '' } = obj;
                html = `<!DOCTYPE html><html><head>${head}</head><body>${body}</body></html>`;
            }
            this.$refs.ifame.$el.html(html)
        }
    },
    methods:{
        setHtml(obj){
            console.log(obj)
            // html代码
            let html = obj.html;
            let css = obj.css //css样式
            let js = obj.js //js代码
            //生成 style标签
            if(css){
                // 找到已经添加的style 删除掉 避免重复添加！
                let nodeList = document.querySelectorAll('style[data-id]')||[]
                if(nodeList.length){
                    nodeList.forEach(el=>{
                        el.parentNode.removeChild(el)
                    })
                }

                var styles = document.createElement('style')
                styles.setAttribute("type","text/css")
                this.stylesId = (new Date()).getTime()
                styles.setAttribute('data-id',this.stylesId)
                if(styles.styleSheet) {//ie
                    styles.styleSheet.cssText = css
                }else{
                    var cssText = document.createTextNode(css)
                    styles.appendChild(cssText)
                }
                var heads = document.getElementsByTagName("head")
                if(heads.length){
                    heads[0].appendChild(styles)
                }else{
                    document.documentElement.appendChild(styles)
                }
            }
            //生成script标签
            if(js){
                // 检查是不是有被添加过 如果有则删除 防止重复
                let nodeList = document.querySelectorAll('script[data-id]') || []
                if(nodeList.length){
                    nodeList.forEach(el=>{
                        el.parentNode.removeChild(el)
                    })
                }
                var script = document.createElement('script')
                script.setAttribute("type","text/javascript")
                this.jsValueId = (new Date()).getTime()
                script.setAttribute('data-id',this.jsValueId)
                script.text= js
                var heads = document.getElementsByTagName("head")
                if(heads.length){
                    heads[0].appendChild(script)
                }else{
                    document.documentElement.appendChild(script)
                }
            }
            
            // console.log(obj)
            // if (typeof obj.name === 'string') {
            //     html = obj.name;
            // } else {
            //     const { head = '', body = '' } = obj.name;
                
            // }
            this.content = html
            console.log(this.content)
        }
    },
    mounted(){
        console.log(this)
    }
}
</script>

