<template>
    <div class="perview">
        <div ref="ifame" v-html="content"></div>
    </div>
</template>
<script>
export default {
    props:['value'],
    data(){
        return {
            content:''
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
            let html;
            console.log(obj)
            if (typeof obj.name === 'string') {
                html = obj.name;
            } else {
                const { head = '', body = '' } = obj.name;
                html = `<!DOCTYPE html><html><head>${head}</head><body>${body}</body></html>`;
            }
            this.content = html
            console.log(this.content)
            // $(this.$refs.ifame).html(html)
        }
    },
    mounted(){
        console.log(this)
    }
}
</script>

